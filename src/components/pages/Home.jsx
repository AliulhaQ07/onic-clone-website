import banner1 from "/src/assets/bannerImages/banner1.webp";
import Slider from "../cardsComponents/Slider.jsx";
import banner2 from "/src/assets/bannerImages/banner2.jpeg";
import Button from "../ctaComponents/Button.jsx";
import Card from "../cardsComponents/Card.jsx";
import Accordion from "../cardsComponents/Accordian.jsx";
import FramerButton from "../ctaComponents/FramerButton.jsx";
import VerticalSlider from "../cardsComponents/VerticalSlider.jsx";

import mockup from "/src/assets/sliderimages/mockup.jpg";
import mockup2 from "/src/assets/sliderimages/mockup2.jpg";
import mockup3 from "/src/assets/sliderimages/mockup3.jpg";
import applestore from "/src/assets/sliderimages/assetapple.svg";
import androidstore from "/src/assets/sliderimages/assetandroid.svg";

const Home = () => {
  // images for slider
  const images = [
    { url: banner1, altText: "BANNER 1" },
    { url: banner2, altText: "BANNER 2" },
  ];

  // list for cards
  const myList = [
    {
      index: 1,
      value: "In-App Mobile Number Port-In",
    },
    {
      index: 2,
      value: "In-App Preferred nuber selection",
    },
    {
      index: 3,
      value: "30-day, high-speed 4G plan",
    },
    {
      index: 4,
      value: "Free eSIM or Physical SIM",
    },
    {
      index: 5,
      value: "Rollover unused data",
    },
    {
      index: 6,
      value: "No Hidden Charges",
    },
    {
      index: 7,
      value: "Free home delivery",
    },
  ];

  // accordian list
  const accordionItems = [
    {
      title: "ONIC IS UNLIMITED",
      content:
        "Enjoy boundless communication with unlimited calls to any network and expansive data plans tailored to your" +
        " needs.",
    },
    {
      title: "ONIC IS SIMPLE",
      content:
        "Take control with our 'always-on' digital concierge, offering 24/7 accessibility and seamless support.",
    },
    {
      title: "ONIC IS TRANSPARENT",
      content:
        "Experience fairness in every transaction. No hidden charges or surprises—just straightforward and honest billing.",
    },
    {
      title: "ONIC IS MODERN",
      content:
        "Unlock exclusive lifestyle benefits like discounted food delivery from Foodpanda and discounted rides with Careem.",
    },
  ];

  const slidesData = [
    {
      heading: "HOW TO GET YOUR ONIC SIM",
      subheading: "1. DOWNLOAD APP",
      description: "Download the Onic app to start the journey with us.",
      image: mockup,
      imageAlt: "Mockup of Onic app",
      storeLinks: [
        { url: "#", image: applestore, alt: "Apple Store" },
        { url: "#", image: androidstore, alt: "Android Store" },
      ],
      footerText:
        "Doorstep SIM Delivery Is Available In The Following Cities: Karachi, Lahore, Islamabad, Rawalpindi, Quetta, Faisalabad, Hyderabad, Sialkot, Sargodha, Rahim Yar Khan.",
    },
    {
      heading: "HOW TO GET YOUR ONIC SIM",
      subheading: "2. BUY PLAN",
      description:
        "Choose your plan, keep your number or select a new number. Order the SIM card with ONIC and" +
        " we'll deliver it right to your door. Make sure you're there in person to receive your SIM from the" +
        " delivery rider.",
      image: mockup2,
      imageAlt: "Second slide image",
      storeLinks: [
        { url: "#", image: applestore, alt: "Apple Store" },
        { url: "#", image: androidstore, alt: "Android Store" },
      ],
      footerText:
        "Doorstep SIM Delivery Is Available In The Following Cities: Karachi, Lahore, Islamabad, Rawalpindi, Quetta, Faisalabad, Hyderabad, Sialkot, Sargodha, Rahim Yar Khan.",
    },
    {
      heading: "HOW TO GET YOUR ONIC SIM",
      subheading: "2. DELIVERY & ACTICATION",
      description:
        "Switch on to your plan: its simple! Be there in person to meet your rider with required documents," +
        " collect your SIM card or receive an email address with your QR code",
      image: mockup3,
      imageAlt: "Second slide image",
      storeLinks: [
        { url: "#", image: applestore, alt: "Apple Store" },
        { url: "#", image: androidstore, alt: "Android Store" },
      ],
      footerText:
        "Doorstep SIM Delivery Is Available In The Following Cities: Karachi, Lahore, Islamabad, Rawalpindi, Quetta, Faisalabad, Hyderabad, Sialkot, Sargodha, Rahim Yar Khan.",
    },
  ];

  return (
    <>
      <div className="container mx-auto h-auto w-full relative overflow-hidden p-2">
        {/*SLIDER :: SECTION 1 */}
        <div className=" flex  h-auto w-full box-border">
          <Slider images={images} />
        </div>

        <div className="flex flex-col my-4 gap-4 ">
          <div className="flex items-center justify-start gap-6 ">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl uppercase font-bold">
              Get on onic
            </h1>

            <Button buttonText={"Order SIM"} />
          </div>

          <p className="text-gray-600  text-lg">
            Unlock a world of independence. Skip the hassle as we deliver your
            SIM straight to your door. Enjoy limitless data plans, a seamless
            app experience, and exciting lifestyle perks. Join the movement and
            celebrate your independence with The Independence Network.
          </p>

          <Button buttonText={"SEE PLANS"} url={"#plans"} />
        </div>

        {/*SHOWING PLANS CARD ON MAIN SCREEN :: SECTION 2 */}
        <div
          id="#plans"
          className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 bg- "
        >
          <Card
            plan={"EPIC PLAN"}
            price={" 30GB for Rs. 1090"}
            packageBenifit={"Unlimited Calls and SMS"}
            myList={myList}
            // titleBg={"bg-green-500"}
            titleBg={"bg-teal-400"}
          />

          <Card
            plan={"ICONIC PLAN"}
            price={" 100GB for Rs. 1490"}
            packageBenifit={"Unlimited Calls and SMS"}
            myList={myList}
            titleBg={"bg-amber-400"}
          />

          <Card
            plan={"LIMITLESS PLAN"}
            price={" 200GB for Rs. 1690"}
            packageBenifit={"Unlimited Calls and SMS"}
            myList={myList}
            titleBg={"bg-sky-400"}
          />
        </div>

        {/*  ACCORDIAN SECTION :: SECTION 3 */}
        <div>
          <Accordion items={accordionItems} />
        </div>

        {/*  ACCORDIAN VERTICAL SECTION :: SECTION 4 */}
        <div>
          <VerticalSlider slides={slidesData} />
        </div>
      </div>
    </>
  );
};
export default Home;
