"use client"
import React from 'react';
import { Box, Container, Typography, Link, Grid, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from '../../public/logo.png';

const Footer = () => {
    const handlePhoneIconClick = () => {
        window.open(`tel:${+916541365911}`);
      };
  return (
    <Box
      px={{ xs: 2, sm: 2, md: 5, lg: 10, xl: 10 }}
      component="footer"
      sx={{
        backgroundColor: '#045BB2',
        color: 'white',
        padding: '40px 0',
      }}
    >
      <Container maxWidth="xl">
        <Box>
        <Typography variant="h6" sx={{ mb: 2 }}>
                <Box sx={{
                  backgroundColor: '#fff',
                  padding:1,
                  borderRadius: '5px',
                  width: '50px',
                }}>
                <img src={logo.src} alt="Company Logo" style={{ width: 50, height: 50 }} />
                </Box>
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                We are a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat... <Link href="#" sx={{ color: 'inherit' }}>Read More</Link>
              </Typography>
        </Box>
      <Grid container spacing={2}>
            <Grid item lg={5} md={5} sm={12} xs={12}>
             
              <Box my={4}>
                <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                  <PhoneIcon />
                  <Box>
                    <Typography>Call Now</Typography>
                    <Typography sx={{cursor: 'pointer'}}   onClick={handlePhoneIconClick}>310-437-2766</Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'start', gap: 2,my:3 }}>
                  <EmailIcon />
                  <Box>
                    
                    <Typography>Email Id</Typography>
                    <Typography><a href="mailto:abcd@gmail.com" style={{color: '#fff', textDecoration: 'none'}}>abcd@gmail.com</a></Typography>
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'start', gap: 2 }}>
                  <LocationOnIcon />
                  <Box>
                    <Typography>Address</Typography>
                    <Typography>706 Campfire Ave. Meriden, CT 06450</Typography>
                  </Box>

                </Box>
              </Box>
            </Grid>
            <Grid item lg={7} md={7} sm={12} xs={12}>
              <Grid container >
                {data.map((section, index) => (
                  <Grid item key={index} lg={4} md={4} sm={4} xs={6} my={2}>
                    <Typography sx={{ fontSize: '20px', fontWeight: 600 }}>{section.title}</Typography>
                    {section.items.map((item, idx) => (
                      <Link key={idx} to={item.link} style={{ textDecoration: 'none', color: '#fff', fontWeight: 200 }}>
                        <Typography sx={{ mt: 2, cursor: 'pointer' }}>
                          {item.name}
                        </Typography>
                      </Link>
                    ))}
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        <Divider sx={{ borderColor: 'rgba(255, 255, 255, 0.3)', my: 4 }} />
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap' }}>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>About us</Link>
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>Contact</Link>
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>Privacy policy</Link>
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>Sitemap</Link>
            <Link href="#" sx={{ color: 'inherit', textDecoration: 'none' }}>Terms of Use</Link>
          </Box>
          <Typography variant="body2">
            &copy; 2000-2021, All Rights Reserved
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;


const data = [
  {
    title: "About",
    items: [
      { name: "About us", link: "/about-us" },
      { name: "Blog", link: "/blog" },
      { name: "Careers", link: "/careers" },
      { name: "Jobs", link: "/jobs" },
      { name: "In Press", link: "/in-press" }
    ]
  },
  {
    title: "Support",
    items: [
      { name: "Contact us", link: "/contact-us" },
      { name: "Online Chat", link: "/online-chat" },
      { name: "Whatsapp", link: "/whatsapp" },
      { name: "Telegram", link: "/telegram" },
      { name: "Ticketing", link: "/ticketing" }
    ]
  },
  {
    title: "FAQ",
    items: [
      { name: "Account", link: "/account" },
      { name: "Manage Deliveries", link: "/manage-deliveries" },
      { name: "Orders", link: "/orders" },
      { name: "Payments", link: "/payments" },
      { name: "Returns", link: "/returns" }
    ]
  }
];