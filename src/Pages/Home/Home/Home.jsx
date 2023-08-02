import Banner from "./Banner/Banner";
import BannerCard from "./BannerCard/BannerCard";
import CollegeCard from "./CollegeCard/CollegeCard";
import Gallery from "./Gallery/Gallery";
import Research from "./Research/Research";
import Testimonial from "./Testimonial/Testimonial";
import CollegeLogo from "./CollegeLogo/CollegeLogo";
import LatestNews from "./LatestNews/LatestNews";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <CollegeCard></CollegeCard>
            <Gallery></Gallery>
            <Research></Research>
            <Testimonial></Testimonial>
            <CollegeLogo></CollegeLogo>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;