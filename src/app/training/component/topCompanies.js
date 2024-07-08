"use client"
import { Box, Typography } from "@mui/material";
import img1 from '../../../../public/image/topComp1.png';
import img2 from '../../../../public/image/topComp2.png';
import img3 from '../../../../public/image/topComp3.png';
import img4 from '../../../../public/image/topComp4.png';
import img5 from '../../../../public/image/topComp5.png';
import img6 from '../../../../public/image/topComp6.png';
import img7 from '../../../../public/image/topComp7.png';
import img8 from '../../../../public/image/topComp8.png';
import img9 from '../../../../public/image/topComp9.png';
import img10 from '../../../../public/image/topComp10.png';
import img11 from '../../../../public/image/topComp11.png';
import Image from "next/image";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const TopCompanies = () => {

    const thumbs = {
        spaceBetween: 10,
        slidesPerView: 8,
        loop: true,
        autoplay:{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
        },
        speed:4000,
        allowTouchMove:false
    };
    return (
        <div>
        <Box

            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                mb: 5
            }}>
            <Typography className="poppins-font"
                sx={{
                    fontSize: { xl: '30px', lg: '30px', md: '22px', sm: '22px', xs: '20px' },
                    lineHeight: { xl: '45px', lg: '45px', md: '24px', sm: '24px', xs: '22px' },
                    fontWeight: 600,
                    textAlign: 'center',
                    color: '#004490'
                }}
            >Our Students at Top Companies</Typography>

        </Box>
        <Box
        >
            <Swiper {...thumbs}

                modules={[Autoplay]}
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Box
                            >
                                <Image src={item.image.src} alt="training" width={100} height={100} style={{ objectFit: 'contain', }} />
                            </Box>
                        </SwiperSlide>
                    )
                }
                )}
            </Swiper>

        </Box>
    </div>
    )
}

export default TopCompanies;

const data = [
    {
        image: img1,
    },
    {
        image: img2,
    },
    {
        image: img3,
    },
    {
        image: img4,
    },
    {
        image: img5,
    },
    {
        image: img6,
    },
    {
        image: img7,
    },
    {
        image: img8,
    },
    {
        image: img9,
    },
    {
        image: img10,
    },
    {
        image: img11,
    }
]