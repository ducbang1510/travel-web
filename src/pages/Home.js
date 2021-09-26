import React from 'react';
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
                <TourSection/>
                <PlaceSection/>
                <NewSection/>
        </>
    );
}

export default Home;