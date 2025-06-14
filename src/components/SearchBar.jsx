import React from 'react';
import { Link } from 'react-router-dom';
import { rout_paths } from '../components/Routes'; // Adjust path if needed
import {Box, Input, styled} from '@mui/material'

import { useState } from 'react';  




const StyledInputBase = styled(Input)`
    background-color: #fff !important;
    color:rgb(22, 20, 20) !important;
    border-radius: 8px !important;
    padding: 0 8px !important;
    width: 750px !important;
    height:30px !important;
    poisition : absolute; !important
`;

const SearchBar = ({ movies }) => {
  
  
  const [data, setData] = useState("");

  const getData=(e) =>{
    console.log(e.target.value)
    setData(e.target.value)
  }

  let FilterData= movies.filter((currValue)=>{
    console.log("FilterData hit")
    return currValue.title?.toLowerCase().includes(data.toLowerCase())
    
  })

  return (
    <div style={{ position: 'relative', width: '750px' }}>
      <StyledInputBase
        type="text"
        placeholder="🔎 Search..."
        value={data}
        onChange={getData}

        
        />
        
        {data &&
  <Box
    sx={{
      background: '#040714',
      borderRadius: 2,
      boxShadow: 2,
      maxHeight: 200,
      overflowY: 'auto',
      position: 'absolute',
      zIndex: 1000,
      width: '100%',
      top: '38px',
      left: 0,
    }}
  > 
    {FilterData.map((curr) => (
      <Link to ={`${rout_paths.MovieDetails}?id=${curr.id}`} style={{ textDecoration: 'None', color:'inherit'}}>
      <Box key={curr.id} sx={{ color: '#ff0000', padding: '4px 0' }}>
        {curr.title}
      </Box></Link>
    ))}
  </Box>
}
      
      
    </div>
  );
};

export default SearchBar;