// Import images
import spaceImage from "/src/assets/portfolioimages/space.png";
import image1 from "/src/assets/portfolioimages/image1.png";
import image2 from "/src/assets/portfolioimages/image2.png";
import image3 from "/src/assets/portfolioimages/image3.png";
import image4 from "/src/assets/portfolioimages/image4.png";
import starsIcon from "/src/assets/portfolioimages/ratings.png";

// Portfolio data
const portfolioData = [
    { id: 1, image: image1, title: "Car rental website", position: "UI/UX Web design", category: "Web Design" },
    { id: 2, image: image2, title: "NFT website", position: "UI/UX Web design", category: "Web Design" },
    { id: 3, image: image3, title: "My Watch", position: "UI/UX Web design", category: "App Design" },
    { id: 4, image: image4, title: "Admin Dashboard", position: "UI/UX Web design", category: "Web Design" },
];

// Testimonial data
const testimonialData = [
    {
      id: 1,
      image: spaceImage,
      title: "Jane Cooper",
      location: "Abuja, Nigeria",
      testimony: "“I had an incredible experience renting from Rent Cars! The process was seamless, the car was in pristine condition, and the customer service was top-notch...”",
      rate: starsIcon,
    },
    {
      id: 2,
      image: spaceImage,
      title: "Leslie Alexander",
      location: "Lagos, Nigeria",
      testimony: "“I was really impressed with the level of service I received from this car rental company. The process was smooth and easy, and the car I rented was in excellent condition...”",
      rate: starsIcon,
    },
    {
      id: 3,
      image: spaceImage,
      title: "Bobbie Robertson",
      location: "Port Harcourt, Nigeria",
      testimony: "“Rent Cars truly stands out. From their convenient online booking system to their prompt pickup and drop-off service, everything was convenient and stress-free.”",
      rate: starsIcon,
    },
    {
      id: 4,
      image: spaceImage,
      title: "Eleanor Pena",
      location: "Ibadan, Nigeria",
      testimony: "“Artchain NFT exceeded my expectations. The entire process, from acquiring to analyzing transactions, was seamless and secure. The platform's transparency and ease of use have made me a loyal user.”",
      rate: starsIcon,
    },
    {
      id: 5,
      image: spaceImage,
      title: "Michael Edwards",
      location: "Enugu, Nigeria",
      testimony: "“WeCare truly stands out in the healthcare space. Their meticulous attention to detail and the precision of their transaction analysis have made a significant impact on our operations. Highly recommended!”",
      rate: starsIcon,
    },
];

// Exporting the data
export { portfolioData, testimonialData };
