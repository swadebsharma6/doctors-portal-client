import clock from '../assets/icons/clock.svg';
import marker from '../assets/icons/marker.svg';
import phone from '../assets/icons/phone.svg';

export const cardsData = [
    {
        id: 1,
        title:"Opening Hours",
        description: "Open 9:00 am to %:00 pm",
        icon: clock,
        bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
    {
        id: 2,
        title:"Visits Our Location",
        description: "Brooklyn, NY 10036, United States",
        icon: marker,
        bgClass: 'bg-neutral'
    },
    {
        id: 3,
        title:"Contact Us Now",
        description: "+000 123 456789",
        icon: phone,
        bgClass: 'bg-gradient-to-r from-primary to-secondary'
    },
]