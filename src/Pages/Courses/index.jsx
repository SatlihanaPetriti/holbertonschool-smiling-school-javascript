import MainNavbar from "../../Components/NavBar/MainNavbar";
import CoursesP from "../../Components/Courses/courses";
import Footer from "../../Components/Footer/footer";
import VideoPart from "../../Components/Courses/videos";
const Courses = () => {
    return (
        <>
            <div className="bg-course text-white">
                <MainNavbar />
                <CoursesP />
            </div>
            <VideoPart />
            <Footer />
        </>
    );
};

export default Courses;
