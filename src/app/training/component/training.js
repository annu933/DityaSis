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
              >Customised Training</Typography>
              <Typography 
                  sx={{
                      fontSize: { xl: '21px', lg: '21px', md: '22px', sm: '22px', xs: '16px' },
                      lineHeight: { xl: '31px', lg: '31px', md: '24px', sm: '24px', xs: '22px' },
                      fontWeight: 400,
                      textAlign: 'center',
                      py:1
                  }}
              >Lorem ipsum dolor sit amet consectetur. Diam diam dui gravida purus praesent tristique. Nunc fusce lectus pretium pretium lorem placerat a.</Typography>
          </Box>
          <Grid container spacing={2}
           
          >
              {data.map((item, index) => {
                  return (
                      <Grid item xs={12} sm={12} md={6} lg={4} key={index}>
                          <Card sx={{
                              display: 'flex', alignItems: 'center', padding: 1,
                              borderRadius: '10px',
                              boxShadow: '0px 1px 17.5px 0px #00000040'
                          }}>
                              <Box sx={{
                                  backgroundImage: 'linear-gradient(180deg, #045BB3 0%, #0053A6 53%, #004182 100%)',
                                  padding: '10px',
                                  borderRadius: '5px',
                                  boxShadow: '0px 4px 10.4px 0px rgba(0, 0, 0, 0.25)',
                                  cursor: 'pointer',


                              }}>
                                  <Image src={img1.src} alt="training" width={50} height={50} style={{ objectFit: 'cover' }} />
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
                                          fontSize: { xl: '22px', lg: '22px', md: '22px', sm: '22px', xs: '16px' },
                                          lineHeight: { xl: '24px', lg: '24px', md: '24px', sm: '24px', xs: '22px' },
                                          fontWeight: 600,
                                          textAlign: 'center'
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