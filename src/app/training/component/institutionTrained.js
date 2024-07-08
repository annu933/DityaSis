import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import img1 from '../../../../public/image/trained1.png';
// import img2 from '../../../../public/image/adv2.png';
// import img3 from '../../../../public/image/adv3.png';
// import img4 from '../../../../public/image/adv4.png';
// import img5 from '../../../../public/image/adv5.png';
// import img6 from '../../../../public/image/adv6.png';
// import img7 from '../../../../public/image/adv7.png';
import Image from "next/image";
import CustomButton from "@/utils/button/button";


const InstitutionTrained = () => {
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
                        >Institutions Trained</Typography>

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
                                        borderRadius: '10px',
                                        boxShadow: '0px 4.47px 8.73px 0px #00000040',
                                        flexDirection: 'column',
                                        padding: 5,
                                        height: '200px',
                                        margin: 'auto'
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center !important',
                                            alignItems: 'center !important',
                                            width: '100%',
                                            height: '100%',
                                        }} >
                                            <Typography className="poppins-font"
                                                sx={{
                                                    fontSize: { xl: '31px', lg: '31px', md: '28px', sm: '20px', xs: '20px' },
                                                    lineHeight: { xl: '41px', lg: '28px', md: '24px', sm: '24px', xs: '24px' },
                                                    fontWeight: 700,
                                                    color: '#045BB2',
                                                    textAlign:'center',
                                                }}
                                            >
                                                {item.name}
                                            </Typography>
                                        </Box>
                                        <Box sx={{
                                            backgroundColor: '#fff',
                                            border: '1px solid #045BB2',
                                            padding: '20px',
                                            borderRadius: '50%',
                                            boxShadow: '3px 3px 6px 0px #00000029',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',

                                        }}>
                                            <Image src={item.image.src} alt="training" width={100} height={100} style={{ objectFit: 'cover' }} />
                                        </Box>

                                    </Card>
                                </Grid>
                            )
                        }
                        )}
                    </Grid>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingTop: 10
                    }}>
                        <CustomButton
                            sx={{
                                width: "120px",
                                // backgroundImage: 'linear-gradient(180deg, #F17D10 43.8%, #CD6300 100%)',
                                backgroundColor:'#045BB2',
                                color: "#FFFFFF",
                                fontSize: "15px",
                                padding: '10px',
                                borderRadius: "5px",
                                textAlign: "center",
                                cursor: 'pointer',
                            }}
                        >
                            Register Now
                        </CustomButton>
                    </Box>
                </Box>
            </Container>

        </Box>
    )
}

export default InstitutionTrained;

const data = [
    {
        name: 'Campus life',
        image: img1,
    },
    {
        name: 'How To Apply',
        image: img1,
    },
    {
        name: 'Alumni',
        image: img1,
    },
    {
        name: 'Accommodation',
        image: img1,
    },
    {
        name: 'Placements Statistics',
        image: img1,
    },
    {
        name: 'Brochure',
        image: img1,
    }
]