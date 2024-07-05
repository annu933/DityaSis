import Navbar from "@/component/navbar";

import { Box } from "@mui/material";


import Footer from "@/component/footer";
import HomePage from "./Home/home";

export default function Home() {
  return (
    <Box>
      <Navbar />
      <HomePage />
      <Footer />
    </Box>
  );
}
