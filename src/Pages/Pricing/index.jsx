import MainNavbar from "../../Components/NavBar/MainNavbar";
import PricingComponent from "../../Components/Pricing/pricing";
import Testimonial from "../../Components/Testimonial/testimonial";
import Footer from "../../Components/Footer/footer";
import FaqSection from "../../Components/Pricing/faq";


const PricingPage = () => {
    return (
        <>
            <div className="bg-pricing text-white">
                <MainNavbar />
                <PricingComponent />
            </div>
            <Testimonial />
            <FaqSection />
            <Footer />
        </>
    );
};

export default PricingPage;
