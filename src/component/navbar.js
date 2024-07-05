"use client"
import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import logo from '../../public/logo.png';
import { Box, Menu, MenuItem } from '@mui/material';
import '../app/globals.css';


const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawer = (
        <div
            // sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['SmartEner Executive Diploma', 'SmartEnerOur Programs', 'SmartEnerCustomised Training', 'SmartEnerGovernment Aided Training', 'SmartEnerFranchise', 'SmartEnerPlacements'].map((text) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text}

                        />
                    </ListItem>
                ))}
            </List>
        </div>
    );
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <Box
            // px={10}
            px={{ xs: 2, sm: 5, md: 5, lg: 10, xl: 10 }}
        >
            <Box position="static" sx={{
                backgroundColor: 'white', color: 'black',

            }}>
                <Box
                    width="100%"
                    sx={{
                        height: '80px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>

                    <img
                        src={logo.src}
                        alt="Logo"
                        style={{ height: '40px', marginRight: 'auto' }}
                    />
                    {isMobile && (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            // sx={{ marginRight: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    {!isMobile && (
                        <ul className='ul-menu'>
                             <li color="inherit" className='nav-menu'>
                                <Typography
                                    sx={{
                                        fontSize: { lg: '16px', md: '12px', sm: '12px', xs: '12px' },
                                        lineHeight: '27px',
                                        fontWeight: 500,
                                        //  paddingRight:{lg:2,md: 0,sm: 0,xs:0}
                                    }}>
                                    Home</Typography></li>
                            <li color="inherit" className='nav-menu'>
                                <Typography
                                    sx={{
                                        fontSize: { lg: '16px', md: '12px', sm: '12px', xs: '12px' },
                                        lineHeight: '27px',
                                        fontWeight: 500,
                                        //  paddingRight:{lg:2,md: 0,sm: 0,xs:0}
                                    }}>
                                    SmartEner Executive Diploma</Typography></li>
                            <li color="inherit" className='nav-menu'><Typography sx={{
                                fontSize: { lg: '16px', md: '12px', sm: '12px', xs: '12px' },
                                lineHeight: '27px',
                                fontWeight: 500,
                                //  paddingRight:{lg:2,md: 0,sm: 0,xs:0}
                            }}>SmartEnerOur Programs</Typography></li>
                            <li color="inherit" className='nav-menu'><Typography sx={{
                                fontSize: { lg: '16px', md: '12px', sm: '12px', xs: '12px' },
                                lineHeight: '27px',
                                fontWeight: 500,
                                //  paddingRight:{lg:2,md: 0,sm: 0,xs:0}
                            }}>SmartEnerCustomised Training</Typography></li>

                            <li color="inherit" onClick={handleClick} className='nav-menu'>
                                <Typography sx={{
                                    fontSize: { lg: '16px', md: '12px', sm: '12px', xs: '12px' },
                                    lineHeight: '27px',
                                    fontWeight: 500,
                                    //  paddingRight:{lg:2,md: 0,sm: 0,xs:0}
                                }}>More</Typography>
                            </li>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose} className='nav-menu'>SmartEnerGovernment Aided Training</MenuItem>
                                <MenuItem onClick={handleClose} className='nav-menu'>SmartEnerFranchise</MenuItem>
                                <MenuItem onClick={handleClose} className='nav-menu'>SmartEnerPlacements</MenuItem>
                            </Menu>
                            <li color="inherit" onClick={handleClick} className='nav-menu'>
                                <Typography sx={{
                                    fontSize: { lg: '16px', md: '12px', sm: '12px', xs: '12px' },
                                    lineHeight: '27px',
                                    fontWeight: 500,
                                    //  paddingRight:{lg:2,md: 0,sm: 0,xs:0}
                                }}>Sign Up</Typography>
                            </li>
                            <li color="inherit" onClick={handleClick} className='nav-menu'
                                style={{
                                    background: 'linear-gradient(90deg, #387DC2 2.49%, #045BB2 99.71%)',
                                    borderRadius: '20px',
                                    color: 'white',
                                    padding: '5px 30px',
                                    cursor: 'pointer'
                                }}
                            >
                                <Typography sx={{
                                    fontSize: { lg: '16px', md: '12px', sm: '12px', xs: '12px' },
                                    lineHeight: '27px',
                                    fontWeight: 500,
                                }}>Login</Typography>

                            </li>
                        </ul>
                    )}
                </Box>
            </Box>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box sx={{
                    display: 'flex',
                    padding: '16px'
                }}>
                <img
                    src={logo.src}
                    alt="Logo"
                    style={{ height: '40px', marginRight: 'auto' }}
                />

                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ marginRight: 2 }}
                    onClick={toggleDrawer(false)}
                >
                    <CloseIcon />
                </IconButton>
                </Box>

                {drawer}
            </Drawer>
        </Box>
    );
};

export default Navbar;




