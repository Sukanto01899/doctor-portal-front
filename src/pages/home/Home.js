import React from 'react';
import Banner from './Banner';
import Info from './Info';
import Service from './service/Service';
import Tearms from './Tearms';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Service/>
            <Tearms/>
        </div>
    );
};

export default Home;