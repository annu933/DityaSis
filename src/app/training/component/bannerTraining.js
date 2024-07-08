import { Box, Grid, Typography } from "@mui/material";
import bgImage from '../../../../public/image/customize.png';


const BannerTraining = () => {
    return (
        <Box
            sx={{
                width: '100%',
                height: { xs: '40vh', sm: '40vh', md: '50vh', lg: '100vh',xl: '100vh' },
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
                    <Typography  className="poppins-font"
                           sx={{
                            fontSize: { xl: '30px', lg: '30px', md: '22px', sm: '22px', xs: '20px' },
                            lineHeight: { xl: '45px', lg: '45px', md: '24px', sm: '24px', xs: '26px' },
                            fontWeight: 600,
                            textAlign: 'center',
                            color: '#fff'
                        }}
                    >
                        Deliver on demand real-World skill development and <br /> training for professionals
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}

export default BannerTraining;