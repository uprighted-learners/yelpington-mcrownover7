import React from "react";
import { useEffect, useState } from "react";
import IndividualMap from "./IndividualMap";
import "../App.css";

function Restaurant() {
  //declaring state variables
  const [center, setCenter] = useState([40.45023, -79.96231]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [hours, setHours] = useState("");
  const [notes, setNotes] = useState("");

  //pulling the restaurant id out of the url using pathname
  let restName = window.location.pathname.split("/")[2];

  //useEffect to wrap fetch and only run on page load
  useEffect(() => {
    //declaring temp variables for assignment inside the fetch
    let tempName;
    let tempAddress;
    let tempPhone;
    let tempHours;
    let tempLatitude;
    let tempLongitude;
    let tempNotes;
    //fetch from the applicable restaurant based on the restaurant id pulled out of the url path
    fetch(`/api/${restName}`)
      .then((res) => res.json())
      .then((singleRestArray) => {
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
        setCenter([tempLatitude, tempLongitude]);
        setNotes(tempNotes);
      });
  }, []);

  //evt handler to allow for return to the homepage on click
  const homepageButton = (evt) => {
    window.location.href= `/`
  }

  //setting up the return
  return (
    <div className="main-wrapper">
      <div className="heading">
        <div id="yelp-title" onClick={homepageButton}>
          <h1>Yelpsburgh</h1>
        </div>
      </div>
      {/* restaurant name based on the state variable */}
      <div className="ind-rest-name">
        <h2>{name}</h2>
      </div>
      {/* info grid that fills based on state variables set in the fetch on page load */}
      <div className="restaurant-info-box">
        <div className="restaurant-info default">Address:</div>
        <div className="restaurant-info">{address}</div>
        <div className="restaurant-info default">Phone Number:</div>
        <div className="restaurant-info">{phone}</div>
        <div className="restaurant-info default">Hours of Operation:</div>
        <div className="restaurant-info">{hours}</div>
        <div className="restaurant-info default">Notes:</div>
        <div className="restaurant-info">{notes}</div>
      </div>
      {/* calling the individual map and passing through the necessary variables */}
      <IndividualMap name={name} center={center} setCenter={setCenter} />{" "}
      {/* <form className='comment-section' method='POST' action='/comment'>
        <label for='username'>Username: 
        <input type='text' name='username' placeholder='Enter an Username!' id='username' /></label>
        <br />
        <label for='username'>Comment: 
        <textarea name='comment' placeholder='Enter a Comment!' id='comment' /></label>
        <br />
        <input type='submit' />
      </form> */}
    </div>
  );
}

export default Restaurant;
