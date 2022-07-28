const { AuthenticationError } = require('apollo-server-express');
const { Customer, Pizza, Employee, Order } = require('../models');
const { signToken } = require('../utils/auth');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        customers: async () => {
            return await Customer.find({}); 
        },
        pizzas: async () => {
            return await Pizza.find({}).populate("customer"); 
        },
        orders: async () => {
            return await Order.find({}).populate("pizza"); 
        },
        pizza: async (parent, args) => {
            return await Pizza.findById(args.id).populate("customer"); 
        },
        customer: async (parent, args, context) => {
            if (context.user) {
                const customer = await Customer.findById(args.id).populate("pizza");
                
                return customer;
            }

            throw new AuthenticationError("Please login!");
             
        },
        order: async (parent, args) => {
            return await Order.findById(args.id).populate("pizza"); 
        }
    },
    Mutation: {
        addCustomer: async (parent, args) => {
            const customer = await Customer.create(args);
            const token = signToken(user);

            return {token, customer}
        },
        addPizza: async (parent, {size, crust, meats, veggies}, context) => {
            console.log(context);
            if (context.user) {
                const pizza = new Pizza({size, crust, meats, veggies});
                const pizzaDb = pizza.save();
                console.log(pizzaDb);
                const orderDb = Order.create({$push: {pizzas: pizzaDb._id}})
                
                await Customer.findOneAndUpdate(context.order._id, {$push: {pizzas: pizzaDb._id}});

                return pizza;
            }
            
            throw new AuthenticationError("Please login!");
        },
        updatePizza: async (parent, {_id, size, crust, meats, veggies}) => {
            return await Pizza.findOneAndUpdate(
                {_id: id},
                {size},
                {crust},
                {meats},
                {veggies}
            );
        },
        deletePizza: async (parent, {_id}) => {
            return await Pizza.findOneAndDelete({_id});
        },
        addOrder: async (parent, { customerId }, context) => {
            if (context.user) {
                const orderDb = Order.create({status: "In progress"});
                Customer.findByIdAndUpdate(customerId, {$push: {orders: orderDb._id}});

                return orderDb;
            }
            
        },
        updateOrder: async (parent, {_id, status, createdDate, pizza}) => {
            return await Pizza.findOneAndUpdate(
                {_id: id},
                {status},
                {createdDate},
                {pizza},
            );
        },
        deleteOrder: async (parent, {_id}) => {
            return await Order.findOneAndDelete({_id});
        },
    }
};

module.exports = resolvers;