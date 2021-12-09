import React from 'react';
import Search from '../components/search';
import Result from '../components/results';

const Homepage = () => {
    return (
        <React.Fragment>
            <h1> Homepage </h1>
            <Search/>
            <Result/>
        </React.Fragment>
    );
} ;


export default Homepage;
