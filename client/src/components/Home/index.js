import { useQuery } from '@apollo/client';
import React from 'react';
import { GET_EQUIPMENT } from '../../utils/queries';


function Home() {
    const { loading, data: userData } = useQuery(GET_EQUIPMENT);
    
    if(loading) {
        return <h1> LOADING... </h1>
    }

    return(
        <section className="home d-flex flex-column ">
            <div className="align-self-center">
                <h1>Welcome to Lost and Sound</h1>
                <p className="">
                    A place where the music community comes together to rally behind those that have lost equipment in an effort to return the item to its proper home.
                </p>
            </div>
            
            <div>
                <h1>Lost Equipment</h1>
            </div>
            
            <div>
                {userData.users.map((user) => {
                    return (
                    <>
                    <div>
                    {user.firstName} {user.lastName}
                    </div>
                    {user.savedEquipment.map((item) => {
                        if (item.lost) {
                    return(
                        <ul>
                            <li>Category: `{item.category}`</li>
                            <li>Brand: `{item.brand}`</li>
                            <li>Model: `{item.model}`</li>
                            <li>Description: `{item.description}`</li>
                            <li>Serial Number:  `{item.serialNumber}`</li>
                            <li>Image: `{item.image}`</li>
                            
                        </ul>
                    )}
                    })};
                    </>
                    )
                })}
            </div>
        
          
        </section>
    )
}
/*              <h1 className="equipCat">{users.savedEquipment.category}</h1>
                <p className="equipBrand">{users.equipment.brand}</p>
                <p className="equipModel">{users.equipment.model}</p>
                <p className="equipDesc">{users.equipment.description}</p>
                <p className="equipNumber">{users.equipment.serialNumber}</p>
                <p className="equipImage">{users.equipment.image}</p>
                <p className="equipLocation">{users.equipment.location}</p>
                <p className="equipModel">{users.equipment.model}</p> 
*/

export default Home;
