

export default function SponsorshipSection() {
    const packages = [
        {
            icon: (
                <img src="/platinum.svg" alt="Platinum" className="w-10 h-10" />
            ),
            title: "Platinum",
            price: "₦3,000,000",
            features: [
                "Speaking opportunity",
                "VIP access",
                "Maximum brand visibility",
                "Prime booth location"
            ],
            color: "blue"
        },
        {
            icon: (
                <img src="/gold.svg" alt="gold" className="w-10 h-10" />
            ),
            title: "Gold",
            price: "₦2,000,000",
            features: [
                "Premium booth space",
                "Panel participation",
                "Networking events",
                "Logo placement"
            ],
            color: "yellow"
        },
        {
            icon: (
                <img src="/silver.svg" alt="silver" className="w-10 h-10" />
            ),
            title: "Silver",
            price: "₦1,500,000",
            features: [
                "Standard booth",
                "Event access",
                "Brand inclusion",
                "Marketing materials"
            ],
            color: "gray"
        }
    ];

    const sponsors = [
        {
            name: "NADDC National Automotive Design and Development Council",
            logo: "NADDC.svg",
       
        },
        {
            name: "Federal Government of Nigeria",
            logo: "NERM.svg",
           
        },
        {
            name: "Nigeria Embassy Rabat Morocco",
            logo: "NFMI.svg",
           
        },
      
        {
            name: "JOS Electricity Distribution PLC",
            logo: "JERN.svg",
           
        }
    ];

    return (
        <div className="w-full bg-gradient-to-b from-gray-50 to-white py-20 px-4">

            <div className="max-w-7xl mx-auto mb-24">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                    Sponsorship Package
                </h2>
                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-16 text-base">
                    Gain direct access to key decision-makers, boost brand visibility, and demonstrate your commitment to Africa's economic growth
                </p>

                {/* Package Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-6xl mx-auto">
                    {packages.map((pkg, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl border border-gray-200 p-8 hover:shadow-sm transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex justify-center mb-6">
                                <div className="flex justify-center items-center w-16 h-16 rounded-full bg-[#F2F2F799]">
                                    {pkg.icon}
                                </div>
                            </div>


                            <h3 className="text-2xl font-bold text-center text-gray-900 mb-3">
                                {pkg.title}
                            </h3>
                            <p className="text-3xl font-bold text-center text-green-700 mb-8">
                                {pkg.price}
                            </p>
                            <ul className="space-y-4">
                                {pkg.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start text-sm">
                                        <span className="text-green-600 mr-3 font-bold">•</span>
                                        <span className="text-gray-700 text-md">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Download Button */}
                <div className="flex justify-center">
                    <button className="px-8 py-3 bg-white border-2 border-green-500 text-green-600 rounded-lg font-medium hover:bg-green-50 transition-all duration-200 text-base">
                        Download Sponsorship Prospectus
                    </button>
                </div>
            </div>

            {/* Sponsors Section */}
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
                    Our 2024 Sponsors
                </h2>
                <p className="text-center text-gray-600 mb-16 text-base">
                    Thank you to our valued partners who made Business Week 2024 a success
                </p>

                {/* Sponsor Logos */}
                <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
                    {sponsors.map((sponsor, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-lg p-6 flex flex-col items-center justify-center   h-40`}
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                    ))}
                </div>

            
            </div>
        </div>
    );
}