import { Box, Grid, Typography } from "@mui/material";
import bgImage from '../../../../public/image/customize.png';


const BannerTraining = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: '70vh', sm: '70vh', md: '70vh', lg: '100vh' },
                backgroundImage: `linear-gradient(90.22deg, rgba(4, 91, 179, 0.26) 2.06%, rgba(43, 57, 144, 0.26) 99.86%),url(${bgImage.src})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            <Grid container spacing={3} sx={{ textAlign: 'center' }}>
                <Grid item xs={12}>
                    <Typography variant="h5" color="white" paragraph sx={{ fontSize: '30px', lineHeight: '45px' }}>
                        Deliver on demand real-World skill development and <br /> training for professionals
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BannerTraining;