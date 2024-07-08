import Advantage from "./component/advantage";
import BannerTraining from "./component/bannerTraining";
import InstitutionTrained from "./component/institutionTrained";
import TopCompanies from "./component/topCompanies";
import TrainingFeature from "./component/training";



const Training = () => {

    return (
        <div>
            <BannerTraining />
            <TrainingFeature />
            <Advantage />
            <InstitutionTrained />
            <TopCompanies />
        </div>
    )
}

export default Training;