import React from 'react';
import Navbar from './Components/Navbar/navbar'
import Work from './Components/Work/work'
import Roadmap from './Components/RoadMap/Roadmap';
import Distributor from './Components/Distributor/Distributor';
import Faq from './Components/FAQ/faq';
import Footer from './Components/Footer/footer';
import Product from './Components/Products/products'

const App = () => {
    return (
        <div className="main">
            <Navbar/> 
            <Product/>
            <Work/>
            <Roadmap/>
            <Distributor/> 
            <Faq/>
            <Footer/> 
        </div>
    );
}

export default App;
