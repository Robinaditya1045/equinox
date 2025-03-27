import React from 'react'
import TeamDetailBtn from '@/components/TeamDetailBtn'

// Dummy data for different teams
const teamPeopleData = {
    'Corporate Relations': [
        { id: 1, name: 'John Smith', image: '/api/placeholder/400/400' },
        { id: 2, name: 'Emily Chen', image: '/api/placeholder/400/400' },
        { id: 3, name: 'Michael Rodriguez', image: '/api/placeholder/400/400' }
    ],
    'Public Relations': [
        { id: 4, name: 'Sarah Johnson', image: '/api/placeholder/400/400' },
        { id: 5, name: 'David Kim', image: '/api/placeholder/400/400' },
        { id: 6, name: 'Olivia Martinez', image: '/api/placeholder/400/400' }
    ],
    'Design': [
        { id: 7, name: 'Alex Wong', image: '/api/placeholder/400/400' },
        { id: 8, name: 'Emma Thompson', image: '/api/placeholder/400/400' },
        { id: 9, name: 'Lucas Garcia', image: '/api/placeholder/400/400' }
    ],
    'Development': [
        { id: 10, name: 'Ryan Lee', image: '/api/placeholder/400/400' },
        { id: 11, name: 'Sophie Anderson', image: '/api/placeholder/400/400' },
        { id: 12, name: 'Carlos Ramirez', image: '/api/placeholder/400/400' }
    ],
    'HOF': [
        { id: 13, name: 'Elena Petrova', image: '/api/placeholder/400/400' },
        { id: 14, name: 'Marcus Williams', image: '/api/placeholder/400/400' },
        { id: 15, name: 'Isabella Rossi', image: '/api/placeholder/400/400' }
    ],
    'Technical': [
        { id: 16, name: 'Aiden Park', image: '/api/placeholder/400/400' },
        { id: 17, name: 'Natalie Brown', image: '/api/placeholder/400/400' },
        { id: 18, name: 'Felix Schmidt', image: '/api/placeholder/400/400' }
    ],
    'Content': [
        { id: 19, name: 'Zoe Taylor', image: '/api/placeholder/400/400' },
        { id: 20, name: 'Jack Harper', image: '/api/placeholder/400/400' },
        { id: 21, name: 'Maya Patel', image: '/api/placeholder/400/400' }
    ]
};

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
            <TeamDetailBtn />
        </>
    )
}

export default TeamDetails
