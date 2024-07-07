"use client"
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import mainImage from '../../public/image/heroImg.png';
import CustomButton from "@/utils/button/button";
import benefits from '../../public/image/benefits.png';
import testimonial from '../../public/image/testimonial.png';
import quote from '../../public/image/quote.png';
import CustomCard from "@/utils/card/Card";
import { useEffect, useMemo, useState } from "react";


import TestimonialCard from "./testimonialCard";
import { useRef } from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/observer';


function Testimonial() {
    const ref = useRef();
    const isInView = useIntersectionObserver(ref);
    return (
        <Box
        px={{ xs: 2, sm: 2, md: 5, lg:10,xl:10 }}
        py={{ xs: 5, sm: 5, md: 5, lg:10,xl:10 }}
            sx={{
                // height: {lg:'160vh',md:'100vh',sm: 'auto',xs:'auto'},
                backgroundColor: '#fff',

            }}>
            <Container maxWidth="xl">
            <Box>
                <Box>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}>
                        <Box>
                            <CustomButton
                                width="250px"
                                backgroundColor='#FCEFE2'
                                color="#F17D10"
                                fontSize="20px"
                                padding='10px'
                                borderRadius="20px"
                            >
                                Testimonials
                            </CustomButton>
                        </Box>

                        <Typography color="#00264B" gutterBottom 
                                 sx={{
                            fontSize: { lg: '50px', md: '40px', sm: '30px', xs: '25px' },
                            lineHeight: { lg: '75px', md: '55px', sm: '40px', xs: '32px' },
                            fontWeight: 500,
                            textAlign: 'center',
                            mt:2,
                            mb:{lg:10,md:5,sm:5,xs:5}
                        }}
                        
                        >
                            What Our Clients Say About Us
                        </Typography>

                    </div>
                </Box>
            </Box>

            <Grid
                container sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '2px solid #81ADD8',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 10.4px 0px #00000026'


                }}>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                     <Box
                            sx={{
                                width: '100%',
                                height: '400px',
                                position: 'relative',
                                objectFit: 'center',
                                borderRadius: '14px',
                                margin:1
                            }}
                        >
                            <Image src={testimonial.src} 
                            fill
                            style={{objectFit:"cover",borderRadius:"14px"}}
                             alt="testimonial" 
                    
                         />
                        </Box>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <motion.div
                                        ref={ref}
                                        initial={{ opacity: 0, x: -100 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                                        transition={{ duration: 0.80 }}
                                    >
                                          <Box sx={{
                        padding:{lg:5,md:5,sm:2,xs:2}
                    }}
                    
                    >
                    <Image src={quote.src} width={30} height={30} alt="testimonial" />
                    <Box sx={{
                        padding: 3,
                        textAlign: 'center',
                    }}>
                        <Typography color="#565656" gutterBottom 
                             sx={{
                                fontSize: { lg: '16px', md: '16px', sm: '14px', xs: '14px' },
                                lineHeight: { lg: '24px', md: '24px', sm: '22px', xs: '22px' },
                                fontWeight: 400,
                            }}
                        >
                            Lorem ipsum dolor sit amet consectetur. Pellentesque venenatis commodo odio sed tellus justo morbi diam. In nisi vitae nibh in purus mauris suscipit nullam. Venenatis velit mattis arcu vivamus scelerisque nulla consectetur nibh id. Vel amet et purus id pellentesque. Molestie tincidunt tortor sagittis sed diam massa enim porta.
                        </Typography>
                        <Typography  pt={5} 
                             sx={{
                                fontSize: { lg: '24px', md: '24px', sm: '20px', xs: '18px' },
                                lineHeight: { lg: '36px', md: '36px', sm: '28px', xs: '24px' },
                                fontWeight: 600,
                            }}
                        >Hannah Schmitt</Typography>
                        <Typography 
                        color="#565656"
                           sx={{
                            fontSize: { lg: '16px', md: '16px', sm: '14px', xs: '14px' },
                            lineHeight: { lg: '24px', md: '24px', sm: '22px', xs: '22px' },
                            fontWeight: 500,
                        }}
                        >Lead designer</Typography>
                    </Box>
                    </Box>
                                    </motion.div>
                  
                </Grid>
            </Grid>

            <Box sx={{
        
             marginTop: 10,

            }}>
                <TestimonialCard />
            </Box>

          
            </Container>

        </Box>
    );
}

export default Testimonial;

