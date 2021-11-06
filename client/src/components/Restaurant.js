//fetch on itself and grab from the url the name of the restaurant
import React from "react";
import { useEffect, useState } from "react";
import IndividualMap from "./IndividualMap";

function Restaurant() {
  const [center, setCenter] = useState([40.45023, -79.96231]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [hours, setHours] = useState("");
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");
  const [notes, setNotes] = useState("");

  //pulling the restaurant id out of the url using pathname
  let restName = window.location.pathname.split("/")[2];

  useEffect(() => {
    let tempName;
    let tempAddress;
    let tempPhone;
    let tempHours;
    let tempLatitude;
    let tempLongitude;
    let tempNotes;
    fetch(`/api/${restName}`)
      .then((res) => res.json())
      .then((singleRestArray) => {
        // console.log(singleRestArray);
        tempName = singleRestArray.name;
        tempAddress = singleRestArray.address;
        tempPhone = singleRestArray["phone number"];
        tempHours = singleRestArray.hours;
        tempLatitude = singleRestArray.latitude;
        tempLongitude = singleRestArray.longitude;
        tempNotes = singleRestArray.notes;
        setName(tempName);
        setAddress(tempAddress);
        setPhone(tempPhone);
        setHours(tempHours);
        //THIS IS BREAKING IT
        setCenter([tempLatitude, tempLongitude]);
        setNotes(tempNotes);
      });
    // setCenter([tempLatitude], [tempLongitude]);

    //sets are currently not updating the return, a console log in the second then shows the values of the temp items are accurate
  }, []);

  return (
    <div>
      <h1>{restName}</h1>
      <div>{name}</div>
      <div>{address}</div>
      <div>{phone}</div>
      <div>{hours}</div>
      <div>{center}</div>
      <div>{notes}</div>
      <IndividualMap name={name} center={center} setCenter={setCenter} />{" "}
    </div>
  );
}

export default Restaurant;

//might need to create a second map.js component for displaying just the single centered restaurant
