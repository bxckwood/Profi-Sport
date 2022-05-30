import React from 'react';
import FirstSector from './FirstSector/FirstSector';
import SecondSector from './SecondSector/SecondSector';

const MainPage = props => {
    return (
        <div>
            <FirstSector/>
            <SecondSector/>
        </div>
    );
};

export default MainPage;