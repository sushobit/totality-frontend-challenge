import im from './images/1.jpg'
import im3 from './images/3.jpg'
import imgr from './images/dfd.webp'
import img5 from './images/pg-in-andheri-east.jpg'
import img6 from './images/pg-in-andheri-west.jpg'
import ismfs from './images/proddduct-jpeg.jpg'
import aoda  from './images/thumb_large_22ac99b6-c463-4333-8314-93f03a18ebc6.jpg'
import dsoidbs from './images/negaxspqxizx12e6ztlj.webp'
import dblbed from './images/double-bed-rooms-rental-services-500x500.webp'
import zolo from './images/Zolo_Tarun_PG_in_Andheri_East_.webp'
import wtj from './images/wtjblhhfnmfgi2taiyv4.webp'
import uee from './images/uee458402956M-1715868990308.webp'
import inder from './images/ande495290362M-1717066163469.jpg'
import hjtw from './images/hjtw99652541M-1718956451375.jpg'
import pj from './images/pg-in-santacruz-east.jpg'
import mpp from './images/mppg-in-heddeweast.jpg'
import bbpg from './images/bbpg-in-santacruz-east.jpg'
import leue from './images/leue27e8ec2c2017e8f50da4e12ff_265672_73223_medium.jpg'
import rewq from './images/rewqaae8560190aaee6d610097_2090_79721_medium.jpg'
import bhde from './images/bhdepartment-for-rent-santacruz_east-Mumbai-hall.jpg'

