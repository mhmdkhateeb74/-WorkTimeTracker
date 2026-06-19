import {backURL} from "../../var.jsx";
const section = "AE";

async function AddCheckIn(formData) {
    let url=`${backURL}/${section}/Add`;
    console.log(url)
    const strToSend = JSON.stringify(formData);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: strToSend,
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

async function AddCheckOut(formData) {
    let url=`${backURL}/${section}/Update`;
    console.log(url)
    const strToSend = JSON.stringify(formData);
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: strToSend,
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

async function GetAllRecord() {
    let url=`${backURL}/${section}/List`;
    console.log(url);
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        },
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}

async function GetEmployeeRecords(formData) {
    let url=`${backURL}/${section}/Search`;
    console.log(url)
    const strToSend = JSON.stringify(formData);
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: strToSend,
        credentials: 'include'
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
}


export{
    GetAllRecord,
    AddCheckIn,
    AddCheckOut,
    GetEmployeeRecords
}