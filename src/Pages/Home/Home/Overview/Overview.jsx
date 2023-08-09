import { useState } from 'react';
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import './Overview.css';

const Overview = () => {
    const [counterOn, setCounterOn] = useState(false);
    
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <section id="getStarted" className="py-5 text-center text-light bg-cover bg-fixed min-h-screen">
                <div className="dark-overlay">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 md:mt-10 lg:mt-28">
                            <div className="bg-transparent border-0 text-light p-4">
                                <div className="text-4xl text-blue-400 md:text-5xl mb-2">
                                    {counterOn && <CountUp start={0} end={1500} duration={6} delay={0} />}
                                    {!counterOn && "0%"}
                                </div>
                                <h5 className="text-xl md:text-2xl">Professional</h5>
                                <p className="text-lg md:text-xl">Teachers</p>
                            </div>
                            <div className="bg-transparent border-0 text-light p-4">
                                <div className="text-4xl text-blue-400 md:text-5xl mb-2">
                                    {counterOn && <CountUp start={0} end={10347} duration={7} delay={0} />}
                                    {!counterOn && "0%"}
                                </div>
                                <h5 className="text-xl md:text-2xl">Successful</h5>
                                <p className="text-lg md:text-xl">Students</p>
                            </div>
                            <div className="bg-transparent border-0 text-light p-4">
                                <div className="text-4xl text-blue-400 md:text-5xl mb-2">
                                    {counterOn && <CountUp start={0} end={312} duration={7} delay={0} />}
                                    {!counterOn && "0%"}
                                </div>
                                <h5 className="text-xl md:text-2xl">Informative</h5>
                                <p className="text-lg md:text-xl">Courses</p>
                            </div>
                            <div className="bg-transparent border-0 text-light p-4">
                                <div className="text-4xl text-blue-400 md:text-5xl mb-2">
                                    {counterOn && <CountUp start={0} end={100} duration={7} delay={0} />}%
                                    {!counterOn && "0%"}
                                </div>
                                <h5 className="text-xl md:text-2xl">Satisfaction</h5>
                                <p className="text-lg md:text-xl">Rate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    );
};

export default Overview;
