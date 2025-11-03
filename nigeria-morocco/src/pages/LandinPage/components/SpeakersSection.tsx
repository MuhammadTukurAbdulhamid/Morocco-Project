import React, { useState } from "react";

interface Speaker {
    id: number;
    name: string;
    image: string;
    title?: string;
    organization?: string;
    role?: string;
    subtitle?: string;
}

const SpeakersSection: React.FC = () => {
    const [activeTab, setActiveTab] = useState("confirmed");

    const confirmedSpeakers: Speaker[] = [
        {
            id: 1,
            name: "senior advisor",
            role: "Federal Institute of Agriculture, Abuja",
            subtitle: "Food: Providing strength",
            image: "speaker1.svg",
        },
        {
            id: 2,
            name: "Uzor Kalu",
            title: "Governo",
            organization: "Federal Institute of Agriculture, Abuja",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
        },
        {
            id: 3,
            name: "Uzor Kalu",
            title: "C.E.O",
            organization: "Federal Institute of Agriculture, Abuja",
            image: "speaker3.svg",
        },
    ];

    const pastSpeakers: Speaker[] = [
        {
            id: 4,
            name: "Jane Smith",
            title: "Director",
            organization: "National Research Institute",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
        },
        {
            id: 5,
            name: "Michael Brown",
            title: "Professor",
            organization: "University of Agriculture",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
        },
    ];

    const displaySpeakers = activeTab === "confirmed" ? confirmedSpeakers : pastSpeakers;

    return (
        <div className="min-h-screen py-12 px-4 bg-[#F5F5F5] sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Speakers</h1>
                    <p className="text-gray-600 text-sm">View list of present and past event speakers</p>
                </div>

                <div className="flex justify-center gap-3 mb-12">
                    <button onClick={() => setActiveTab('confirmed')} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'confirmed' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}>
                        Confirmed Speaker
                    </button>
                    <button onClick={() => setActiveTab('past')} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'past' ? 'bg-gray-900 text-white' : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'}`}>
                        Past Speakers
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displaySpeakers.map((speaker) => (
                        <div key={speaker.id} className=" rounded-lg overflow-hidden  transition-shadow">
                            <div className=" overflow-hidden">
                                <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-1">{speaker.name}</h3>
                                {speaker.title && <p className="text-sm text-gray-600 mb-1">{speaker.title}</p>}
                                <p className="text-sm text-gray-600">{speaker.organization || speaker.role}</p>
                                {speaker.subtitle && <p className="text-sm text-gray-500 mt-2">{speaker.subtitle}</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpeakersSection;
