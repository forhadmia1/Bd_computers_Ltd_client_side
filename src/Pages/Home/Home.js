import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';

const Home = () => {
    return (
        <div>
            <Banner />
            <BusinessSummary />
            <Footer />
        </div>
    );
};

export default Home;