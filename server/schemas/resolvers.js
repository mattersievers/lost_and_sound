const { AuthenticationError } = require('apollo-server-express');
const { User, Equipment } = require('../models');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        me: async (parent, args, context) =>{
            if(context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                .select('-_v -password')
                .populate('savedEquipment')

                return userData;
            }

            throw new AuthenticationError('Not logged in');
        },
        users: async () => {
            return User.find()
            .select('-__v -password')
            .populate('savedEquipment')
        },
        equipment: async () => {
            return Equipment.find()
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        login: async (parent, {email,password}) => {
            const user = await User.findOne({ email });

            if(!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }

            const token = signToken(user)
            return { token, user };
        },
        saveEquipment: async(parent, args, context) => {
            if(context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { savedEquipment: { 
                        category: args.input.category,
                        brand: args.input.brand,
                        model: args.input.model,
                        description: args.input.description,
                        serialNumber: args.input.serialNumber,
                        image: args.input.image,
                        location: args.input.location
                    } } },
                    { new: true }
                );

                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },    
        removeEquipment: async(parent, args, context) => {
            if(context.user) {
                const updatedUser = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $pull: {savedEquipment: { _id: args._id } } },
                    { new:true }
                );
                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in!');
        },
        updateEquipment: async (parent, args, context) => {
            if(context.user) {
                return await Equipment.findByIdAndUpdate(args.input._id, args, { new: true });
            }
            throw new AuthenticationError('You need to be logged in!');
          },
    }
}

module.exports = resolvers;
