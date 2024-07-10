"use client"

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from "next/image";
import "swiper/swiper-bundle.css";
import img1 from '../../../../public/image/user.png';
import background from '../../../../public/image/testimonialBG.png';
import polygon from '../../../../public/image/polygon.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const data = [
    {
        name: 'It was a very good experience',
        role: 'Lead designer',
        image: img1,
        count: '1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu',
    },
    {
        name: 'It was a very good experience',
        role: 'Lead designer',
        image: img1,
        count: '2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
    },
    {
        name: 'It was a very good experience',
        role: 'Lead designer',
        image: img1,
        count: '3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu. Elementum felis magna pretium in tincidunt. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. urpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu. Faucibus venenatis felis id augue sit cursus pellentesque enim arcu',
    },
    {
        name: 'It was a very good experience',
        role: 'Lead designer',
        image: img1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
    },
    {
        name: 'It was a very good experience',
        role: 'Lead designer',
        image: img1,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
    },
];

const TestimonialTraining = () => {
    const [swiperThumbs, updateSwiperThumbs] = useState(null);


    const thumbs = {
        slidesPerView: 3,
        getSwiper: updateSwiperThumbs,
        loop: true,
        spaceBetween: 0,
        speed: 1500,
        centeredSlides: true,
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
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            },
            1400: {
                slidesPerView: 3,
            },
        },
    };


    const [activeIndex, setActiveIndex] = useState(0);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.activeIndex);

        console.log('swiper', swiper.activeIndex)
    };
    return (
        <Box
            mx={{ xs: 0, sm: 0, md: 0, lg: 15, xl: 15 }}
            py={{ xs: 0, sm: 0, md: 5, lg: 15, xl: 5 }}
            style={{
                backgroundImage: `linear-gradient(106.53deg, #045BB3 1.35%, #1C75BC 98.5%)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                borderRadius: '10px',
            }}
        >
            <Box
                sx={{
                    background: `url(${background.src})`,
                    backgroundRepeat: 'no-repeat !important',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'relative',
                }}

            >
                <Box

                >
                    <Typography sx={{
                        fontSize: { lg: '41px', md: '41px', sm: '35px', xs: '20px' },
                        lineHeight: { lg: '49px', md: '49px', sm: '38px', xs: '28px' },
                        fontWeight: 600,
                        textAlign: 'center',
                        color: 'white',
                        mb: 4
                    }}>Here is what our Clients are saying About us</Typography>
                    <Swiper {...thumbs} className="mySwiper" modules={[Navigation]}
                        navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                        onSlideChange={(swiper) => handleSlideChange(swiper)}
                    >
                        {data.map((item, index) => (
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItem: 'center',
                                flexDirection: 'column',
                            }}>
                                <Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>

                                    <SwiperSlide key={index} className="swiper-slide-customize" >
                                        <Box sx={{
                                            height: '500px',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexDirection: 'column',
                                            position: 'relative',
                                        }}>
                                            <Box className="customize-card py-5"
                                                sx={{
                                                    // width: '500px',
                                                    height: { lg: 'auto', md: 'auto', sm: 'auto', xs: 'auto' },
                                                    // backgroundColor: '#fff',
                                                    borderRadius: '10px',
                                                }} >
                                                <Box sx={{ pt: 4 }} className="description">
                                                    <Typography
                                                        color="#202020"
                                                        sx={{
                                                            fontSize: { lg: '20px', md: '20px', sm: '16px', xs: '14px' },
                                                            lineHeight: { lg: '30px', md: '30px', sm: '24px', xs: '24px' },
                                                            fontWeight: 600,
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Typography>
                                                    <Typography
                                                        color="#303030"
                                                        sx={{
                                                            fontSize: { lg: '16px', md: '16px', sm: '14px', xs: '14px' },
                                                            lineHeight: { lg: '24px', md: '24px', sm: '20px', xs: '24px' },
                                                            fontWeight: 400,
                                                        }}

                                                    >
                                                        {item.description}
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box className="polygon" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: '-2px' }}>
                                                <Image alt={item.name} src={polygon.src} width={30} height={30} className="img" sx={{ overflow: 'visible' }} />
                                            </Box>

                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', alignItem: 'center' }}>
                                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', my: 0 }}>
                                                <Image alt={item.name} src={item.image} className="img" sx={{ overflow: 'visible' }} />
                                            </Box>
                                        </Box>
                                    </SwiperSlide>

                                </Box>

                            </Box>
                        )
                        )}
                    </Swiper>
                </Box>
                <Box className="swiper-prev-arrow arrow arrow-left" tabIndex={0} role="button" aria-label="Previous slide"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        cursor: 'pointer',
                        left: { lg: '150px', md: '-50px', sm: '-35px', xs: '-35px' },
                    }}
                >
                    <ArrowBackIosIcon sx={{ color: '#fff', fontSize: '20px', margin: 'auto', width: '50px', height: '50px' }} />
                </Box>
                <Box className="swiper-next-arrow arrow arrow-right" tabIndex={0} role="button" aria-label="Next slide"
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 10,
                        cursor: 'pointer',
                        right: { lg: '150px', md: '-50px', sm: '-35px', xs: '-35px' },
                    }}
                >
                    <ArrowForwardIosIcon sx={{ color: '#fff', fontSize: '15px', margin: 'auto', width: '50px', height: '50px' }} />
                </Box>
            </Box>
        </Box>
    );
};

export default TestimonialTraining;



