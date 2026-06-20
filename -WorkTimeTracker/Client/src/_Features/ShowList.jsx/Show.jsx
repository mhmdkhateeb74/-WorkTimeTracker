import React, {useState} from 'react';
import {Box, Button, TextField, Table, TableBody, TableCell, TableHead, TableRow, Typography} from "@mui/material";

import {useGetEmployee,useGetAllRecord} from "../API/apiHook";

function SearchEmployee(props) {
  const { 
         data: searchRecords,
         getemployee,
         isSearching,
         isError,
         error
         } = useGetEmployee();
    const { data: { list: allRecords = [] } = {} } = useGetAllRecord();

    const recordsArr = searchRecords || allRecords;


    const [formData, setFormData] = useState({
        id:-1,
        employee_id: '',
        month:'',
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
        getemployee(formData);
    }

    if (isSearching) return <p>Searching...</p>;
    if (isError) return <p>Error: {error.message}</p>;

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
                    <TextField
                    name="month"
                    label="Enter The Month"
                    onChange={handleChange}
                    fullWidth
                    required
                />

            </Box>

            <Button type="submit" variant="contained" color="primary" disabled={isSearching} >
                Search
            </Button>


            
            <Typography variant="h2" sx={{ textAlign: 'center', mt: 2 }}>
            Work Records
            </Typography>
            <Table>
                <TableHead>
                <TableRow>
                    <TableCell>employee_id</TableCell>
                    <TableCell>entry_time</TableCell>
                    <TableCell>exit_time</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {recordsArr.map((item)=>(
                    <TableRow key={item.id}>
                        <TableCell>{item.employee_id}</TableCell>
                        <TableCell>{item.entry_time}</TableCell>
                        <TableCell>{item.exit_time}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>

        </form>


    );
}

export default SearchEmployee;