// ReusableCard.js
import React from 'react';
import { Card, CardContent, Typography, Button, CardActions, Box, CardMedia, Grid } from '@mui/material';
import Image from 'next/image';
import CustomButton from '../button/button';
import hour from '../../../public/image/hour.svg';
import center from '../../../public/image/center.svg';

const CustomCard = ({ name, description, ImageBanner, btn1, btn2, btn3, onButtonClick1, onButtonClick2, additionalButton }) => {

    return (
        <Grid item lg={3} md={6} sm={6} xs={12}

        >
            <Card
                sx={{
                    borderRadius: '20px',
                    margin: '10px'
                }}>
                <CardMedia
                    component="img"
                    height="200"
                    image={ImageBanner}
                    alt={name}
                // sx={{
                //     borderBlockStart: '20px',
                // }}
                />
                <CardContent>
                    <Typography gutterBottom component="div"
                        sx={{
                            fontSize: '14px',
                            lineHeight: '20px',
                            color: '#202020',
                            fontWeight: 600,
                        }}
                    >
                        {name}
                    </Typography>
                    <Typography color="#202020"
                        sx={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            fontWeight: 400,
                            width: { lg: '90%', md: '100%', sm: '100%', xs: '100%' }
                        }}
                    >
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'start',
                }}>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                    }}>
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}>

                            <div style={{ mr:1}}>
                            <CustomButton
                                // width={{ xs: '100px', sm: '100px', md: "100px", lg: "100px" }}
                                // backgroundImage='transparent'
                                // color="#00264B"
                                // fontSize="11px"
                                // padding='5px'
                                // marginRight="10px"
                                // fontWeight="bold"
                                // borderRadius="5px"
                                // border='1px solid #045BB2'
                                startIcon={hour}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    width:{ xs: '80px', sm: '80px', md: "80px", lg: "80px" },
                                    backgroundImage:'transparent',
                                    color:"#00264B",
                                    fontSize:"11px",
                                    padding:'5px',
                                    fontWeight:"bold",
                                    borderRadius:"5px",
                                    border:'1px solid #045BB2',
                                    marginRight:1
                                }}
                            >
                                {btn1.name}
                            </CustomButton>
                            </div>

                            <CustomButton
                                // width={{ xs: '100px', sm: '100px', md: "100px", lg: "100px" }}
                                // backgroundImage='transparent'
                                // color="#00264B"
                                // fontSize="11px"
                                // padding='5px'
                                // fontWeight="bold"
                                // borderRadius="5px"
                                // border='1px solid #045BB2'
                                startIcon={center}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    width:{ xs: '80px', sm: '80px', md: "80px", lg: "80px" },
                                    backgroundImage:'transparent',
                                    color:"#00264B",
                                    fontSize:"11px",
                                    padding:'5px',
                                    fontWeight:"bold",
                                    borderRadius:"5px",
                                    border:'1px solid #045BB2'
                                }}
                            >
                                {btn2.name}
                            </CustomButton>

                        </Box>

                       <Box sx={{
                        marginY: 2
                       }}>
                       <CustomButton
                        
                            backgroundImage='linear-gradient(187.32deg, #0060C0 33.06%, #003B76 94.52%)'
                            color="#FFFFFF"
                            fontSize="10px"
                            padding='10px'
                            borderRadius="5px"
                        >
                            Explore more
                        </CustomButton>
                       </Box>

                    </Box>



                </CardActions>
            </Card>
        </Grid>

    );
};

export default CustomCard;
