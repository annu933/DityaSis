import { Box } from "@mui/material";
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
    role:'Lead designer',
    image: img1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
  {
    name: 'Hannah Schmitt',
    role:'Lead designer',
    image: img1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
  {
    name: 'Hannah Schmitt',
    role:'Lead designer',
    image: img1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
  {
    name: 'Hannah Schmitt',
    role:'Lead designer',
    image: img1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
  {
    name: 'Hannah Schmitt',
    role:'Lead designer',
    image: img1,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh in turpis. Consequat duis diam lacus arcu.',
  },
];

const TestimonialCard = () => {
  const [swiperThumbs,updateSwiperThumbs] = useState(null);


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
      <div className="row justify-content-center applicability" style={{ position: 'relative'}}>
        <div className="row justify-content-center applicability-one-container" >
          <Swiper {...thumbs} className="mySwiper"  modules={[Navigation]}
          
          navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
          >
            {data.map((item, index) => (
                  <div className="swiper-wrapper applicability-content">
                       <SwiperSlide key={index} className="swiper-slide">
                <div className="applicability-card py-5">
                  <Box className="applicability-one" sx={{
                    height:{lg:'250px',md: 'auto',sm: 'auto', xs: 'auto'}
                  }}>
                    <Box>
                    <Box className="applicability-one-icon pic" sx={{marginTop:'-50px'}}>
                      <Image alt={item.name} src={item.image} className="img" sx={{overflow: 'visible'}}/>
                    </Box>
                    <div style={{display: 'flex',justifyContent: 'end',flexDirection: 'column',alignItems: 'end'}}>
                    <h3>{item.name}</h3>
                    <p>{item.role}</p>
                    </div>
                    </Box>
                    <Box className="applicability-one-info" sx={{pt:4}}>
                    
                      <Image src={quote.src} width={20} height={20} alt="testimonial" />
                      <p dangerouslySetInnerHTML={{ __html: item.description }} />
                    </Box>
                  </Box>
                </div>
              </SwiperSlide>
                  </div>
           
            ))}
          </Swiper>
        
        </div>
        {/* <div className="swiper-prev-arrow arrow arrow-left" tabIndex={0} role="button" aria-label="Previous slide">
          <ArrowBackIosIcon />
        </div> */}
        <Box className="swiper-prev-arrow arrow arrow-left" tabIndex={0} role="button" aria-label="Previous slide"
        sx={{
            width: '15px',
            height: '15px',
            padding: '7px',
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius:'50%',

            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            cursor: 'pointer',
            left: '-35px',
        }}
        >
          <ArrowBackIosIcon sx={{color:'black',fontSize:'15px', margin: 'auto',width:'15px',height:'15px'}}/>
        </Box>
        <Box className="swiper-next-arrow arrow arrow-right" tabIndex={0} role="button" aria-label="Next slide"
        sx={{
            width: '15px',
            height: '15px',
            padding: '7px',
            backgroundColor: 'white',
            border: '1px solid black',
            borderRadius:'50%',

            position: 'absolute',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10,
            cursor: 'pointer',
            right: '-35px',
        }}
        >
          <ArrowForwardIosIcon sx={{color:'black',fontSize:'15px', margin: 'auto',width:'15px',height:'15px'}}/>
        </Box>
      </div>
    </Box>
  );
};

export default TestimonialCard;



