//fetch on itself and grab from the url the name of the restaurant
import React from 'react'
import {useEffect, useState} from 'react'
import Map from "./Map";


function Restaurant() {
    const [center, setCenter] = useState([])
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    const [hours, setHours] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [notes, setNotes] = useState('')

    //pulling the restaurant id out of the url using pathname
    let restName = window.location.pathname.split('/')[2]

    useEffect(() => {
        let tempName
        let tempAddress
        let tempPhone
        let tempHours
        let tempLatitude
        let tempLongitude
        let tempNotes
        fetch(`/api/${restName}`)
        .then((res) => res.json())
        .then((singleRestArray) => {
            console.log(singleRestArray)
            tempName = singleRestArray.name
            tempAddress = singleRestArray.address
            tempPhone = singleRestArray["phone number"]
            tempHours = singleRestArray.hours
            tempLatitude = singleRestArray.latitude
            tempLongitude = singleRestArray.longitude
            tempNotes = singleRestArray.notes
        })
        //sets are currently not updating the return
        setName(tempName)
        setAddress(tempAddress)
        setPhone(tempPhone)
        setHours(tempHours)
        setCenter([tempLatitude], [tempLongitude])
        setNotes(tempNotes)
    }, [restName])

    return (
        <div>
        <h1>{restName}</h1>
        <div>{name}</div>
        <div>{address}</div>
        <div>{phone}</div>
        <div>{hours}</div>
        <div>{latitude}</div>
        <div>{longitude}</div>
        <div>{notes}</div>
        </div>
    )
}

export default Restaurant