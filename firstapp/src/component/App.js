import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ProductDisplay from './ProductDisplay';

const App = () => {
    return(
        <div>
            <Header/>
            <ProductDisplay/>
            <Footer year="2022" month="Dec"/>
        </div>
    )
}

export default App;