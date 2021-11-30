import { gql } from '@apollo/client';

export const GET_ME = gql`
    me{
        firstName
        lastName
        email
        savedEquipment{
            _id
            category
            brand
            model
            description
            serialNumber
            image
            location
            lost
        }    
    }
`;

export const GET_EQUIPMENT = gql`
users {
    savedEquipment{
        _id
        category
        brand
        model
        description
        serialNumber
        image
        location
        lost
    }    
}
`;


export const GET_MY_EQUIPMENT = gql`
me {
    savedEquipment{
        _id
        category
        brand
        model
        description
        serialNumber
        image
        location
        lost
    }    
}
`;

export const GET_USERS = gql` 
    users{
      _id
      firstName
      lastName
      email
      savedEquipment{
        _id
        category
        brand
        serialNumber
        location
        model
      }
    }
`;