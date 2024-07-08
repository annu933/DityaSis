"use client"
import { createTheme, ThemeProvider, Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import mainImage from '../../public/image/heroImg.png';
import CustomButton from "@/utils/button/button";

import about2 from '../../public/image/about2.png';
import CustomCard from "@/utils/card/Card";
import FeatureBanner from "./featureBanner";

const themeBreakPoint = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            xxs: 412,
            sm: 769,
            md: 900,
            lg: 1200,
            xl: 1536,
            xxl: 2559,
        },
    },
});

function Feature() {

    return (
        <ThemeProvider theme={themeBreakPoint}>
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
                    // paddingY: { xs: 5, sm: 5, md: 15, lg:10, xl:10 },
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
                                    fontWeight: 400,
                                    textAlign: 'center'
                                }}
                            >Lorem ipsum dolor sit amet consectetur. Pellentesque ipsum lectus turpis purus dictum tellus a tortor. <br /> Vulputate et nibh tempor tincidunt eget tortor.</Typography>

                            <Box sx={{
                                marginY: 3
                            }}>
                                <CustomButton
                                    sx={{
                                        width: "170px",
                                        backgroundImage: 'linear-gradient(180deg, #F17D10 43.8%, #CD6300 100%)',
                                        color: "#fff",
                                        fontSize: "20px",
                                        padding: '10px',
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        textAlign: "center",    
                                        ' &:hover': {
                                            // color: '#00264B',
                                            // backgroundImage: '#fff',
                                        }
                                    }}
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
                    // backgroundImage: "linear-gradient(106.02deg, #045BB3 0.81%, #003C78 101.75%)",
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                    height: { xs: '100vh',xxs:'60vh',sm: '30vh',md: '20vh',lg: '30vh',xl: '40vh' },
                    // padding: { xxl: 0, lg: '40px 0', md: 0, sm: 0, xs: '40px 0' },
                    zIndex: 1000,
                }}>
                <FeatureBanner />
            </Box>



        </Box >
        </ThemeProvider>
     
    );
}

export default Feature;