const properties = [
    { 
        id: 1, 
        image: im, 
        title: 'Luxury Apartment', 
        description: 'A beautiful apartment in the city center.', 
        price: 12999,
        location: 'City Center',
        bedrooms: 2,
        bathrooms: 1,
        area: '100 sqm',
        amenities: ['Air Conditioning', 'Wi-Fi', 'Parking'],
        rating: 4.5,
        reviews: 28
    },
    { 
        id: 2, 
        image: im3, 
        title: 'Cozy Cottage', 
        description: 'A cozy cottage in the countryside.', 
        price: 6999,
        location: 'Countryside',
        bedrooms: 1,
        bathrooms: 1,
        area: '60 sqm',
        amenities: ['Fireplace', 'Garden'],
        rating: 4.2,
        reviews: 12
    },
    { 
        id: 3, 
        image: imgr, 
        title: 'Modern Studio', 
        description: 'A modern studio with all features.', 
        price: 18099,
        location: 'Downtown',
        bedrooms: 1,
        bathrooms: 1,
        area: '50 sqm',
        amenities: ['Gym', 'Pool', 'Security'],
        rating: 4.8,
        reviews: 35
    },
    { 
        id: 4, 
        image: img5, 
        title: 'Beachside Villa', 
        description: 'A stunning villa with ocean views.', 
        price: 29990,
        location: 'Beachfront',
        bedrooms: 3,
        bathrooms: 2,
        area: '180 sqm',
        amenities: ['Private Beach Access', 'Terrace', 'BBQ Area'],
        rating: 4.9,
        reviews: 42
    },
    { 
        id: 5, 
        image: img6, 
        title: 'Mountain Cabin', 
        description: 'A rustic cabin in the mountains.', 
        price: 90999,
        location: 'Mountains',
        bedrooms: 1,
        bathrooms: 1,
        area: '70 sqm',
        amenities: ['Wood Stove', 'Hiking Trails'],
        rating: 4.0,
        reviews: 8
    },
    { 
        id: 6, 
        image: aoda, 
        title: 'Urban Loft', 
        description: 'An industrial-style loft in the heart of the city.', 
        price: 13999,
        location: 'City Center',
        bedrooms: 1,
        bathrooms: 1,
        area: '80 sqm',
        amenities: ['Exposed Brick Walls', 'City Views'],
        rating: 4.6,
        reviews: 19
    },
    { 
        id: 7, 
        image: dsoidbs, 
        title: 'Country House', 
        description: 'A charming house in the countryside.', 
        price: 99909,
        location: 'Rural Area',
        bedrooms: 2,
        bathrooms: 1,
        area: '120 sqm',
        amenities: ['Garden', 'Peaceful Surroundings'],
        rating: 4.3,
        reviews: 14
    },
    { 
        id: 8, 
        image: ismfs, 
        title: 'Penthouse Suite', 
        description: 'A luxurious penthouse with panoramic views.', 
        price: 30299,
        location: 'City Center',
        bedrooms: 3,
        bathrooms: 2,
        area: '200 sqm',
        amenities: ['Roof Terrace', 'Jacuzzi', 'High Security'],
        rating: 4.9,
        reviews: 55
    },
    { 
        id: 9, 
        image: dblbed, 
        title: 'Lakefront Cabin', 
        description: 'A cabin right by the lake.', 
        price: 11019,
        location: 'Lakefront',
        bedrooms: 2,
        bathrooms: 1,
        area: '90 sqm',
        amenities: ['Lake Access', 'Boat Dock'],
        rating: 4.4,
        reviews: 23
    },
    { 
        id: 10, 
        image: zolo, 
        title: 'Downtown Studio', 
        description: 'A stylish studio in downtown.', 
        price: 11025,
        location: 'Downtown',
        bedrooms: 1,
        bathrooms: 1,
        area: '40 sqm',
        amenities: ['Central Location', 'Modern Decor'],
        rating: 4.7,
        reviews: 30
    },
    { 
        id: 11, 
        image: wtj, 
        title: 'Historic Mansion', 
        description: 'A beautiful mansion with historical charm.', 
        price: 22780,
        location: 'Historic District',
        bedrooms: 4,
        bathrooms: 3,
        area: '300 sqm',
        amenities: ['Antique Furnishings', 'Gardens'],
        rating: 4.8,
        reviews: 38
    },
    { 
        id: 12, 
        image: uee, 
        title: 'Chalet in the Alps', 
        description: 'A cozy chalet in the Alps.', 
        price: 19780,
        location: 'Alpine Region',
        bedrooms: 2,
        bathrooms: 1,
        area: '80 sqm',
        amenities: ['Mountain Views', 'Ski Access'],
        rating: 4.6,
        reviews: 20
    },
    { 
        id: 13, 
        image: inder, 
        title: 'Oceanfront Condo', 
        description: 'A condo with direct ocean access.', 
        price: 33209,
        location: 'Oceanfront',
        bedrooms: 2,
        bathrooms: 2,
        area: '120 sqm',
        amenities: ['Balcony', 'Swimming Pool', 'Beach Access'],
        rating: 4.7,
        reviews: 45
    },
    { 
        id: 14, 
        image: hjtw, 
        title: 'Suburban Home', 
        description: 'A spacious home in the suburbs.', 
        price: 12005,
        location: 'Suburbs',
        bedrooms: 3,
        bathrooms: 2,
        area: '150 sqm',
        amenities: ['Large Yard', 'Family Friendly'],
        rating: 4.5,
        reviews: 26
    },
    { 
        id: 15, 
        image: pj, 
        title: 'City Apartment', 
        description: 'An apartment with city views.', 
        price: 61599,
        location: 'City Center',
        bedrooms: 1,
        bathrooms: 1,
        area: '60 sqm',
        amenities: ['City Views', 'Public Transport Nearby'],
        rating: 4.3,
        reviews: 18
    },
    { 
        id: 16, 
        image: mpp, 
        title: 'Desert Retreat', 
        description: 'A retreat in the desert.', 
        price: 49999,
        location: 'Desert',
        bedrooms: 2,
        bathrooms: 1,
        area: '100 sqm',
        amenities: ['Desert Views', 'Tranquility'],
        rating: 4.2,
        reviews: 15
    },
    { 
        id: 17, 
        image: bbpg, 
        title: 'Eco-Friendly Cabin', 
        description: 'A green cabin with sustainable features.', 
        price: 31990,
        location: 'Rural Area',
        bedrooms: 1,
        bathrooms: 1,
        area: '50 sqm',
        amenities: ['Solar Panels', 'Recycling Facilities'],
        rating: 4.6,
        reviews: 22
    },
    { 
        id: 18, 
        image: leue, 
        title: 'Ski Resort Lodge', 
        description: 'A lodge at a popular ski resort.', 
        price: 76360,
        location: 'Ski Resort',
        bedrooms: 3,
        bathrooms: 2,
        area: '120 sqm',
        amenities: ['Ski-in/Ski-out', 'Fireplace', 'Sauna'],
        rating: 4.9,
        reviews: 48
    },
    { 
        id: 19, 
        image: rewq, 
        title: 'Historic Inn', 
        description: 'An inn with historical significance.', 
        price: 13990,
        location: 'Historic Area',
        bedrooms: 5,
        bathrooms: 5,
        area: '400 sqm',
        amenities: ['Antique Decor', 'Fine Dining'],
        rating: 4.7,
        reviews: 36
    },
    { 
        id: 20, 
        image: bhde, 
        title: 'Luxury Beddroom', 
        description: 'A luxurious yacht for a unique stay.', 
        price: 59900,
        location: 'Marina',
        bedrooms: 3,
        bathrooms: 2,
        area: '200 sqm',
        amenities: ['Deck Jacuzzi', 'Captain and Crew'],
        rating: 4.9,
        reviews: 60
    }
];


export default properties;