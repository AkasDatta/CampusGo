import Banner from "./Banner/Banner";
import BannerCard from "./BannerCard/BannerCard";
import CollegeCard from "./CollegeCard/CollegeCard";
import Gallery from "./Gallery/Gallery";
import Research from "./Research/Research";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerCard></BannerCard>
            <CollegeCard></CollegeCard>
            <Gallery></Gallery>
            <Research></Research>
        </div>
    );
};

export default Home;