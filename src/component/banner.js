"use client"
import { createTheme, ThemeProvider, Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import mainImage from '../../public/image/heroImg.png';
import CustomButton from "@/utils/button/button";


import { useRef } from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/observer';

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
        xxl: 2559,
      },
    },
  });

function Banner() {

    const ref = useRef();
    const isInView = useIntersectionObserver(ref);
    return (

        <ThemeProvider theme={theme}>
              <Box
            sx={{
                width: '100%',
                // height: { xs: '70vh', sm: '70vh', md: '70vh', lg: '100vh',xxl: '100vh' },
                backgroundImage: 'linear-gradient(256.96deg, #006CD9 1.08%, #004081 100.58%)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Container maxWidth="xl">
                <Grid container
                    px={{ xs: 0, sm: 0, md: 0, lg: 0, xl: 5 }}
                    height= {{ xxl:'50vh',xl:'100vh',lg: '50vh', md: '35vh', sm: '30vh', xs: '50vh' }}
                >
                    <Grid item xs={12} md={6} lg={6}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',

                        }}
                    >
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, x: 50 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                            transition={{ duration: 1 }}
                        >
                            <Box>
                                <Typography color="white" gutterBottom className="poppins-font"
                                    sx={{
                                        fontSize: { lg: '50px', md: '40px', sm: '30px', xs: '25px' },
                                        lineHeight: { lg: '75px', md: '55px', sm: '40px', xs: '32px' },
                                        fontWeight: 600,
                                    }}
                                >
                                    Layout and Cable Engineering
                                </Typography>
                                <Typography color="white" paragraph className="poppins-font"
                                    sx={{
                                        fontSize: { lg: '22px', md: '22px', sm: '18px', xs: '16px' },
                                        lineHeight: { lg: '33px', md: '33px', sm: '30px', xs: '24px' },
                                        fontWeight: '400 !important',
                                        width: '90%'
                                    }}
                                >
                                    Lorem ipsum dolor sit amet consectetur. Et quam aliquam amet tempus accumsan at. Tortor consectetur.
                                </Typography>
                                <Box sx={{
                                    marginTop: 5
                                }}>
                                    <CustomButton
                                    sx={{
                                        width:"120px",
                                        backgroundImage:'linear-gradient(180deg, #F17D10 43.8%, #CD6300 100%)',
                                        color:"#FFFFFF",
                                        fontSize:"15px",
                                        padding:'10px',
                                        borderRadius:"5px",
                                        textAlign:"center",
                                        cursor: 'pointer',
                                    }}
                                    >
                                        Explore more
                                    </CustomButton>
                                </Box>
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}

                        component={motion.div}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y:  0 }}
                        transition={{ duration: 1 }}
                        sx={{
                            background: `url(${mainImage.src})`,
                            backgroundSize:  '100% auto',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            overflow: 'hidden',
                            display: { xs: 'none', sm: 'none', md: 'flex' },
                            justifyContent: 'center',
                            alignItems: 'center',

                        }}
                    >
                    </Grid>
                </Grid>
            </Container>

        </Box>
        </ThemeProvider>
      
    );
}

export default Banner;
