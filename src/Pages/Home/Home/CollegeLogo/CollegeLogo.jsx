import img1 from "../../../../assets/logo/vlogo1.png";
import img2 from "../../../../assets/logo/vlogo2.png";
import img3 from "../../../../assets/logo/vlogo3.png";
import img4 from "../../../../assets/logo/vlogo4.png";
import img5 from "../../../../assets/logo/volgo5.png";
import img6 from "../../../../assets/logo/vlogo6.png";

const collegeLogo = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 pt-24 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl mb-3 text-blue-900 font-bold">Our University Collaborations</h2>
            <p className="text-center text-gray-700 mb-10">Creating a vibrant ecosystem of interconnected universities.</p>

            <div className="">
                <div >
                <div className="grid grid-cols-6 md:grid-cols-6 gap-4">
                    <div className="col-span-1">
                      <img className="w-36" src={img6} alt="" />
                    </div>
                    <div className="col-span-1">
                      <img className="w-36" src={img3} alt="" />
                    </div>
                    <div className="col-span-1">
                      <img className="w-36" src={img2} alt="" />
                    </div>
                    <div className="col-span-1">
                      <img className="w-36" src={img1} alt="" />
                    </div>
                    <div className="col-span-1">
                      <img className="w-36" src={img5} alt="" />
                    </div>
                    <div className="col-span-1">
                      <img className="w-36" src={img4} alt="" />
                    </div>
                
                    </div>
                </div>
                </div>
            </div>
    );
};

export default collegeLogo;