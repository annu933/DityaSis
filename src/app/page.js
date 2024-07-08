import About from "@/component/about";
import Banner from "@/component/banner";
import BannerSlider from "@/component/bannerSlider";
import Benefits from "@/component/benefits";
import Contact from "@/component/contact";
import Course from "@/component/coures";
import Feature from "@/component/features";
import Navbar from "@/component/navbar";
import Programm from "@/component/programm";
import Testimonial from "@/component/testimonial";

import { Box } from "@mui/material";

export default function Home() {
  return (
    <Box>

      {/* <Banner /> */}
      <BannerSlider />
      <About />
      <Programm />
      <Course />
      <Feature />
      <Benefits />
      <Testimonial />
      <Contact />


    </Box>
  );
}
