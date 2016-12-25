import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap"
import "jquery"

import MainCard from './components/cards/MainCard';


if (DashboardModule && DashboardModule.cards) {
    ReactDOM.render(
        <MainCard  cards={DashboardModule.cards}/>,
        document.getElementById("main-section")
    );
}
