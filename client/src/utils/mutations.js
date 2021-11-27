import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $password: String!, $email: String!) {
    addUser(firstName: $firstName, lastName: $lastName, password: $password, email: $email) {
      token
      user{
        _id
      }
    }
}
`;

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
}
`;

export const SAVE_EQUIPMENT = gql`
mutation saveEquipment( $input: EquipmentInput! ) {
    saveEquipment(input: $input){
      firstName
      lastName
      savedEquipment{
        _id
        brand
        serialNumber
        location
      }
    }
}
`;

export const REMOVE_EQUIPMENT = gql`
mutation removeEquipment( $_id: ID!) {
    removeEquipment ( _id : $_id) {
      firstName
      lastName
      savedEquipment{
        _id
        brand
        serialNumber
        location
      }
    }
}  
`;

export const UPDATE_EQUIPMENT = gql`
mutation updateEquipment( $input: EquipmentUpdate! ) {
    updateEquipment(input: $input){
      firstName
      lastName
      savedEquipment{
        _id
        brand
        serialNumber
        location
      }
    }
}  
`;