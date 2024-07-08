import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import img1 from '../../../../public/image/adv1.png';
import img2 from '../../../../public/image/adv2.png';
import img3 from '../../../../public/image/adv3.png';
import img4 from '../../../../public/image/adv4.png';
import img5 from '../../../../public/image/adv5.png';
import img6 from '../../../../public/image/adv6.png';
import img7 from '../../../../public/image/adv7.png';
import Image from "next/image";


const Advantage = () => {
    
    return (
        <Box

            sx={{
                width: '100%',
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Container maxWidth="xl">
                <Box
                    px={{ xs: 0, sm: 0, md: 0, lg: 5, xl: 5 }}
                    py={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }}
                >
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
                                textAlign: 'center'
                            }}
                        >CADD Centre Advantage</Typography>

                    </Box>
                    <Grid container spacing={5}
                        px={20}
                    >
                        {data.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
                                    <Card sx={{
                                        display: 'flex', alignItems: 'center',
                                        justifyContent: 'center',
                                        padding: 1,
                                        border: '1px solid #B3B3B3',
                                        borderRadius: '10px',
                                        boxShadow: '0px 4.47px 8.73px 0px #00000040',
                                        flexDirection: 'column',
                                        padding: 3,
                                        height: '200px',
                                    }}>
                                        <Box sx={{
                                            backgroundColor: '#FFF3E8',
                                            padding: '20px',
                                            borderRadius: '50%',
                                            boxShadow: '3px 3px 6px 0px #00000029',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',

                                        }}>
                                            <Image src={item.image.src} alt="training" width={50} height={50} style={{ objectFit: 'cover' }} />
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center !important',
                                            alignItems: 'center !important',
                                            paddingLeft: '20px',
                                            width: '100%',
                                            height: '100%',
                                        }} >
                                            <Typography
                                                sx={{
                                                    fontSize: { xl: '16px', lg: '16px', md: '16px', sm: '16px', xs: '16px' },
                                                    lineHeight: { xl: '24px', lg: '24px', md: '24px', sm: '24px', xs: '24px' },
                                                    fontWeight: 600,

                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                        </Box>
                                    </Card>
                                </Grid>
                            )
                        }
                        )}
                    </Grid>
                </Box>
            </Container>

        </Box>
    )
}

export default Advantage;

const data = [
    {
        name: '35 years long track record',
        image: img1,
    },
    {
        name: 'Global presence400centres across31 countries',
        image: img2,
    },
    {
        name: 'Robust online learning platform',
        image: img3,
    },
    {
        name: 'Hybrid Courses- involving onlineand offline',
        image: img4,
    },
    {
        name: 'Authorizedtraining partner for global CADproducts.',
        image: img5,
    },
    {
        name: 'Trained staff with industry experience',
        image: img6,
    },
    {
        name: 'Instantly launch design courses and developexclusive learning aids',
        image: img7,
    }
]