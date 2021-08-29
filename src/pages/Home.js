import React from 'react';
import AboutSection from '../components/home/AboutSection';
import BannerSection from '../components/home/BannerSection';
import DealsSection from '../components/home/DealsSection';
import FeatureSection from '../components/home/FeatureSection';
import FunfactSection from '../components/home/FunfactSection';
import MapSection from '../components/home/MapSection';
import NewSection from '../components/home/NewSection';
import PlaceSection from '../components/home/PlaceSection';
import TestimonialSection from '../components/home/TestimonialSection';
import TourSection from '../components/home/TourSection';
import VideoSection from '../components/home/VideoSection';

function Home(props) {
    return (
        <>
                <BannerSection/>
                <FeatureSection/>
                <AboutSection/>
                <TourSection/>
                <DealsSection/>
                <PlaceSection/>
                <MapSection/>
                <FunfactSection/>
                <TestimonialSection/>
                <VideoSection/>
                <NewSection/>
        </>
    );
}

export default Home;