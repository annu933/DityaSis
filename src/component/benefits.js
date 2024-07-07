"use client"
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import mainImage from '../../public/image/heroImg.png';
import CustomButton from "@/utils/button/button";
import benefits from '../../public/image/benefits.png';
import img1 from '../../public/image/business.png';
import img2 from '../../public/image/team.png';
import img3 from '../../public/image/testing.png';
import img4 from '../../public/image/experience.png';
import CustomCard from "@/utils/card/Card";

// animation
import { useRef } from 'react';
import { motion } from 'framer-motion';
import useIntersectionObserver from '../hooks/observer';

function Benefits() {
    const ref = useRef();
    const isInView = useIntersectionObserver(ref);


    const boxVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };
    return (
        <Box sx={{
            // height: {xs: 'auto', md: '200vh'},
            // marginY: 5,
            backgroundColor: '#F8F8F8',
            position: 'relative',

        }}
            paddingY={{ xs: 5, sm: 5, md: 5, lg: 10, xl: 10 }}

        >
            <Container maxWidth="xl">
                <Box
                >
                    <Box 
                         px={{ xs: 2, sm: 5, md: 5, lg: 10, xl: 10 }}
                         py={4}
                    >
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',

                        }}>
                            <Box sx={{
                                marginBottom: 4
                            }}>
                                <CustomButton
                                    width="250px"
                                    backgroundColor='#FCEFE2'
                                    color="#F17D10"
                                    fontSize="20px"
                                    padding='10px'
                                    borderRadius="20px"
                                >
                                    Benefits
                                </CustomButton>
                            </Box>

                            <Typography color="#00264B" gutterBottom className="poppins-font"
                                sx={{
                                    fontSize: { lg: '50px', md: '40px', sm: '30px', xs: '22px' },
                                    lineHeight: { lg: '75px', md: '55px', sm: '40px', xs: '32px' },
                                    fontWeight: 500,
                                }}
                            >
                                CADD Divisions
                            </Typography>
                            <Typography color="#565656" paragraph
                                sx={{
                                    fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '16px' },
                                    lineHeight: { lg: '30px', md: '30px', sm: '30px', xs: '24px' },
                                    fontWeight: 200,
                                    textAlign: 'center'
                                }}

                            >Lorem ipsum dolor sit amet consectetur. Cras ut tempus mattis morbi mauris. Proin vel sed consectetur in. In in risus nunc sapien odio habitasse sit risus hendrerit. Et nibh elementum nec enim.</Typography>


                        </div>
                    </Box>
                </Box>
                <Box
                    style={{
                        backgroundRepeat: 'no-repeat',
                    }}
                    sx={{
                        background: { md: `url(${benefits.src})`, sm: 'none' },
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        height: { xs: 'auto', md: '900px' },
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}>
                    <Grid container
                        spacing={1}
                        my={{ xs: 2, sm: 4, md: 2, lg: 0, xl: 0 }}
                        px={{ xs: 2, sm: 5, md: 5, lg: 10, xl: 10 }}
                    >
                        {data.map((item) => {
                            return (
                                <Grid item lg={6} md={6} sm={6} key={item.name}>
                                    <motion.div
                                        whileHover={{
                                            scale: 1.05,

                                        }}
                                        transition={{ duration: 0.3 }}

                                    >
                                        <Box
                                            sx={{
                                                backgroundColor: '#fff',
                                                padding: { xs: '20px', sm: '30px', md: '40px', lg: '50px', xl: '50px' },
                                                borderRadius: '5px',

                                                margin: 1,
                                                display: 'flex',
                                                justifyContent: 'start',
                                                alignItems: 'start',
                                                flexDirection: 'column',
                                                transition: 'background-color 0.3s ease-in-out',
                                            }}
                                        >
                                            <Box sx={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                paddingY: 2
                                            }}>
                                                <Box
                                                    width={40}
                                                    height={40}
                                                    sx={{
                                                        backgroundColor: `${item.color}`,
                                                        padding: 1.2,
                                                        marginRight: 1,
                                                        borderRadius: '3px',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',


                                                    }}>
                                                    <Image src={item.image} alt={item.name} width={40} />
                                                </Box>
                                                <Typography color="#00366C"
                                                    sx={{
                                                        fontSize: { lg: '32px', md: '22px', sm: '18px', xs: '16px' },
                                                        lineHeight: { lg: '40px', md: '35px', sm: '28px', xs: '24px' },
                                                        fontWeight: 700,
                                                    }}
                                                >
                                                    {item.name}
                                                </Typography>
                                            </Box>
                                            <Typography color="#64748B"
                                                sx={{
                                                    fontSize: { lg: '20px', md: '18px', sm: '14px', xs: '14px' },
                                                    lineHeight: { lg: '30px', md: '28px', sm: '22px', xs: '24px' },
                                                    fontWeight: 400,
                                                }}
                                            >
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </motion.div>

                                </Grid>
                            );
                        })}
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
}

export default Benefits;

const data = [
    {
        name: 'Business Benefits',
        image: img1,
        color: '#63B1EC',
        description: 'Your software developers are located in our modern development centres in Lviv, Warsaw and Porto, both of which places have a huge talent pool. This makes it easy to scale your organization and shortens time-to-market in a cost-effective and flexible way.',
    },
    {
        name: 'Get Your Development Team',
        image: img2,
        color: '#FFCC52',
        description: 'Your software developers are located in our modern development centres in Lviv, Warsaw and Porto, both of which places have a huge talent pool. This makes it easy to scale your organization and shortens time-to-market in a cost-effective and flexible way.',
    },
    {
        name: 'Our Thoroughly Tested Process',
        image: img3,
        color: '#46BC7E',
        description: 'Your software developers are located in our modern development centres in Lviv, Warsaw and Porto, both of which places have a huge talent pool. This makes it easy to scale your organization and shortens time-to-market in a cost-effective and flexible way.',
    },
    {
        name: 'Succeed With of Experience in establishing',
        image: img4,
        color: '#3AC7FF',
        description: 'Your software developers are located in our modern development centres in Lviv, Warsaw and Porto, both of which places have a huge talent pool. This makes it easy to scale your organization and shortens time-to-market in a cost-effective and flexible way.',
    },
]
