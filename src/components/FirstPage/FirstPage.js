import React from 'react';
import FifthSector from './FifthSector/FifthSector';
import FirstSector from './FirstSector/FirstSector';
import FourthSector from './FourthSector/FourthSector';
import SecondSector from './SecondSector/SecondSector';
import ThirdSector from './ThirdSector/ThirdSector';

const MainPage = props => {
    return (
        <>
            <FirstSector/>
            <SecondSector/>
            <ThirdSector/>
            <FourthSector/>
            <FifthSector/>
        </>
    );
};

export default MainPage;