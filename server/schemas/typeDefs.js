const { gql } = require('apollo-server-express');

const typeDefs = gql`
    input EquipmentInput{
        category: String 
        brand: String
        model: String
        description: String
        serialNumber: String
        image: String
        location: String
    }

    type Equipment {
        _id: ID
        category: String 
        brand: String
        model: String
        description: String
        serialNumber: String
        image: String
        location: String
        lost: Boolean
    }

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
        savedEquipment: [Equipment]
    }

    type Query {
        me: User
        users: [User]
        equipment: [Equipment]
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveEquipment(input: EquipmentInput): User
        removeEquipment(_id: ID!): User
        updateEquipment(_id: ID!): Equipment
    }
`;    

module.exports = typeDefs;