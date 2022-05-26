import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Hardwares from './Hardwares';
import JoinNewsLetter from './JoinNewsLetter';
import Reviews from './Reviews';
import WhyChoseUs from './WhyChoseUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <Hardwares />
            <BusinessSummary />
            <Reviews />
            <WhyChoseUs />
            <JoinNewsLetter />
            <Footer />
        </div>
    );
};

export default Home;