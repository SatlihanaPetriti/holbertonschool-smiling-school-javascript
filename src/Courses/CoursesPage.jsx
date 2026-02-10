import MainNavbar from "../components/NavBar/MainNavbar.jsx";
import CoursesP from "../components/Courses/courses.jsx";
import Footer from "../components/Footer/footer.jsx";

const CoursesPage = () => {
    return (
        <>
            <div className="bg-course text-white">
                <MainNavbar />
                <CoursesP />
            </div>
            <Footer />
        </>
    );
};

export default CoursesPage;
