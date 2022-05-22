import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Hardwares from './Hardwares';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Hardwares />
            <BusinessSummary />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;