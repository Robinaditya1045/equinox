import React from "react";
import Image from "next/image";
import People from "@/components/People";
import TeamDetails from "@/components/TeamDetails";
import { axiosCoordinators, Convenors, coordinators } from "@/constants/cordi";


const TeamsPage = () => {
    return (
        <div className="w-full min-h-screen bg-[#120303] flex flex-col items-center max-sm:pt-20 pt-32 relative">
            {/* Full Background Image */}
            <div className="fixed inset-0 z-0">
                <Image
                    src="/images/compass.png"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="fit"
                    quality={75}
                    priority
                    className="object-contain"
                />
            </div>
            
                <People people={axiosCoordinators} title="Axios Coordinators" />
            
            <People people={coordinators} title="Coordinators"/>
            <People people={Convenors} title="Convenors" />
            
            <TeamDetails/>
        </div>
    );
};

export default TeamsPage;

