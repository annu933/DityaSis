"use client"
import { createTheme, ThemeProvider, Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import img1 from '../../public/image/heroImg.png';
import img2 from '../../public/image/heroImg3.webp';
import img3 from '../../public/image/heroImg4.webp';
import CustomButton from "@/utils/button/button";

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/observer';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import "../app/globals.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

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

const data = [
    {
        name: 'Layout and Cable Engineering',
        role: 'Lead designer',
        image: img1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
    },
    {
        name: 'Smart Electrical and Electronics Design',
        role: 'Lead designer',
        image: img2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
    },
    {
        name: 'Find Your Way Of Success With Us',
        role: 'Lead designer',
        image: img3,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
    },
];

function BannerSlider() {

    const ref = useRef();
    const isInView = useIntersectionObserver(ref);


    const [swiperThumbs, updateSwiperThumbs] = useState(null);
    const thumbs = {
        slidesPerView: 3,
        getSwiper: updateSwiperThumbs,
        loop: true,
        spaceBetween: 10,
        speed: 1500,
        breakpoints: {
            280: {
                slidesPerView: 1,
            },
            386: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                slidesPerView: 1,
            },
            1200: {
                slidesPerView: 1,
            },
            1400: {
                slidesPerView: 1,
            },
        },
    };
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
                    <div className="" style={{ position: 'relative' }}>
                        <div className="" >
                            <Swiper {...thumbs} className="mySwiper" modules={[Navigation]}

                                navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                            >
                                {data.map((item, index) => (

                                    <div className="">
                                        <SwiperSlide key={index} className="">
                                            <div className=" py-5">
                                                <Box className="" sx={{
                                                    // height: { lg: '250px', md: 'auto', sm: 'auto', xs: 'auto' }
                                                }}>
                                                    <Grid container
                                                        px={{ xs: 0, sm: 0, md: 0, lg: 5, xl: 5 }}
                                                        height={{ xxl: '50vh', xl: '100vh', lg: '50vh', md: '35vh', sm: '30vh', xs: '50vh' }}
                                                    >
                                                        <Grid item xs={12} md={6} lg={6}
                                                            sx={{
                                                                display: 'flex',
                                                                alignItems: 'center',

                                                            }}
                                                        >
                                                            {/* <motion.div
                                                                ref={ref}
                                                                initial={{ opacity: 0, x: 50 }}
                                                                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                                                                transition={{ duration: 1 }}
                                                            > */}
                                                            <Box>
                                                                <Typography color="white" gutterBottom className="poppins-font"
                                                                    sx={{
                                                                        fontSize: { lg: '50px', md: '40px', sm: '30px', xs: '25px' },
                                                                        lineHeight: { lg: '75px', md: '55px', sm: '40px', xs: '32px' },
                                                                        fontWeight: 600,
                                                                    }}
                                                                >
                                                                    {item.name}
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
                                                                            width: "120px",
                                                                            backgroundImage: 'linear-gradient(180deg, #F17D10 43.8%, #CD6300 100%)',
                                                                            color: "#FFFFFF",
                                                                            fontSize: "15px",
                                                                            padding: '10px',
                                                                            borderRadius: "5px",
                                                                            textAlign: "center",
                                                                            cursor: 'pointer',
                                                                        }}
                                                                    >
                                                                        Explore more
                                                                    </CustomButton>
                                                                </Box>
                                                            </Box>
                                                            {/* </motion.div> */}
                                                        </Grid>
                                                        <Grid item xs={12} md={6} lg={6}

                                                            component={motion.div}
                                                            initial={{ opacity: 0, y: 50 }}
                                                            animate={{ opacity: 1, y: 0 }}
                                                            transition={{ duration: 1 }}
                                                            sx={{
                                                                background: `url(${item.image.src})`,
                                                                backgroundSize: '100% auto',
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
                                                </Box>
                                            </div>
                                        </SwiperSlide>
                                    </div>
                                ))}
                            </Swiper>
                        </div>
                       <Box sx={{
                       }}>
                       <Box className="swiper-prev-arrow arrow arrow-left" tabIndex={0} role="button" aria-label="Previous slide"
                            sx={{
                                width: '15px',
                                height: '15px',
                                padding: '7px',
                                backgroundColor: 'white',
                                border: '1px solid #EDEDED',
                                borderRadius: '50%',

                                position: 'absolute',
                                top: '85%',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                cursor: 'pointer',
                                left: { lg: '50px', md: '-50px', sm: '-35px', xs: '-35px' },
                            }}
                        >
                            <ArrowBackIosIcon sx={{ color: 'black', fontSize: '15px', margin: 'auto', width: '15px', height: '15px' }} />
                        </Box>
                        <Box className="swiper-next-arrow arrow arrow-right" tabIndex={0} role="button" aria-label="Next slide"
                            sx={{
                                width: '15px',
                                height: '15px',
                                padding: '7px',
                                backgroundColor: 'white',
                                border: '1px solid #EDEDED',
                                borderRadius: '50%',
                                position: 'absolute',
                                top: '85%',
                                transform: 'translateY(-50%)',
                                zIndex: 10,
                                cursor: 'pointer',
                                // right: { lg: '-50px', md: '-50px', sm: '-35px', xs: '-35px' },
                                left: { lg: '100px', md: '-50px', sm: '-35px', xs: '-35px' },
                            }}
                        >
                            <ArrowForwardIosIcon sx={{ color: 'black', fontSize: '15px', margin: 'auto', width: '15px', height: '15px' }} />
                        </Box>
                       </Box>
                    </div>
                </Container>

            </Box>
        </ThemeProvider>

    );
}

export default BannerSlider;
