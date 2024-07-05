import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
// import contact from "../app/image/contact.js"
import contact from '../../public/image/contact.png';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


const Contact = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#F8F8F8',
                position: 'relative',
            }}
        >
            <Box
                px={{ xs: 2, sm: 2, md: 5, lg: 10, xl: 10 }}
                py={{ xs: 2, sm: 2, md: 5, lg: 10, xl: 10 }}
            >
                <Container maxWidth="xl">
                    <Grid

                        container sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            border: '2px solid #81ADD8',
                            borderRadius: '15px',
                            boxShadow: '0px 4px 10.4px 0px #00000026',
                            backgroundImage: 'linear-gradient(106.02deg, #045BB3 0.81%, #003C78 101.75%)',
                            paddingY: 2

                        }}>

                        <Grid item lg={7} md={7} sm={6} xs={12} >
                            <Box sx={{
                                px: { lg: 5, md: 5, sm: 0, xs: 0 },
                                color: '#fff'
                            }}>
                                {/* <Image src={contact.src} width={30} height={30} alt="testimonial" /> */}
                                <Box sx={{
                                    p: 3,

                                }}>
                                    <Typography color="#fff"
                                        sx={{
                                            fontSize: { lg: '40px', md: '40px', sm: '20px', xs: '20px' },
                                            lineHeight: { lg: '60px', md: '60px', sm: '30px', xs: '30px' },
                                            fontWeight: 600,

                                        }}
                                    >
                                        Need Help?
                                    </Typography>
                                    <Typography
                                    // className="inter"
                                        sx={{
                                            fontSize: { lg: '20px', md: '20px', sm: '16px', xs: '14px' },
                                            lineHeight: { lg: '30px', md: '30px', sm: '24px', xs: '24px' },
                                         fontWeight: 'lighter',
                                            my: 2
                                        }}
                                    >Our academic experts will answer all your questions over a <br /> quick phone call.</Typography>
                                    <Box>
                                        <Box display="flex" alignItems="center" py={1}>
                                            <PhoneIcon sx={{ mr: 1 }} />
                                            <Typography variant="body1" sx={{
                                                fontWeight: 'lighter'
                                            }}>
                                                Call us at:
                                                <Typography component='span'
                                                    sx={{
                                                        fontWeight: 600,
                                                        paddingLeft: 2
                                                    }}
                                                >
                                                    +916541365911
                                                </Typography> </Typography>
                                        </Box>
                                        <Box display="flex" alignItems="center" py={1}>
                                            <EmailIcon sx={{ mr: 1 }} />
                                            <Typography sx={{
                                                fontWeight: 'lighter'
                                            }}>
                                                Email Us:
                                                <Typography component='span'
                                                    sx={{
                                                        fontWeight: 600,
                                                        paddingLeft: 2
                                                    }}
                                                > abcd@gmail.com</Typography>
                                            </Typography>

                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item lg={5} md={5} sm={6} xs={12}
                            // sx={{
                            //     background: `url(${contact.src})`,
                            //     backgroundSize: 'cover',
                            //     backgroundPosition: 'center',
                            //     backgroundRepeat: 'no-repeat',
                            //     height: { sm: 'auto', md: '50vh' },
                            //     overflow: 'hidden',
                            //     display: { sm: 'none', md: 'flex' },
                            //     justifyContent: 'start',
                            //     alignItems: 'start',
                            //     borderRadius: '15px',

                            // }}
                            padding={2}
                        >
                            <Box
                                sx={{
                                    width: '100%',
                                    height: '300px',
                                    position: 'relative',
                                    objectFit: 'center',
                                }}
                            >
                                <Image src={contact.src} 
                                fill
                                style={{objectFit:"contain"}}
                                alt="contact" />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

            </Box>
        </Box>
    )
}

export default Contact;