import { gql } from '@apollo/client';

export const GET_ME = gql`
{
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
}`;

export const GET_EQUIPMENT = gql`
{
    users {
        firstName
        lastName
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
}`;


export const GET_MY_EQUIPMENT = gql`
{
    me {
        firstName
        lastName
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
}`;

export const GET_USERS = gql` 
{
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
}`;

export const DONATE = gql`
    query getDonation($amount: Int!){
        donate(amount: $amount) {
            session
        }
    }
`;