import About from "@/component/about";
import Banner from "@/component/banner";
import Benefits from "@/component/benefits";
import Contact from "@/component/contact";
import Course from "@/component/coures";
import Feature from "@/component/features";
import Programm from "@/component/programm";
import Testimonial from "@/component/testimonial";


const HomePage = () => {

    return (
        <div>
            <Banner />
            <About />
            <Programm />
            <Course />
            <Feature />
            <Benefits />
            <Testimonial />
            <Contact />
        </div>
    )
}

export default HomePage;