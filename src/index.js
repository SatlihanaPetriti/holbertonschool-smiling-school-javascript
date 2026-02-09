import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header';
import Testimonial from './components/Testimonial/testimonial';
import reportWebVitals from './reportWebVitals';
import PopularTutorials from './components/Popular/popular_tutorial';
import Membership from './components/Membership/membership';
import LatestVideos from './components/LatestVideos/LVideo';
import Footer from './components/Footer/footer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header />
  <Testimonial />
  <PopularTutorials />
  <Membership />
   <LatestVideos />
  <Footer />
  </>
);
reportWebVitals();
