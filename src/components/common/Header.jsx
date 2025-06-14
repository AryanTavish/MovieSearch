import { useState } from 'react';   
import { AppBar, Toolbar, styled, Box, Typography } from '@mui/material';
import { logo } from '../logo.js';
import { Menu, BookmarkAdd} from '@mui/icons-material';
import HeaderMenu from './HeaderMenu.jsx';
import { rout_paths } from '../Routes.js';
import { Link } from 'react-router-dom';
import SearchBar from '../SearchBar';
import DarkMode from './DarkTheme.jsx'

const StyledToolbar = styled(Toolbar)`
    Background:rgb(56, 56, 56) !important;
    color: black !important;
    min-height: 56px !important;
    padding: 0 16px !important;
    color: #f9f9f9 !important; 
    justify-content: space-between !important;
    & > div{
        display: flex;
        cursor: pointer;
        border-radius: 10px;
        align-items: center;
        & > p{
            font-size:14px;
            font-weight: 600;
        } 
    };
    & > p{
        font-size:14px;
        font-weight: 600;
    }
`;

const LogoStyle = styled('img')({
    width: 64
});

const StyledInputBase = styled(Box)`
    background-color: #fff !important;
    color:rgb(22, 20, 20) !important;
    border-radius: 8px !important;
    padding: 0 8px !important;
    width: 750px !important;
    height:30px !important;
`;
const BoxBookmark =styled(Box)`
    display: flex; !important;
`

const Header = ({ movies }) => {
    const [open, setOpen] = useState(null);

    const OpenMenu = (e) => {
        setOpen(e.currentTarget);
    };

    const handleClose = () => {
        setOpen(null);
    };

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Link to={rout_paths.home}>
                    <LogoStyle src={logo} alt="logo" />
                </Link>
                <Box onClick={OpenMenu}> 
                    <Menu />
                    <Typography>Menu</Typography>
                </Box>
                <HeaderMenu open={open} handleClose={handleClose}/>
                
                <StyledInputBase> 
                <SearchBar 
                    movies={movies|| []}
                />
                </StyledInputBase>       
                
                <Box>
                    <Typography>|</Typography>
                </Box>
                <Box onClick={() => window.location.reload()} style={{ cursor: 'pointer' }}>
                    <Typography>ReLoad</Typography>
                </Box>
                <BoxBookmark><Link to={rout_paths.Liked} style={{ textDecoration: 'None', color:'inherit', display:'flex'}}>
                    <BookmarkAdd />
                    <Typography>BookMark</Typography></Link>
                </BoxBookmark>
                <Box>
                <DarkMode />
                </Box>
            </StyledToolbar>
        </AppBar>
    );
};

export default Header;