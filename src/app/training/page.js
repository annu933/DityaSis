import Advantage from "./component/advantage";
import BannerTraining from "./component/bannerTraining";
import InstitutionTrained from "./component/institutionTrained";
import Login from "./component/login";
import TestimonialTraining from "./component/testimonial";
import TopCompanies from "./component/topCompanies";
import TrainingFeature from "./component/training";



const Training = () => {

    return (
        <div>
            <BannerTraining />
            <TrainingFeature />
            <Advantage />
            <Login />
            <TestimonialTraining />
            <InstitutionTrained />
            <TopCompanies />
        </div>
    )
}

export default Training;