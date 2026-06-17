import React from "react";
import {createBrowserRouter} from "react-router";
import AppLayout from "../Layout/AppLayout"
import CheckIn from "../_Features/EnterPage/Enter";
import CheckOut from "../_Features/ExitPage/Exit"
import ShowList from "../_Features/ShowList.jsx/Show"


const router = createBrowserRouter([
    {
        element:<AppLayout />,
        children:[
             {path:"/",         element:<CheckIn />,     },
             {path:"/Exit",         element:<CheckOut />,     },
             {path:"/Show",         element:<ShowList />,     },

                
        ]
    },
]);

import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import EventNoteIcon from '@mui/icons-material/EventNote';



export const navItems = [
    {path:"/", name:"Enter", icon:<LoginIcon />},
    {path:"/Exit", name:"Exit", icon:<LogoutIcon />},
    {path:"/Show", name:"WorkRecords", icon:<EventNoteIcon />},

]


export default router;