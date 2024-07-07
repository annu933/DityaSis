import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import img1 from '../../../../public/image/training1.png';
import Image from "next/image";


const TrainingFeature = () => {
    return (
        <Box
            sx={{
                width: '100%',
                // height: { xs: '70vh', sm: '70vh', md: '70vh', lg: '100vh' },
                backgroundColor: '#fff',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Container maxWidth="xl">
            <Box sx={{display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginY: 5
                    }}>
                    <Typography variant="h5" >Customised Training</Typography>
                    <Typography variant="body2" color="text.secondary">Lorem ipsum dolor sit amet consectetur. Diam diam dui gravida purus praesent tristique. Nunc fusce lectus pretium pretium lorem placerat a.</Typography>
                    </Box>
                <Grid container spacing={2}
                    px={{ xs: 2, sm: 5, md: 5, lg: 5, xl: 5 }}
                >
                    {data.map((item, index) => {
                        return (
                            <Grid item xs={12} sm={12} md={4} lg={4} key={index}>
                                <Card sx={{ display: 'flex', alignItems: 'center', padding: 1 }}>
                                    <Box sx={{
                                        backgroundImage: 'linear-gradient(180deg, #045BB3 0%, #0053A6 53%, #004182 100%)',
                                        padding: '10px',
                                        borderRadius: '5px',
                                        boxShadow: '0px 4px 10.4px 0px rgba(0, 0, 0, 0.25)',
                                        cursor: 'pointer',
                                    }}>
                                        <Image src={img1.src} alt="training" width={50} height={50} style={{ objectFit: 'cover' }} />
                                    </Box>
                                    <CardContent >
                                        <Typography variant="h5" color="black" paragraph sx={{ fontSize: '10px' }}>
                                            {item.name}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    }
                    )}
                </Grid>
            </Container>

        </Box>
    )
}

export default TrainingFeature;

const data = [
    {
        name: 'SmartEner Mechanical / Aeronautical Automobile Design',
        image: img1,
    },
    {
        name: 'SmartEner Civil / BIM',
        image: img1,
    },
    {
        name: 'SmartEner Architectural Design',
        image: img1,
    },
    {
        name: 'SmartEner Industrial DesignProductDevelopment',
        image: img1,
    },
    {
        name: 'SmartEner IT & Programming',
        image: img1,
    },
    {
        name: 'SmartEner Project Management',
        image: img1,
    }
]