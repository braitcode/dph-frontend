// Import images
import spaceImage from "/src/assets/portfolioimages/space.png";
import image1 from "/src/assets/portfolioimages/image1.png";
import image2 from "/src/assets/portfolioimages/image2.png";
import image3 from "/src/assets/portfolioimages/image3.png";
import image4 from "/src/assets/portfolioimages/image4.png";
import booking from "/src/assets/portfolioimages/drbooking.png";
import food from "/src/assets/portfolioimages/food.png";
import edu from "/src/assets/portfolioimages/image4.png";
import hillhomes from "/src/assets/portfolioimages/hillhomes.png";
import curfo from "/src/assets/portfolioimages/curfolanding.png";
import saas from "/src/assets/portfolioimages/saas.png";
import culive from "/src/assets/portfolioimages/cullive med.png";
import buymenow from "/src/assets/portfolioimages/buymenow.png";
import kwity from "/src/assets/portfolioimages/kwity.png";
import insure from "/src/assets/portfolioimages/insure.png";
import furnitura from "/src/assets/portfolioimages/furniture.png";
import starsIcon from "/src/assets/portfolioimages/ratings.png";

// landing Portfolio data
const portfolioData = [
    { id: 1, image: image1, title: "Car rental website", position: "UI/UX Web design", category: "Web Design" },
    { id: 2, image: image2, title: "NFT website", position: "UI/UX Web design", category: "Web Design" },
    { id: 3, image: image3, title: "My Watch", position: "UI/UX Web design", category: "App Design" },
    { id: 4, image: image4, title: "Admin Dashboard", position: "UI/UX Web design", category: "Web Design" },
];

// Portfolio Page data
const portfolioPageData = [
    { id: 1, image: booking, title: "Dr.Booking App", type: "UI/UX mobile design", category: "App Design" },
    { id: 2, image: image2, title: "Artchain", type: "Web design", category: "Web Design" },
    { id: 3, image: food, title: "My Food Website", type: "Web design", category: "App Design" },
    { id: 4, image: edu, title: "Eduflex Learning", type: "UI/UX Mobile design", category: "App Design" },
    { id: 5, image: hillhomes, title: "HillHomes", type: "Web design", category: "Web Design" },
    { id: 6, image: curfo, title: "Curfo Landing Page", type: "Web design", category: "Web Design" },
    { id: 7, image: image3, title: "Watch Hub", type: "UI/UX Mobile design", category: "App Design" },
    { id: 8, image: saas, title: "Saas YTX", type: "Web app design", category: "Web Design" },
    { id: 9, image: culive, title: "Culive Med App", type: "UI/UX Web design", category: "Web Design" },
    { id: 10, image: image4, title: "Admin Dashboard", type: "Web app design", category: "Web Design" },
    { id: 11, image: image1, title: "Carrs.com", type: "Web design", category: "Web Design" },
    { id: 12, image: buymenow, title: "Buymenow", type: "UI/UX Mobile design", category: "App Design" },
    { id: 13, image: kwity, title: "Kwity SELAR", type: "UI/UX Mobile design", category: "App Design" },
    { id: 14, image: insure, title: "INSURE", type: "UI/UX Mobile design", category: "App Design" },
    { id: 15, image: furnitura, title: "Furnitura", type: "UI/UX Mobile design", category: "App Design" },
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
export { portfolioData, testimonialData, portfolioPageData };
