import React from 'react';
import { GET_EQUIPMENT } from '../../utils/queries';


const Home = () => {
    return(
        <section className="home d-flex flex-column ">
            <div className="align-self-center">
                <h1>Welcome to Lost and Sound</h1>
                <p className="">
                    A place where the music community comes together to rally behind those that have lost equipment in an effort to return the item to its proper home.
                </p>
            </div>
            
            <div>
                
                <h1 className="equipCat" {users.savedEquipment.category}></h1>
                <p className="equipBrand">{users.equipment.brand}</p>
                <p className="equipModel">{users.equipment.model}</p>
                <p className="equipDesc">{users.equipment.description}</p>
                <p className="equipNumber">{users.equipment.serialNumber}</p>
                <p className="equipImage">{users.equipment.image}</p>
                <p className="equipLocation">{users.equipment.location}</p>
                <p className="equipModel">{users.equipment.model}</p>
                
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
