const { AuthenticationError } = require('apollo-server-express');

const { Customer, Pizza, Employee, Order } = require('../models');
const { signToken } = require('../utils/auth');

// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        customers: async () => {
            return await Customer.find({}).populate("orders").populate({
                path: "orders",
                populate: "pizzas"
            });
        },
        pizzas: async () => {
            return await Pizza.find({}); 
        },
        orders: async () => {
            console.log((new AuthenticationError("resolver orders")).message )
            try {
                return await Order.find({}).populate("pizzas");
            }
            catch(err) {
                console.log(new AuthenticationError("orders error") )
                return;
            }
        },
        pizza: async (parent, args) => {
            return await Pizza.findById(args.id).populate("customer");
        },
        customer: async (parent, args, context) => {
            if (context.user) {
                const customer = await Customer.findById(args.id).populate("orders").populate({
                    path: "orders",
                    populate: "pizzas"
                });
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
            const token = signToken(customer);

            return { token, customer }
        },
        addPizza: async (parent, { size, crust, meats, veggies }, context) => {
            console.log(context);
            if (context.customer) {
                const pizza = new Pizza({size, crust, meats, veggies});
                const pizzaDb = pizza.save();
                console.log(pizzaDb);
                const orderDb = Order.create({$push: {pizzas: pizzaDb._id}})
                
                await Customer.findOneAndUpdate(context.order._id, { $push: {pizzas: pizzaDb._id} });

                return orderDb;
            }

            throw new AuthenticationError("Please login!");
        },
        updatePizza: async (parent, {_id, size, crust, meats, veggies}, context) => {
            if (context.customer) {
                const pizzaData = new Pizza({_id, size, crust, meats, veggies});
                await Pizza.findByIdAndUpdate(_id, { $inc: {size, crust, meats, veggies} }, {new: true});
                return pizzaData;
            }
            
        },
        // deletePizza: async (parent, {pizzaId}, context) => {
        //     return await Pizza.findOneAndDelete(pizzaId, {$pull: {pizzas: }});
        // },
        addOrder: async (parent, { _id, status }, context) => {
            if (context.customer) {
                const orderDb = new Order({_id, status});
                Customer.findByIdAndUpdate(context.customer._id, {$push: {orders: orderDb}});

                return orderDb;
            }
        },
        updateOrder: async (parent, {_id, status, createdDate, pizza}) => {
            return await Pizza.findByIdAndUpdate(_id, { $inc: {status} }, {new: true});
        },
        deleteOrder: async (parent, _id) => {
            return await Order.findByIdAndDelete(_id, {$pull: {_id} });
        },
        login: async (parent, { username, password }) => {
            const customer = await Customer.findOne({ username });
      
            if (!customer) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await customer.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(customer);
      
            return { token, customer };
          }
    }
};

module.exports = resolvers;