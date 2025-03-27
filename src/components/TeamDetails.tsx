import React from 'react'
import TeamDetailBtn from '@/components/TeamDetailBtn'

const TeamDetails = () => {
    return (
        <>
            <h1
                className="text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                mb-8 sm:mb-12 font-atelier
                bg-gradient-to-r from-[#FFFBF0] via-[#EAE3BA] to-[rgba(234,227,186,0.3)]
                bg-clip-text text-transparent
                drop-shadow-lg select-none mt-20"
            >
                Core Teams
            </h1>
            <TeamDetailBtn/>
        </>
    )
}

export default TeamDetails
