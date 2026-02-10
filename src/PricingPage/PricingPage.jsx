import MainNavbar from "../components/NavBar/MainNavbar.jsx";
import Pricing from "../components/Pricing/pricing";
import Testimonial from "../components/Testimonial/testimonial.jsx";
import Footer from "../components/Footer/footer";
import FaqSection from "../components/Pricing/faq.jsx";

const PricingPage = () => {
    return (
        <>
            <div className="bg-pricing text-white">
            <MainNavbar />
            <Pricing />
            </div>
            <Testimonial />
            <FaqSection />
            <Footer />
        </>
    );
};

export default PricingPage;
