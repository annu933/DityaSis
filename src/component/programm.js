"use client"
import { createTheme, ThemeProvider, Box, Button, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import mainImage from '../../public/image/heroImg.png';
import CustomButton from "@/utils/button/button";
import img1 from '../../public/image/pro1.png';
import img2 from '../../public/image/pro2.png';
import img3 from '../../public/image/pro3.png';
import img4 from '../../public/image/pro4.png';
import CustomCard from "@/utils/card/Card";


// const themeBreakPoint = createTheme({
//     breakpoints: {
//         values: {
//             xs: 0,
//             sm: 769,
//             md: 900,
//             lg: 1200,
//             xl: 1536,
//             xxl: 2559,
//         },
//     },
// });

function Programm() {


    const handleButtonClick1 = () => {
        alert('Button 1 clicked');
    };

    const handleButtonClick2 = () => {
        alert('Button 2 clicked');
    };
    const additionalButton = () => {
        alert('Button 3 clicked');
    };

 
    return (
        // <ThemeProvider theme={themeBreakPoint}>
            <Box
                px={{ xs: 0, sm: 0, md: 0, lg: 5, xl: 5 }}
                py={{ xs: 5, sm: 5, md: 5, lg: 10, xl: 10 }}
                sx={{
                    height: 'auto',
                    backgroundColor: '#F8F8F8',
                }}

            >
                <Container maxWidth="xl">
                    <Box>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                        }}>
                            <Box sx={{
                                marginBottom: 3
                            }}>
                                <CustomButton
                                    width="250px"
                                    backgroundColor='#FCEFE2'
                                    color="#F17D10"
                                    fontSize="20px"
                                    padding='10px'
                                    borderRadius="20px"
                                >
                                    Programmes
                                </CustomButton>
                            </Box>
                            <Typography color="#00264B" gutterBottom className="poppins-font"
                                sx={{
                                    fontSize: { lg: '45px', md: '45px', sm: '30px', xs: '22px' },
                                    lineHeight: { lg: '75px', md: '75px', sm: '40px', xs: '32px' },
                                    fontWeight: 500,
                                    textAlign: 'center',
                                }}
                            >
                                Executive Diploma Programme
                            </Typography>
                        </div>
                    </Box>
                    <Grid container
                        sx={
                            {
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                flexWrap: 'wrap',
                                paddingY: 5,
                            }
                        }
                    >
                        {data.map((item) => {
                            return (
                                <CustomCard
                                    key={item.name}
                                    name={item.name}
                                    description={item.description}
                                    ImageBanner={item.image}
                                    btn1={item.button1}
                                    btn2={item.button2}
                                    btn3={item.button3}
                                    onButtonClick1={() => handleButtonClick1}
                                    onButtonClick2={() => handleButtonClick2}
                                    additionalButton={additionalButton}
                                />
                            )
                        })
                        }
                    </Grid>
                </Container>

            </Box>
        // </ThemeProvider>

    );
}

export default Programm;

const data = [
    {
        name: 'Turbo generator and Excitation System',
        description: 'Project based assessment | World-class courseware | Industry recognized certificate | Placement support',
        image: img1.src,
        button1: {
            name: '160 hrs',
            icon: 'icon-name' // Replace 'icon-name' with the actual icon name or path
        },
        button2: {
            name: 'In-centre',
            icon: 'icon-name' // Replace 'icon-name' with the actual icon name or path
        },
        button3: 'Know More'
    },
    {
        name: 'Structural Engineer',
        description: 'Project based assessment | World-class courseware | Industry recognized certificate | Placement support',
        image: img2.src,
        button1: {
            name: '160 hrs',
            icon: 'icon-name' // Replace 'icon-name' with the actual icon name or path
        },
        button2: {
            name: 'In-centre',
            icon: 'icon-name' // Replace 'icon-name' with the actual icon name or path
        },
        button3: 'Know More'
    },
    {
        name: 'Mechanical engineer manager',
        description: 'Project based assessment | World-class courseware | Industry recognized certificate | Placement support',
        image: img3.src,
        button1: {
            name: '160 hrs',
            icon: 'icon-name' // Replace 'icon-name' with the actual icon name or path
        },
        button2: {
            name: 'In-centre',
            icon: 'icon-name' // Replace 'icon-name' with the actual icon name or path
        },
        button3: 'Know More'
    },
    {
        name: 'Cybersecurity Analytics',
        description: 'Project based assessment | World-class courseware | Industry recognized certificate | Placement support',
        image: img4.src,
        button1: {
            name: '160 hrs',
            icon: 'icon-name' // Replace 'icon-name' with the actual icon name or path
        },
        button2: {
            name: 'In-centre',
            icon: 'icon-name' // Replace 'icon-name' with the actual icon name or path
        },
        button3: 'Know More'
    }
]
