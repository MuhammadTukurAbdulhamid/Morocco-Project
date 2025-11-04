import React from "react";
import ProgramItems from "./ProgramItems";

interface Props {
    scrollRef: React.RefObject<HTMLDivElement>;
}

const PartnersSection: React.FC<Props> = ({ scrollRef }) => {
    const sectors = [
        {
            title: "Agriculture and Agric-business",
            content: "Moroccan agribusiness can tap into Nigeria's $18 food market through partnerships that boost productivity, cocoa processing, and high-quality, seed beef production, while joint ventures and knowledge exchange strengthen bilateral collaboration.",
            icon: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop"
        },
        {
            title: "Electricity and Renewable Energy",
            content: "Moroccan energy firms can collaborate with Nigerian agencies on solar mini-grids, wind farms, geothermal exploration, and renewable-powered industrial parks to boost Nigeria's electricity generation.",
            icon: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&h=400&fit=crop"
        },
        {
            title: "Digital Economy",
            content: "Startup incubation, e-commerce integration, digital ID solutions, cross-border fintech collaboration, and cybersecurity infrastructure.",
            icon: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
        },
        {
            title: "Banking and Finance",
            content: "A strong financial sector is key to unlocking the full potential of Nigeria-Morocco trade, enabling seamless cross-border transactions, investments, and risk management as both nations deepen economic integration.",
            icon: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&h=400&fit=crop"
        },
        {
            title: "Tourism, Culture and Handicrafts",
            content: "Morocco's rich culture can resonate with Nigerian arts and boost handicraft trade. Morocco's advanced tourism infrastructure complements Nigeria's rich cultural and eco-potential economies.",
            icon: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=600&h=400&fit=crop"
        }
    ];

    return (
        <div ref={scrollRef} id="partners" className="flex flex-col items-center p-4 pb-20 to-gray-50 mx-2 md:mx-20 my-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl mb-[4rem]">
                <div className="flex flex-col items-center">
                    <img src="../../../public/sector.svg" alt="" className="mb-2 " />
                    <div className="text-3xl font-bold text-gray-800">4+</div>
                    <div className="text-sm text-gray-600 uppercase">Sectors</div>
                </div>
                <div className="flex flex-col items-center">
                    <img src="../../../public/companies.svg" alt="" className="mb-2" />
                    <div className="text-3xl font-bold text-gray-800">10+</div>
                    <div className="text-sm text-gray-600 uppercase">Industries</div>
                </div>
                <div className="flex flex-col items-center">
                    <img src="../../../public/Mou.svg" alt="" className="mb-2" />
                    <div className="text-3xl font-bold text-gray-800">2+</div>
                    <div className="text-sm text-gray-600 uppercase">Years</div>
                </div>
                <div className="flex flex-col items-center">
                    <img src="../../../public/Delegate.svg" alt="" className="mb-2" />
                    <div className="text-3xl font-bold text-gray-800">100+</div>
                    <div className="text-sm text-gray-600 uppercase">Participants</div>
                </div>
            </div>

            <div className="w-full max-w-5xl mb-20">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-[3rem]">About the Business Week</h2>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-gray-700 leading-9">
                        <p className="mb-4">
                            The 2nd Nigeria–Morocco Business Week (NMBW) / Investment Summit, holding in Lagos, Kano, and Abuja from <span className="font-bold">8–11 December 2025</span>, themed <span className="font-bold italic">"Advancing Nigeria-Morocco Trade & Investments through Economic Integration & Implementation,"</span> aims to strengthen the historic ties between both nations. The summit will serve as a platform for dialogue, knowledge exchange, and strategic partnerships to boost trade, investment, and shared economic growth.
                        </p>
                    </div>
                    <div className="relative">
                        <img src="../../../public/flags.svg" alt="" className="mb-2" />
                    </div>
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 w-full max-w-5xl mb-4">
                <div className="flex flex-col items-center text-center p-6  rounded-xl bg-[#E5E5EA]">
                    <img src="../../../public/mission.svg" alt="" className="mb-2 w-10" />
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Mission and Objective</h3>
                    <p className="text-gray-600 text-sm">Promote bilateral trade, innovation, and sustainable growth.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-[#E5E5EA] rounded-xl ">
                    <img src="../../../public/vision.svg" alt="" className="mb-2 w-10" />
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Vision</h3>
                    <p className="text-gray-600 text-sm">To establish the premier platform for Africa's business leaders, fostering partnerships that drive economic prosperity and regional integration.</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-[#E5E5EA] rounded-xl ">
                    <img src="../../../public/institution.svg" alt="" className="mb-2 w-10" />
                    <h3 className="text-xl font-bold text-gray-800 mb-3">Institutional Backing</h3>
                    <p className="text-gray-600 text-sm">This program is backed by ministries, embassies and development agencies. To learn more, scroll to sponsors section.</p>
                </div>
            </div>

            <div className="flex flex-col items-center bg-gray-50 py-20">
                <h1 className="text-3xl text-gray-800 font-semibold mb-3">Key Sectors</h1>
                <p className="max-w-2xl text-center text-gray-600 mb-12">Explore unprecedented trade opportunities across diverse industries connecting Nigeria and Morocco</p>
                <div className="w-full max-w-7xl px-4"> j 
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        {sectors.slice(0, 3).map((sector, index) => (
                            <div key={index} className="transition-all duration-300">
                                <ProgramItems icon={sector.icon} title={sector.title} content={sector.content} />
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
                        {sectors.slice(3, 5).map((sector, index) => (
                            <div key={index + 3} className="transition-all duration-300">
                                <ProgramItems icon={sector.icon} title={sector.title} content={sector.content} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnersSection;
