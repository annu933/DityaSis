import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import mainImage from '../../public/image/heroImg.png';
import CustomButton from "@/utils/button/button";
import about1 from '../../public/image/about1.png';
import about2 from '../../public/image/about2.png';

function About() {
    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: 'auto', sm: 'auto', md: 'auto',lg: '100vh' },
                backgroundImage: 'white',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
             <Container maxWidth="xl">
             <Grid container  
            px={{ xs: 2, sm: 5, md: 5, lg:5,xl:5 }}
            >
                <Grid item xs={12} md={6} lg={6}
                    sx={{
                        display: 'flex',
                    }}
                >
                    <Box
                        sx={{
                            zIndex: 999,
                            position: 'relative',
                            width: '70%',
                            height: 'auto',
                            display: { xs: 'none', md: 'block' },
                            '&::before': {
                                content: '""',
                                position: 'absolute',
                                left: 0,
                                top: 0,
                                borderLeft: '30px solid black',
                                borderTop: '30px solid black',
                                width: '30%',
                                height: '25%',
                                borderColor: '#004FA0'
                            }

                        }}
                    >
                        <Box sx={{
                            zIndex: 999,
                            paddingTop: '28px',
                            paddingLeft: '28px',
                            width: '100%',
                        }}>
                            <Image src={about1.src} width={450} height={400} alt="Main Image"

                            />
                            <Box sx={{
                                position: 'absolute',
                                bottom: '10%',
                                right: {lg: '-20%', md: '-20%', sm: '20%', xs: '20%',},
                            }}>
                                <Image src={about2.src} width={200} height={230} alt="Main Image" />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginY:{md:0,xs: 5,}
                    }}
                >
                    <Box
                    >
                        <Box
                            sx={{
                                // marginBottom:5
                            }}
                        >
                            <CustomButton
                                width="250px"
                                backgroundColor='#FCEFE2'
                                color="#F17D10"
                                fontSize="20px"
                                padding='10px'
                                borderRadius="20px"
                            >
                                About Company
                            </CustomButton>
                        </Box>
                        <Typography color="#00264B" gutterBottom className="poppins-font"
                            sx={{
                                fontSize: { lg: '40px', md: '40px', sm: '30px', xs: '25px' },
                                lineHeight: { lg: '55px', md: '55px', sm: '40px', xs: '32px' },
                                fontWeight: 500,
                                marginTop: 5
                            }}
                        >
                            We are leading discovery and innovation since 1095
                        </Typography>
                        <Typography paragraph
                            sx={{
                                fontSize: { lg: '20px', md: '20px', sm: '18px', xs: '16px' },
                                lineHeight: { lg: '30px', md: '30px', sm: '30px', xs: '24px' },
                                fontWeight: 500,
                                color: '#565656'
                            }}
                        >
                            For over three decades, CADD Centre has been a trusted institution, enriching the careers of over 2.5 million learners worldwide with cutting-edge courses. Our recent launch of Electric Vehicle Technology and Generative AI job role-based courses underscores our dedication to preparing youth for a sustainable future.
                        </Typography>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            flexDirection: { xs: 'column', md: 'row' },
                            paddingTop: '30px',
                            paddingBottom: '30px',
                            width: '100%',
                        }}>
                            <Box sx={{
                                backgroundColor: '#ECF2F9',
                                padding: '20px 10px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                width: '100%',
                                margin: 1,
                                boxShadow: '0px 4px 6.2px 0px #00000014 inset'
                            }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>2M+</Typography>
                                <Typography variant="body2" color="#202020" sx={{ fontWeight: 500 }}>Engineers and <br />Professionals trained</Typography>
                            </Box>
                            <Box sx={{
                                backgroundColor: '#ECF2F9',
                                padding: '20px 10px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                width: '100%',
                                margin: 1,
                                boxShadow: '0px 4px 6.2px 0px #00000014 inset'
                            }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>100</Typography>
                                <Typography variant="body2" color="#202020" sx={{ fontWeight: 500 }}>industry-ready<br />courses</Typography>
                            </Box>
                            <Box sx={{
                                backgroundColor: '#ECF2F9',
                                padding: '20px 10px',
                                borderRadius: '10px',
                                textAlign: 'center',
                                width: '100%',
                                margin: 1,
                                boxShadow: '0px 4px 6.2px 0px #00000014 inset'
                            }}>
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>24</Typography>
                                <Typography variant="body2" color="#202020" sx={{ fontWeight: 500 }}>Training centres -<br />Asia's biggest network</Typography>
                            </Box>

                        </Box>
                    </Box>
                </Grid>

            </Grid>
             </Container>
           
        </Box>
    );
}

export default About;
