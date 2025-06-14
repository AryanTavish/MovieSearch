import React, { useEffect, useState } from "react";
import {Box} from '@mui/material';

import ToggleButton from '@mui/material/ToggleButton';



const DarkMode = () =>{

     



    const [theme, setTheme]= useState('dark-theme')
    const ToggleTheme=()=>{
        
        if(theme=== "dark-theme"){
            setTheme("light-theme")
        }else{
            setTheme("dark-theme")
        }
    };

    useEffect(()=>{
        document.body.className=theme;

    },[theme])


    return (
        <Box>
            <Box onClick={()=>ToggleTheme()}>
                <ToggleButton
                value="web"
                onClick={ToggleTheme}
                sx={{
                    border: "none",
                    background: "none",
                    minWidth: 0,
                    padding: 0,
                    marginRight: 5,
                    '&.Mui-selected': { border: "none", background: "none" },
                    '&:hover': { background: "none" }
                }}
                selected={false}
            >
                {theme === "dark-theme" ? "🌙" : "☀️"}
            </ToggleButton>
            </Box>
        </Box>
        
    )
}


export default DarkMode;
