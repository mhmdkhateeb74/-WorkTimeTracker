import React, {useState} from 'react';
import {Box, Button, TextField} from "@mui/material";
import {useAddCheckIn} from "../API/apiHook";

function CheckIn(props) {
    const {isAdding, addcheckin} = useAddCheckIn();
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
        addcheckin(formData);
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

            <Button type="submit" variant="contained" color="primary" disabled={isAdding} >
                Enter
            </Button>

        </form>
    );
}

export default CheckIn;