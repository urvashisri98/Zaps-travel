import Package1 from '../images/package1.png';
import Package2 from '../images/package2.png';
import Article1 from '../images/article1.png';
import Article2 from '../images/article2.png';
import Article3 from '../images/article3.png';
import Flag from '../images/flag.svg';
import Location from '../images/location.svg';
import Map from '../images/map.svg';
import Like from '../images/like.svg';
import Offer1 from '../images/offer1.png';
import Offer2 from '../images/offer2.png';
import Offer3 from '../images/offer3.png';
import Indigo from '../images/indigo.png';
import Akasa from '../images/akasa.png';
import AirIndia from '../images/air-india.png';

export const flightSourceCitiesData = [
  {
    id: 1,
    slug: 'chandigarh',
    name: 'Chandigarh, India',
    airportCode: 'IXC',
    airportName: 'Chandigarh Airport'
  },
  {
    id: 2,
    slug: 'mumbai',
    name: 'Mumbai, India',
    airportCode: 'BOM',
    airportName: 'Chatraparti Shivaji International Airport'
  },
  {
    id: 3,
    slug: 'newdelhi',
    name: 'New Delhi, India',
    airportCode: 'DEL',
    airportName: 'Indira Gandhi International Airport'
  },
  {
    id: 4,
    slug: 'bangkok',
    name: 'Bangkok, Thailand',
    airportCode: 'BKK',
    airportName: 'Bangkok',
  },
  {
    id: 5,
    slug: 'pune',
    name: 'Pune, India',
    airportCode: 'PNQ',
    airportName: 'Pune Airport'
  },
  {
    id: 6,
    slug: 'newdelhi',
    name: 'New Delhi, India',
    airportCode: 'DEL',
    airportName: 'Indira Gandhi International Airport'
  },
];

export const flightdestinationCitiesData = [
  {
    id: 1,
    slug: 'chandigarh',
    name: 'Chandigarh, India',
    airportCode: 'IXC',
    airportName: 'Chandigarh Airport'
  },
  {
    id: 2,
    slug: 'mumbai',
    name: 'Mumbai, India',
    airportCode: 'BOM',
    airportName: 'Chatraparti Shivaji International Airport'
  },
  {
    id: 3,
    slug: 'newdelhi',
    name: 'New Delhi, India',
    airportCode: 'DEL',
    airportName: 'Indira Gandhi International Airport'
  },
  {
    id: 4,
    slug: 'bangkok',
    name: 'Bangkok, Thailand',
    airportCode: 'BKK',
    airportName: 'Bangkok',
  },
  {
    id: 5,
    slug: 'pune',
    name: 'Pune, India',
    airportCode: 'PNQ',
    airportName: 'Pune Airport'
  },
  {
    id: 6,
    slug: 'newdelhi',
    name: 'New Delhi, India',
    airportCode: 'DEL',
    airportName: 'Indira Gandhi International Airport'
  },
];

export const flightClassData = {
  economy: 'Economy',
  premium: 'Premium Economy', 
  business: 'Business', 
  first: 'First Class'
};

export const flightTravelTypeData = {
  oneWay: 'One Way',
  roundTrip: 'Round Trip',
  multiCity: 'Multi-City'
};

export const flightTypeData = {
  nonStop: 'Non Stop',
};

export const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const dayFullNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const adultsCountData = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const childrenCountData = [0, 1, 2, 3, 4, 5, 6];

export const InfantsCountData = [0, 1, 2, 3, 4, 5, 6];

