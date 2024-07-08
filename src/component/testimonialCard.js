import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
// import SwiperCore, { Autoplay, EffectFade, Navigation, Thumbs } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// SwiperCore.use([Navigation, Autoplay, EffectFade, Thumbs]);
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Image from "next/image";
import "swiper/swiper-bundle.css";
import "../app/globals.css";
import img1 from '../../public/image/user.png';
import img2 from '../../public/image/team.png';
import img3 from '../../public/image/testing.png';
import img4 from '../../public/image/experience.png';
import quote from '../../public/image/quote.png';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const data = [
  {
    name: 'Hannah Schmitt',
    role: 'Lead designer',
    image: img1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
  {
    name: 'Hannah Schmitt',
    role: 'Lead designer',
    image: img1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
  {
    name: 'Hannah Schmitt',
    role: 'Lead designer',
    image: img1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
  {
    name: 'Hannah Schmitt',
    role: 'Lead designer',
    image: img1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
  {
    name: 'Hannah Schmitt',
    role: 'Lead designer',
    image: img1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
];

const TestimonialCard = () => {
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
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      },
      1400: {
        slidesPerView: 4,
      },
    },
  };

  return (
    <Box >
      <div className="row justify-content-center applicability" style={{ position: 'relative' }}>
        <div className="row justify-content-center applicability-one-container" >
          <Swiper {...thumbs} className="mySwiper" modules={[Navigation]}

            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          >
            {data.map((item, index) => (
              <div className="swiper-wrapper applicability-content">
                <SwiperSlide key={index} className="swiper-slide">
                  <div className="applicability-card py-5">
                    <Box className="applicability-one" sx={{
                      height: { lg: '250px', md: 'auto', sm: 'auto', xs: 'auto' }
                    }}>
                      <Box>
                        <Box className="applicability-one-icon pic" sx={{ marginTop: '-50px' }}>
                          <Image alt={item.name} src={item.image} className="img" sx={{ overflow: 'visible' }} />
                        </Box>
                        <div style={{ display: 'flex', justifyContent: 'end', flexDirection: 'column', alignItems: 'end' }}>
                        <Typography color="#202020"
                          sx={{
                            fontSize: { lg: '20px', md: '20px', sm: '16px', xs: '14px' },
                            lineHeight: { lg: '30px', md: '30px', sm: '24px', xs: '24px' },
                            fontWeight: 600,
                          }}
                        >{item.name}</Typography>
                          <Typography color="#64748B"
                          sx={{
                            fontSize: { lg: '16px', md: '16px', sm: '14px', xs: '14px' },
                            lineHeight: { lg: '24px', md: '24px', sm: '20px', xs: '24px' },
                            fontWeight: 400,
                          }}
                        >{item.role}</Typography>
                        </div>
                      </Box>
                      <Box className="applicability-one-info" sx={{ pt: 4 }}>

                        <Image src={quote.src} width={20} height={20} alt="testimonial" />
                        {/* <p dangerouslySetInnerHTML={{ __html: item.description }} /> */}
                        <Typography color="#64748B"
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
                  </div>
                </SwiperSlide>
              </div>

            ))}
          </Swiper>

        </div>
        <Box className="swiper-prev-arrow arrow arrow-left" tabIndex={0} role="button" aria-label="Previous slide"
          sx={{
            width: '15px',
            height: '15px',
            padding: '7px',
            backgroundColor: 'white',
            border: '1px solid #EDEDED',
            borderRadius: '50%',

            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            cursor: 'pointer',
            left: {lg: '-50px',md: '-50px',sm: '-35px',xs: '-35px'},
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
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            cursor: 'pointer',
            right: {lg: '-50px',md: '-50px',sm: '-35px',xs: '-35px'},
          }}
        >
          <ArrowForwardIosIcon sx={{ color: 'black', fontSize: '15px', margin: 'auto', width: '15px', height: '15px' }} />
        </Box>
      </div>
    </Box>
  );
};

export default TestimonialCard;



