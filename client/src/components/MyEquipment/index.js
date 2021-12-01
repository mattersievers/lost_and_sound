import { useQuery } from '@apollo/client';
import React, { useEffect } from 'react';
import { GET_MY_EQUIPMENT } from '../../utils/queries';

function MyEquipment() {
    const { loading, data: userData } = useQuery(GET_MY_EQUIPMENT);

    if(loading) {
        return <h1> LOADING... </h1>
    }

    return (
        <section className="home d-flex flex-column">
            <div className="align-self-center  sectionHead">
                <h1> My Equipment </h1>
                <div className="userName">
                {userData.me.savedEquipment.length 
                ? `Viewing ${userData.me.firstName}  ${userData.me.lastName}'s equipment.`
                : "You have not saved any equipment yet." }
                </div>
            </div>

            <div className="align-self-center userEquipment">
                {userData.me.savedEquipment.map((item) => {
                    return (
                        <ul>
                            <li>Category: `{item.category}`</li>
                            <li>Brand: `{item.brand}`</li>
                            <li>Model: `{item.model}`</li>
                            <li>Description: `{item.description}`</li>
                            <li>Serial Number:  `{item.serialNumber}`</li>
                            <li>Image: `{item.image}`</li>
                            <li>{item.lost? `Your item has been reported lost.` : `You have this item.`}</li>
                        </ul>
                    )
                })}
            </div>
        </section>
    );
}

export default MyEquipment;