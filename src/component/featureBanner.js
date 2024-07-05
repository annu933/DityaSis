import { Box, Container, Grid, Typography } from "@mui/material";
import feature from '../../public/image/banner.jpg';
import CustomCard from "@/utils/card/Card";

function FeatureBanner() {

    return (
        <Box
            px={{ xs: 2, sm: 5, md: 5, lg: 10, xl: 10 }}

            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundRepeat: 'no-repeat',
                position: 'absolute',
                top: {xxl:'-50%',xl: '-25%',lg: '-15%', md: '-40%', sm: '0',xs: 'none'},
            }}
        >
   
                <Grid container
                    px={{ xs: 0, sm: 5, md: 2, lg: 5, xl: 5 }}
                    py={{ xs: 0, sm: 5, md: 5, lg: 7, xl: 7 }}
                    style={{
                        backgroundRepeat: 'no-repeat',
                    }}
                    spacing={2}
                    // sx={{
                    //     borderRadius: '20px',
                    //     height: { lg: '300px', md: '400px', sm: 'auto', xs: 'auto' },
                    //     display: 'flex',
                    //     justifyContent: 'space-around',
                    //     alignItems: 'center',
                    // }}

                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        background: { md: `url(${feature.src})`, sm: 'none' },
                        // background: `url(${feature.src})`,
                        backgroundSize: 'cover !important',
                        backgroundPosition: 'bottom !important',
                        backgroundRepeat: 'no-repeat !important',
                        borderRadius: '20px',

                    }}
                >
                    {data.map((item) => {
                        return (
                            <Grid item lg={3} md={3} sm={6} xs={12} key={item.name}
                                sx={{
                                    // margin:{sm:0,xs:1,md:0,lg:0}
                                }}
                            >
                                <Box
                                    sx={{
                                        backgroundColor: '#E4E4E7',
                                        padding: '40px 20px',
                                        borderRadius: '20px',
                                        textAlign: 'center',
                                        margin: { lg: 0, md: 1, sm: 1, md: 0, lg: 0 }
                                    }}
                                >
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} color="#00366C">
                                        {item.name}
                                    </Typography>
                                    <Typography color="#202020"
                                        sx={{
                                            fontSize: { lg: '16px', md: '16px', sm: '14px', xs: '14px' },
                                            lineHeight: { lg: '24px', md: '24px', sm: '18px', xs: '18px' },
                                            fontWeight: 600,
                                        }}
                                    >
                                        {item.subTitle}
                                    </Typography>
                                    <Typography color="#565656"
                                        sx={{
                                            fontSize: { lg: '12px', md: '12px', sm: '12px', xs: '12px' },
                                            lineHeight: { lg: '18px', md: '18px', sm: '18px', xs: '18px' },
                                            fontWeight: 400,
                                        }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Box>
                            </Grid>
                        );
                    })}
                </Grid>
        

        </Box>
    )
}
export default FeatureBanner;


const data = [
    {
        name: '2M+',
        subTitle: 'Professionals trained',
        description: 'Lorem ipsum dolor sit amet consectetur. Integer lobortis suspendisse magna ornare ac sit at pellentesque.',
    },
    {
        name: '730',
        subTitle: 'Training Centres',
        description: 'Lorem ipsum dolor sit amet consectetur. Integer lobortis suspendisse magna ornare ac sit at pellentesque.',
    },
    {
        name: '24',
        subTitle: 'Global Locations',
        description: 'Lorem ipsum dolor sit amet consectetur. Integer lobortis suspendisse magna ornare ac sit at pellentesque.',
    },
    {
        name: '100+',
        subTitle: 'Best Courses',
        description: 'Lorem ipsum dolor sit amet consectetur. Integer lobortis suspendisse magna ornare ac sit at pellentesque.',
    },
]