export const packagesData = [
  {
    id: 1,
    image: Package1,
    place: 'Kerala',
    content: 'Premium 5N Trip to kerala',
    price: '₹ 34,350',
    info: {
      title: 'Premium 5N Trip to kerala',
      metaTitle: 'Plusieurs variations de Lorem Ipsum peuvent être  ici ou là, mais la majeure partie dentre elles par',
      totalFlights: 2,
      totalHotels: 2,
      totalActivities: 2,
      totalTransfers: 2,
      itinerary: [
        {
          id: 1,
          days: 1,
          place: 'Cochin',
        },
        {
          id: 2,
          days: 4,
          place: 'Munnar',
        },
        {
          id: 3,
          days: 3,
          place: 'Alleppey',
        }
      ],
      highlights: [
        'Local Meal',
        'Dutch Palace'
      ],
      prevPrice: '₹ 45,279',
      offeredPrice: '₹ 34,350'
    }
  },
  {
    id: 2,
    image: Package2,
    place: 'Goa',
    content: 'Premium 4N Trip to Goa',
    price: '₹ 34,350',
    info: {
      title: 'Premium 5N Trip to kerala',
      metaTitle: 'Plusieurs variations de Lorem Ipsum peuvent être  ici ou là, mais la majeure partie dentre elles par',
      totalFlights: 2,
      totalHotels: 2,
      totalActivities: 2,
      totalTransfers: 2,
      itinerary: [
        {
          id: 1,
          days: 1,
          place: 'Cochin',
        },
      ],
      highlights: [
        'Local Meal',
        'Dutch Palace',
        'Photography Session'
      ],
      prevPrice: '₹ 45,279',
      offeredPrice: '₹ 34,350'
    }
  },
  {
    id: 3,
    image: Package1,
    place: 'Kerala',
    content: 'Premium 4N Trip to Kerala',
    price: '₹ 34,350',
    info: {
      title: 'Premium 5N Trip to kerala',
      metaTitle: 'Plusieurs variations de Lorem Ipsum peuvent être  ici ou là, mais la majeure partie dentre elles par',
      totalFlights: 2,
      totalHotels: 2,
      totalActivities: 2,
      totalTransfers: 2,
      itinerary: [
        {
          id: 1,
          days: 1,
          place: 'Cochin',
        },
        {
          id: 2,
          days: 4,
          place: 'Munnar',
        },
      ],
      highlights: [
        'Local Meal',
        'Dutch Palace'
      ],
      prevPrice: '₹ 45,279',
      offeredPrice: '₹ 34,350'
    }
  },
];

export const recentArticlesData = [
  {
    id: 1,
    date: 'JUN 06',
    image: Article1,
    title: 'Tours',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,magna aliqua.',
  },
  {
    id: 2,
    date: 'JUN 06',
    image: Article2,
    title: 'Destination',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,magna aliqua.',
  },
  {
    id: 3,
    date: 'JUN 06',
    image: Article3,
    title: 'Travel',
    info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,magna aliqua.',
  },
];

export const travelPerfectionData = [
  {
    id: 1,
    svg: Flag,
    title: 'Tell Us What You Want To Do',
    info: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: 2,
    svg: Location,
    title: 'Share Your Travel Locations',
    info: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: 3,
    svg: Map,
    title: 'Share Your Travel Preference',
    info: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
  {
    id: 4,
    svg: Like,
    title: '100% Trusted Tour Agency',
    info: 'Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
  },
];

export const offersData = [
  {
    id: 1,
    image: Offer1,
    type: 'Flight',
    validDate: 'Valid till : 30th June, 2023',
    title: 'No Joining Fee & Enjoy 20% off on Hotel Booking',
    info: 'No Joining fee and get EaseMyTrip voucher* worth INR 500  with Standard Chartered EaseMy Trip Credit Card',
    couponCode: 'EZAPSCB'
  },
  {
    id: 2,
    image: Offer2,
    type: 'Hotel',
    validDate: 'Valid till : 30th June, 2023',
    title: 'Carry Extra Baggage @ 20%* Lower Prices!',
    info: 'Now purchase EXCESS BAGGAGE allowance in advance & save BIG bucks on your journey.',
    couponCode: 'BAGZPPRI'
  },
  {
    id: 3,
    image: Offer3,
    type: 'Flight',
    validDate: 'Valid till : 30th June, 2023',
    title: 'No Joining Fee & Enjoy 20% off on Hotel Booking',
    info: 'No Joining fee and get EaseMyTrip voucher* worth INR 500  with Standard Chartered EaseMy Trip Credit Card',
    couponCode: 'EZAPSCB'
  },
];

export const domesticSearchFlightData = [
  {
    id: 1,
    image: Akasa,
    airlineName: 'Akasa',
    airlineCode: 'QP-1109',
    departureTime: '08:35 PM',
    departureCityOrCountry: 'Mumbai',
    arrivalTime: '10:35 PM',
    arrivalCityOrCountry: 'Bangalore',
    totalTimeTaken: '02:00',
    flightType: 'Direct',
    price: '₹4,349'
  },
  {
    id: 2,
    image: AirIndia,
    airlineName: 'Air India', 
    airlineCode: 'QP-1109',
    departureTime: '08:35 PM',
    departureCityOrCountry: 'Mumbai',
    arrivalTime: '10:35 PM',
    arrivalCityOrCountry: 'Bangalore',
    totalTimeTaken: '02:00',
    flightType: 'Direct',
    price: '₹4,349'
  },
  {
    id: 3,
    image: Indigo,
    airlineName: 'Indigo',
    airlineCode: 'QP-1109',
    departureTime: '08:35 PM',
    departureCityOrCountry: 'Mumbai',
    arrivalTime: '10:35 PM',
    arrivalCityOrCountry: 'Bangalore',
    totalTimeTaken: '02:00',
    flightType: 'Direct',
    price: '₹4,349'
  },
];