import React from 'react';
import FifthSector from './FifthSector/FifthSector';
import FirstSector from './FirstSector/FirstSector';
import FourthSector from './FourthSector/FourthSector';
import SecondSector from './SecondSector/SecondSector';
import SixthPage from './SixthPage/SixthPage';
import ThirdSector from './ThirdSector/ThirdSector';

const MainPage = props => {
    return (
        <>
            <FirstSector/>
            <SecondSector/>
            <ThirdSector/>
            <FourthSector/>
            <FifthSector/>
            <SixthPage/>
        </>
    );
};

export default MainPage;