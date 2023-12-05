import { LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineInfoCircle, AiOutlineUser, AiOutlineCompass } from 'react-icons/ai';
import { MdOutlineMovieFilter, MdOutlineStarRate } from 'react-icons/md';
import { PiUsersBold } from 'react-icons/pi';
import { RiMovie2Line, RiSlideshow3Line } from "react-icons/ri";
const items = [
    {
        to: 'dashboard',
        label: 'Dashboard',
        icon: <LuLayoutDashboard size={25} />,
        subnavs: [],
    },
    {
        to: 'users',
        label: 'Users',
        icon: <PiUsersBold  size={25} />,
        subnavs: [],
    },
    {
        to: 'movies',
        label: 'Movies',
        icon: <MdOutlineMovieFilter size={25} />,
        subnavs: [],
    },
    {
        to: 'tv-shows',
        label: 'Tv Shows',
        icon: <RiSlideshow3Line  size={25} />,
        subnavs: [],
    },
    {
        to: 'genres',
        label: 'Genres',
        icon: <RiMovie2Line  size={25} />,
        subnavs: [],
    },
    {
        to: 'cast',
        label: 'Casts',
        icon: <AiOutlineUser  size={25} />,
        subnavs: [],
    },
    {
        to: 'ratings',
        label: 'Ratings',
        icon: <MdOutlineStarRate  size={25} />,
        subnavs: [],
    },
    {
        to: 'document-library',
        label: 'Document Library',
        icon: <AiOutlineInfoCircle size={25} />,
        subnavs: [],
    },
    {
        to: 'student-list',
        label: 'Student Record',
        icon: <AiOutlineUser size={25} />,
        subnavs: [
            {
                to: 'student-record',
                label: 'Record',
                icon: <AiOutlineUser size={1} />,
            },
            {
                to: 'student-list',
                label: 'List of Students',
                icon: <AiOutlineUser size={1} />,
            },
            {
                to: 'enrollment-document',
                label: 'Enrollment Documents',
                icon: <AiOutlineUser size={1} />,
            },
        ],
    },
    {
        to: 'campus-content',
        label: 'Campus Content',
        icon: <AiOutlineCompass size={25} />,
        subnavs: [],
    },
];




export { items };
