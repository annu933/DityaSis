"use client"
import { Box, Card, Container, Grid, TextField, Typography } from "@mui/material";
import Image from "next/image";
// import contact from "../app/image/contact.js"
import login from '../../../../public/image/loginBG.png';
import FormProvider from "@/hooks/FormProvider";
import { useForm } from "react-hook-form";
import { RHFTextField, RHFTextInput } from "@/hooks";

// import PhoneIcon from '@mui/icons-material/Phone';
// import EmailIcon from '@mui/icons-material/Email';


const Login = () => {
    const handlePhoneIconClick = () => {
        window.open(`tel:${+916541365911}`);
    };

    const methods = useForm(
        //     {
        //     resolver: yupResolver(UserSchema),
        //     defaultValues,
        //   }
    );

    const {
        reset,
        watch,
        control,
        setValue,
        handleSubmit,
        // formState: { isSubmitting },
    } = methods;

    const onSubmit = async (data) => {
        console.log(data);
    }
    return (
        <Box
            my={5}
        >
            <Box>
                <Grid

                    container sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        border: '2px solid #81ADD8',
                        boxShadow: '0px 4px 10.4px 0px #00000026',
                        backgroundImage: 'linear-gradient(106.02deg, #045BB3 0.81%, #003C78 101.75%)',

                    }}>

                    <Grid item lg={6} md={6} sm={6} xs={12} >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100vh',
                                // position: 'relative',
                                // objectFit: 'center',
                                background: `url(${login.src})`,
                                backgroundRepeat: 'no-repeat !important',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                        >
                            {/* <Image src={login.src}
                                fill
                                style={{ objectFit: "contain" }}
                                alt="contact" /> */}
                        </Box>
                    </Grid>
                    <Grid item lg={6} md={6} sm={6} xs={12}
                    >
                        <Card sx={{
                            padding: 5,
                            height: 'auto',
                            marginX: 4
                        }}>
                            <Typography my={2}
                                sx={{
                                    fontSize: { lg: '24px', md: '24px', sm: '22px', xs: '20px' },
                                    lineHeight: { lg: '33px', md: '33px', sm: '24px', xs: '22px' },
                                    fontWeight: 600,
                                    textAlign: 'center',
                                }}
                            >Login</Typography>

                            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                                <Box sx={{ width: '100%' }}>

                                    <div>
                                        <Box my={3}>
                                            <Typography>First name</Typography>
                                            <TextField
                                                hiddenLabel
                                                id="filled-hidden-label-normal"
                                                defaultValue="Normal"
                                                variant="filled"
                                                sx={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Box>
                                        <Box my={3}>
                                            <Typography>Official Email</Typography>
                                            <TextField
                                                hiddenLabel
                                                id="filled-hidden-label-normal"
                                                defaultValue="Normal"
                                                variant="filled"
                                                sx={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Box>
                                        <Box my={3}>
                                            <Typography>Mobile No</Typography>
                                            <TextField
                                                hiddenLabel
                                                id="filled-hidden-label-normal"
                                                defaultValue="Normal"
                                                variant="filled"
                                                sx={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Box>
                                        <Box my={3}>
                                            <Typography>Country</Typography>
                                            <TextField
                                                hiddenLabel
                                                id="filled-hidden-label-normal"
                                                defaultValue="Normal"
                                                variant="filled"
                                                sx={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Box>
                                        <Box my={3}>
                                            <Typography>Training Location</Typography>
                                            <TextField
                                                hiddenLabel
                                                id="filled-hidden-label-normal"
                                                defaultValue="Normal"
                                                variant="filled"
                                                sx={{
                                                    width: '100%',
                                                }}
                                            />
                                        </Box>
                                        <RHFTextInput minRow={4} multiline name="badges" label="Badges" />

                                    </div>


                                </Box>
                            </FormProvider>
                        </Card>
                    </Grid>
                </Grid>

            </Box>
        </Box>
    )
}

export default Login;