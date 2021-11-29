import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { UPDATE_EQUIPMENT, SAVE_EQUIPMENT, REMOVE_EQUIPMENT } from '../../utils/mutations';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import {L}  from "leaflet";


const EquipmentRegistration = () =>{
    // Handles form data
    const [equipmentFormData, setEquipmentFormData] = useState({category: '', brand: '', model: '', description:'', serialNumber:'', image: '', location: '', lost: false });

    const handleFormSubmit= async(event)=>{
        event.preventDefault();
    };

    // gets location of user and implements a draggable icon on the map
    function LocationMarker() {
        const [draggable, setDraggable] = useState(false);
        const [position, setPosition] = useState(null);
        const markerRef = useRef(null)
    
        const map = useMap();
    
        useEffect(() => {
          map.locate().on("locationfound", function (e) {
            setPosition(e.latlng);
            map.flyTo(e.latlng, map.getZoom());
            const radius = e.accuracy;
          });
        }, [map]);

        const eventHandlers = useMemo(
            () => ({
              dragend() {
                const marker = markerRef.current
                if (marker != null) {
                  setPosition(marker.getLatLng())
                }
              },
            }),
            [],
          )
          const toggleDraggable = useCallback(() => {
            setDraggable((d) => !d)
          }, [])
        
        return position === null ? null : (
          <Marker position={position} draggable={draggable} eventHandlers={eventHandlers} ref={markerRef}>
            <Popup >
                <span onClick = {toggleDraggable} >
                    {draggable
                    ? 'The nearest location to where the equipment was lost or your current location.'
                    : 'The nearest location to where the equipment was lost or your current location. Click here to drag!'}
                </span>     
            </Popup>
          </Marker>
        );
      };

    return(
        
        <>
                <h2>Register Equipment</h2>
                <form onSubmit={handleFormSubmit}>

                <label htmlFor="category">Category: </label>
                <input name="category" id="category"></input>

                <label htmlFor="brand">Brand: </label>
                <input name="brand" id="brand"></input>

                <label htmlFor="model">Model: </label>
                <input name="model" id="model"></input>

                <label htmlFor="description">Description: </label>
                <input name="description" id="description"></input>

                <label htmlFor="serialNumber">Serial Number: </label>
                <input name="serialNumber" id="serialNumber"></input>

                <label htmlFor="image">Image: </label> 
                <input name="image" id="image"></input>

                <label htmlFor="location">Location: </label>
                <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: "50vh", width:"50vw"}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker />  
                </MapContainer>
                
               
                <label htmlFor="lost">Is the equipment lost?
                <input type="radio" value={true} name="lost" /> Yes
                <input type="radio" value={false} name="lost" checked={true}/> No
                </label>
                
                <button type="submit">Submit</button>
                </form>
        </>
    );
};

export default EquipmentRegistration;