import { Menu, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { rout_paths } from "../Routes";

const HeaderMenu = ({ open, handleClose }) => {
  return (
    <Menu
      id="basic-menu"
      anchorEl={open}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <Link to ={`${rout_paths.moviesCategory}?TYPE=populor`} style={{ textDecoration: 'None', color:'inherit'}} >
        <MenuItem onClick={handleClose}>Populor</MenuItem>
      </Link>
      <Link to ={`${rout_paths.moviesCategory}?TYPE=toprated`} style={{ textDecoration: 'None', color:'inherit'}}>
        <MenuItem onClick={handleClose}>Top Rated</MenuItem>
      </Link>
      <Link to ={`${rout_paths.moviesCategory}?TYPE=newlaunch`} style={{ textDecoration: 'None', color:'inherit'}}>
        <MenuItem onClick={handleClose}>New launch</MenuItem>
      </Link>
      <Link to ={`${rout_paths.moviesCategory}?TYPE=upcomming`} style={{ textDecoration: 'None', color:'inherit'}}>
        <MenuItem onClick={handleClose}>Up-Coming</MenuItem>
      </Link>
    </Menu>
  );
};

export default HeaderMenu;
