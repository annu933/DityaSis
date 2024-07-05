"use client"
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import mainImage from '../../public/image/heroImg.png';
import CustomButton from "@/utils/button/button";

import about2 from '../../public/image/about2.png';
import CustomCard from "@/utils/card/Card";
import FeatureBanner from "./featureBanner";

function Feature() {

    return (
        <Box sx={{
            // position: 'relative',
            // height: {xs: 'auto', sm: 'auto',md: '130vh',lg: '130vh'},
            // marginY: 5,
            height: 'auto',
            position: 'relative',
        }}>

            <Box
                px={{ xs: 2, sm: 5, md: 5 }}
                sx={{
                    // height: {xs: 'auto',sm:'auto', md: 'auto',lg: '60vh'},
                    // paddingY: { xs: 5, sm: 5, md: 15, lg:10, xl:20 },
                    paddingTop: { xs: 5, sm: 5, md: 15, lg: 10, xl: 10 },
                    paddingBottom: { xs: 10, sm: 20, md: 20, lg: 20, xl: 20 },
                    backgroundImage: 'linear-gradient(106.02deg, #045BB3 0.81%, #003C78 101.75%)',

                }}

            >
                <Container maxWidth="xl">
                    <Box>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            textAlign: 'center',
                        }}>

                            <Typography color="#fff" gutterBottom className="poppins-font"

                                sx={{
                                    fontSize: { lg: '50px', md: '40px', sm: '30px', xs: '22px' },
                                    lineHeight: { lg: '75px', md: '55px', sm: '40px', xs: '32px' },
                                    fontWeight: 500,
                                }}
                            >
                                World class training, world over.
                            </Typography>
                            <Typography color="#FFFFFF" paragraph
                                sx={{
                                    fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '16px' },
                                    lineHeight: { lg: '30px', md: '30px', sm: '30px', xs: '24px' },
                                    fontWeight: 500,
                                    textAlign: 'center'
                                }}
                            >Lorem ipsum dolor sit amet consectetur. Pellentesque ipsum lectus turpis purus dictum tellus a tortor. <br /> Vulputate et nibh tempor tincidunt eget tortor.</Typography>

                            <Box sx={{
                                marginY: 3
                            }}>
                                <CustomButton
                                    width="170px"
                                    backgroundImage='linear-gradient(180deg, #F17D10 43.8%, #CD6300 100%)'
                                    color="#fff"
                                    fontSize="20px"
                                    padding='10px'
                                    borderRadius="5px"
                                >
                                    Get Started
                                </CustomButton>
                            </Box>
                        </div>
                    </Box>
                </Container>
            </Box>
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: '#F8F8F8',
                    // backgroundColor: 'red',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: { xl: '30vh', lg: '40vh', md: '40vh', sm: '80vh', xs: '120vh' },
                    padding: {xxl:0,lg:'40px 0', md:0,sm:0, xs: '40px 0'}
                }}>
                <FeatureBanner />
            </Box>



        </Box >
    );
}

export default Feature;


