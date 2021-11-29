import React, { useState } from "react";
import { UPDATE_EQUIPMENT, SAVE_EQUIPMENT, REMOVE_EQUIPMENT } from '../../utils/mutations';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const EquipmentRegistration = () =>{
    const [equipmentFormData, setEquipmentFormData] = useState({category: '', brand: '', model: '', description:'', serialNumber:'', image: '', location: '', lost: false });

    const handleFormSubmit= async(event)=>{
        event.preventDefault();
    };

    return(
        

        <>
                <h2>Register Equipment</h2>
                <form onSubmit={handleFormSubmit}>
                <label htmlFor="location">Location: </label>
                <div className = "mapContainer">
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                    </MapContainer>
                </div>
                <button type="submit">Submit</button>
                
                </form>
        </>
    );
};

export default EquipmentRegistration;