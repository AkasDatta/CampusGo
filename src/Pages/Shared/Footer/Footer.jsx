
const Footer = () => {
    return (
        <div>
            <footer className="bg-blue-100">
                <div className="mx-auto max-w-screen-xl px-4 pt-8 pb-16 sm:px-6 lg:px-8">
                    <div className="lg:flex lg:items-start lg:gap-8">

                    <div
                        className="grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16"
                    >
                        <div className="col-span-1 sm:col-span-1">
                            <p className="font-bold text-gray-900">Explore</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Home
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Colleges
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Admission
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    My College
                                </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1 sm:col-span-1">
                            <p className="font-bold text-gray-900">Services</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Become a Teacher
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Privacy Policy
                                </a>
                                </li>

                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-75">
                                    Blog
                                </a>
                                </li>
                                <li>
                                <a href="#" className="text-blue-800 transition hover:opacity-70">
                                    Our Teachers
                                </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-span-1 sm:col-span-1">
                            <p className="font-bold text-gray-900">About CampusGo University Website</p>

                            <ul className="mt-6 space-y-4 text-sm">
                                <p className="text-gray-600">
                                    CampusGo is a comprehensive university website providing easy access to academic resources and campus information for students and faculty.</p>
                            </ul>
                        </div>
                    </div>
                    </div>

                    <div className="mt-8 border-t border-blue-800 pt-8">
                    <div className="sm:flex sm:justify-between">
                        <p className="text-xs text-black">
                        &copy; 2022. CampusGo. All rights reserved.
                        </p>

                        <ul
                        className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end"
                        >
                        <li>
                            <a href="#" className="text-blue-800 transition hover:opacity-75">
                            Terms & Conditions
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-blue-800 transition hover:opacity-75">
                            Privacy Policy
                            </a>
                        </li>

                        <li>
                            <a href="#" className="text-blue-800 transition hover:opacity-75">
                            Cookies
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                </footer>
        </div>
    );
};

export default Footer;







import { FaArrowsLeftRight } from "react-icons/fa6";
import { useState } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import { useEffect } from "react";

const Calculator = () => {
const [initialCost, setInitialCost] = useState(6);
const [numberOfInvoices, setNumberOfInvoices] = useState(0);
const [result, setResult] = useState(0);

// Calculate savings based on the corrected formula
const calculateSavings = () => {
  return (initialCost -3) * numberOfInvoices + (numberOfInvoices * 0.01);
};

 useEffect(() =>{
    setResult(calculateSavings())
 },[initialCost,numberOfInvoices])

  return (
    <div className="bg-[#009f72] text-white">
      <div className="max-w-screen-2xl mx-auto lg:px-24 md:px-5 px-5 overflow-x-hidden py-12 text-center">
        <h2 className="text-2xl">Average Invoice Processing<br /> Cost ($SGD)</h2>

        <input onChange={e => setInitialCost(e.target.value)} type="number" value={initialCost} placeholder="6" className="rounded-md border-b-4 py-1.5 text-[#fff] text-center text-2xl font-bold bg-[#009f72] shadow-sm ring-0 ring-inset ring-[#009f72] placeholder:text-[#fff] focus:ring-none focus:ring-[#fff] sm:leading-10 mb-6" />
        <div className="border-2 mx-auto w-80 h-80 p-3 rounded-full circle-slider-container">
          <div className="circle-slider-outer">
                <CircularSlider
                    label="savings"
                    min={0}
                    max={10000}
                    dataIndex={0}
                    prependToValue="$"
                    appendToValue="K"
                    labelColor="#fff"
                    labelBottom={true}
                    knobColor="#eeeeee"
                    knobSize={72}
                    progressColorFrom="#fff"
                    progressColorTo="#fff"
                    progressSize={5}
                    trackColor="#eeeeee"
                    trackSize={5}
                    continuous={{interval:100}}
                    onChange={ value => { setNumberOfInvoices(value)} }
                >
                    <FaArrowsLeftRight className="text-2xl text-black" x='24' y='24' width='32px' height='32px' />
                </CircularSlider>
          </div>
        </div>

        <h1 className="m-20">{result}</h1>
      </div>
    </div>
  );
};

export default Calculator;
