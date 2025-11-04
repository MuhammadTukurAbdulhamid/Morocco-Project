import React, { useEffect, useState } from "react";
import { Button } from "antd";

interface Props {
    onRegister: () => void;
    onBook: () => void;
}

const HeroSection: React.FC<Props> = ({ onRegister, onBook }) => {
    const [eventCountdown, setEventCountdown] = useState("");
    const eventDate = new Date("2025-12-08T09:00:00");

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const diff = eventDate.getTime() - now.getTime();
            if (diff <= 0) {
                setEventCountdown("Event Started!");
                clearInterval(interval);
                return;
            }
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / (1000 * 60)) % 60);
            const seconds = Math.floor((diff / 1000) % 60);
            setEventCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                background: 'linear-gradient(rgba(10, 25, 41, 0.7), rgba(26, 58, 82, 0.7)), url(/landinghome.svg)',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
            className="flex w-full px-5 flex-col min-h-50  justify-start md:flex-row md:justify-between items-center flex-1 md:px-20 lg:px-40"
        >
            <div className="flex w-full flex-col md:w-4/6 animate-fade-in mt-20 md:mt-10 ">
                <h1 
                    className="text-4xl md:text-6xl text-left font-bold text-white drop-shadow-lg animate-slide-down" 
                    style={{ WebkitTextStroke: '2px white', WebkitTextFillColor: 'transparent' }}
                >
                    NIGERIA-MOROCCO
                </h1>
                <h1 className="text-4xl md:text-5xl text-left font-bold text-white drop-shadow-lg animate-slide-up">
                    BUSINESS WEEK
                </h1>
                <h1 className="text-3xl md:text-5xl text-left font-bold text-white drop-shadow-lg">
                    2025.
                </h1>
                <h2 className="mt-6 text-left text-white text-2xl font-bold animate-fade-in-delay">
                    ABUJA, LAGOS, KANO - 8- 11 DEC, 2025
                </h2>

                <div className="bg-white rounded-2xl px-6 py-4 mt-6 inline-flex gap-6 w-fit">
                    <div className="flex flex-col items-center">
                        <span className="text-red-600 font-bold text-3xl">
                            {eventCountdown.split('d')[0]}
                        </span>
                        <span className="text-gray-700 text-sm">Days</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-red-600 font-bold text-3xl">
                            {eventCountdown.split('d ')[1]?.split('h')[0]}
                        </span>
                        <span className="text-gray-700 text-sm">Hours</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-red-600 font-bold text-3xl">
                            {eventCountdown.split('h ')[1]?.split('m')[0]}
                        </span>
                        <span className="text-gray-700 text-sm">Minutes</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-red-600 font-bold text-3xl">
                            {eventCountdown.split('m ')[1]?.split('s')[0]}
                        </span>
                        <span className="text-gray-700 text-sm">Seconds</span>
                    </div>
                </div>

                <div className="flex gap-4 mt-8">
                    <Button 
                        onClick={onBook} 
                        className="bg-green-600 hover:bg-green-700 w-[200px] h-12 text-white font-semibold hover:scale-105 transition-all duration-200"
                    >
                        Become A Sponsor
                    </Button>
                    <Button 
                        onClick={onRegister} 
                        className="bg-white border-2 border-white text-gray-800 hover:bg-gray-100 w-[200px] h-12 font-semibold rounded-lg shadow-lg hover:scale-105 transition-all duration-200"
                    >
                        Register/ Attend
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;