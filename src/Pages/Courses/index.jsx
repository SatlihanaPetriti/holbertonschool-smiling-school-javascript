import MainNavbar from "../../Components/NavBar/MainNavbar";
import CoursesP from "../../Components/Courses/courses";
import Footer from "../../Components/Footer/footer";
import VideoPart from "../../Components/Courses/videos";
import VideoFilter from "../../Components/Courses/sortby";


const Courses = () => {
    return (
        <>
            <div className="bg-course text-white">
                <MainNavbar />
                <CoursesP />
            </div>
            <VideoFilter />
            <VideoPart />
            <Footer />
        </>
    );
};

export default Courses;
