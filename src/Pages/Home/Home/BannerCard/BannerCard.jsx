import { IoLibrary } from "react-icons/io5";
import { IoEarthSharp } from "react-icons/io5";
import { MdOutlineLibraryBooks } from "react-icons/md";


const BannerCard = () => {
    return (
      <div className="shadow-lg">
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-black grid grid-cols-2 md:grid-cols-4 gap-4" data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0">
              <div className="col-span-1">
                <IoLibrary className="lg:text-6xl sm:text-4xl mt-3 mx-2"></IoLibrary>
              </div>
              <div className="col-span-3">
                <h2 className="text-xl font-bold mb-4">Education Services</h2>
                <p>
                  Seamlessly visualize quality intellectual capital without superior collaboration and idea sharing listically
                </p>
              </div>
            </div>
            <div className="text-black grid grid-cols-2 md:grid-cols-4 gap-4"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0">
              <div className="col-span-1">
                <IoEarthSharp className="lg:text-6xl sm:text-4xl mt-3 mx-2"></IoEarthSharp>
              </div>
              <div className="col-span-3">
                <h2 className="text-xl font-bold mb-4">International Hubs</h2>
                <p>
                  Seamlessly visualize quality intellectual capital without superior collaboration and idea sharing listically
                </p>
              </div>
            </div>
            <div className="text-black grid grid-cols-2 md:grid-cols-4 gap-4"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="400"
            data-aos-offset="0">
              <div className="col-span-1">
                <MdOutlineLibraryBooks className="lg:text-6xl sm:text-4xl mt-3 mx-2"></MdOutlineLibraryBooks>
              </div>
              <div className="col-span-3">
                <h2 className="text-xl font-bold mb-4">Bachelor's and Master's</h2>
                <p>
                  Seamlessly visualize quality intellectual capital without superior collaboration and idea sharing listically
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BannerCard;
  
  