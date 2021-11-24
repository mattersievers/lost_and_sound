const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Equipment {
        _id: ID
    }

    type User {
        _id: ID
    }

    type Query {

    }

    type Mutation {

    }
`;    

module.exports = typeDefs;