import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Hardwares from './Hardwares';
import JoinNewsLetter from './JoinNewsLetter';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <Banner />
            <Hardwares />
            <BusinessSummary />
            <Reviews />
            <JoinNewsLetter />
            <Footer />
        </div>
    );
};

export default Home;