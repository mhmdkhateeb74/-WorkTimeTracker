import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useAddCheckOut} from "../API/apiHook";

function CheckOut(props) {
    const {isAdding, addcheckout} = useAddCheckOut();
    const [formData, setFormData] = useState({
        id:-1,
        employee_id: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData, "formData");
        addcheckout(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <TextField
                    name="employee_id"
                    label="Enter Your ID"
                    onChange={handleChange}
                    fullWidth
                    required
                />
            </Box>

            <Button type="submit" variant="contained" color="error" disabled={isAdding} >
            Check Out
            </Button>

        </form>
    );
}

export default CheckOut;