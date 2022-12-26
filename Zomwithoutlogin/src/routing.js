import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './component/Home/Home';
import Listing from './component/Listing/listing';
import RestDetails from './component/details/restDetails';
import PlaceOrder from './component/orders/placeOrder';
import ViewOrder from './component/orders/viewOrder';

const Routing = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Route exact path="/" component={Home}/>
            <Route path="/listing/:mealId" component={Listing}/>
            <Route path="/details" component={RestDetails}/>
            <Route path="/placeOrder/:restName" component={PlaceOrder}/>
            <Route path="/viewBooking" component={ViewOrder}/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing