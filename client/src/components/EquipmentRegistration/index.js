import React, { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { SAVE_EQUIPMENT } from '../../utils/mutations';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useMutation } from "@apollo/client";

const EquipmentRegistration = () =>{
    // Handles form data
    const [equipmentFormData, setEquipmentFormData] = useState({category: '', brand: '', model: '', description:'', serialNumber:'', image: '', location: '', lost: false });
    const [saveEquipment, {error}] = useMutation(SAVE_EQUIPMENT);
    const [showAlert, setShowAlert] = useState(false);
    const [position, setPosition] = useState(null);

    useEffect(() => {
      console.log(equipmentFormData)},
      [equipmentFormData]);

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setEquipmentFormData({ ...equipmentFormData, [name]: value, location: position.toString()});
    };

    const handleFormSubmit= async(event)=>{
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        
        try{
          if(equipmentFormData.brand.length || equipmentFormData.category.length || equipmentFormData.model.length || equipmentFormData.description.length || equipmentFormData.serialNumber.length || equipmentFormData.image.length || equipmentFormData.location.length){
          const {data} = await saveEquipment({
            variables: { input: {...equipmentFormData}}
          });
          console.log(data)
        } else {setShowAlert(true); return;}
        } catch (err) {
          console.error(err);
          setShowAlert(true);
        }
    
        setEquipmentFormData({category: '', brand: '', model: '', description:'', serialNumber:'', image: '', location: '', lost: false });

    };

    // gets location of user and implements a draggable icon on the map
    function LocationMarker() {
        const [draggable, setDraggable] = useState(false);
        
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
                  <input name="category" type="category" id="category" onChange={handleInputChange}/>

                  <label htmlFor="brand">Brand: </label>
                  <input name="brand" id="brand" onChange={handleInputChange}/>

                  <label htmlFor="model">Model: </label>
                  <input name="model" id="model" onChange={handleInputChange}/>

                  <label htmlFor="description">Description: </label>
                  <input name="description" id="description" onChange={handleInputChange}/>

                  <label htmlFor="serialNumber">Serial Number: </label>
                  <input name="serialNumber" id="serialNumber" onChange={handleInputChange}/>

                  <label htmlFor="image">Image: </label> 
                  <input name="image" id="image" onChange={handleInputChange}/>

                  <label htmlFor="location">Location: </label>
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: "50vh", width:"50vw"}}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <LocationMarker />  
                    </MapContainer>
                  
                
                  <label htmlFor="lost">Is the equipment lost? </label>
                  <input type="radio" value={true} name="lost" onChange={handleInputChange}/> Yes
                  <input type="radio" value={false} name="lost" onChange={handleInputChange}/> No
                  
                  
                  {showAlert && <p>Something went wrong. Make sure the form is complete and try again.</p>}
                  <button type="submit">Submit</button>
                </form>
        </>
    );
};

export default EquipmentRegistration;