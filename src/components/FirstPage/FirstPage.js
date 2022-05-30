import React from 'react';
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
        </>
    );
};

export default MainPage;