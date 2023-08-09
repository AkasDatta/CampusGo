import Banner from "./Banner/Banner";
import BannerCard from "./BannerCard/BannerCard";
import CollegeCard from "./CollegeCard/CollegeCard";
import Gallery from "./Gallery/Gallery";
import Research from "./Research/Research";
import Testimonial from "./Testimonial/Testimonial";
import CollegeLogo from "./CollegeLogo/CollegeLogo";
import LatestNews from "./LatestNews/LatestNews";
import Overview from "./Overview/Overview";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <CollegeCard></CollegeCard>
            <Gallery></Gallery>
            <Overview></Overview>
            <Research></Research>
            <Testimonial></Testimonial>
            <CollegeLogo></CollegeLogo>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;