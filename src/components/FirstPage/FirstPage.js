import React from 'react';
import FirstSector from './FirstSector/FirstSector';
import SecondSector from './SecondSector/SecondSector';
import ThirdSector from './ThirdSector/ThirdSector';

const MainPage = props => {
    return (
        <>
            <FirstSector/>
            <SecondSector/>
            <ThirdSector/>
        </>
    );
};

export default MainPage;