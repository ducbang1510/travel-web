import React from 'react';
// import AboutSection from '../components/home/AboutSection';
// import DealsSection from '../components/home/DealsSection';
// import TestimonialSection from '../components/home/TestimonialSection';
// import FunfactSection from '../components/home/FunfactSection';
// import MapSection from '../components/home/MapSection';
// import VideoSection from '../components/home/VideoSection';
import FeatureSection from '../components/home/FeatureSection';
import NewSection from '../components/home/NewSection';
import PlaceSection from '../components/home/PlaceSection';
import TourSection from '../components/home/TourSection';
import BannerSection from '../components/home/BannerSection';

function Home(props) {
    return (
        <>
                <BannerSection/>
                <FeatureSection/>
                {/* <AboutSection/> */}
                <TourSection/>
                {/* <DealsSection/> */}
                <PlaceSection/>
                {/* <MapSection/>
                <FunfactSection/>
                <TestimonialSection/>
                <VideoSection/> */}
                <NewSection/>
        </>
    );
}

export default Home;