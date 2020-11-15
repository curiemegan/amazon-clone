import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image'
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/MzllYzFlMWMt/MzllYzFlMWMt-NTVkNzQxZWYt-w3000._CB418095226_.jpg"
                    alt=""
                />

                <div className="home_row">
                <Product 
                    id="12321341"
                    title='The lean startup' 
                    price={29.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
                    rating={5}
                />
                <Product
                    id="49538094" 
                    title='Keywood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl' 
                    price={239.0} 
                    image="https://images-na.ssl-images-amazon.com/images/I/61etD4-IrPL._AC_SL1200_.jpg"
                    rating={4}
                />
                </div>

                <div className="home_row">
                <Product 
                    id="4903850"
                    title="Samsung Galaxy Watch (42mm, GPS, Bluetooth) – Midnight Black (US Version)"
                    price={169.99} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71InJh4LIQL._AC_SL1500_.jpg"
                    rating={4}
                />
                <Product 
                    id="23445930"
                    title="Echo (3rd Gen)- Smart speaker with Alexa- Charcoal"
                    price={98.99} 
                    image="https://m.media-amazon.com/images/I/613xRVXsMzL._AC_SL1000_.jpg"
                    rating={5}
                />
                <Product 
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Space Gray (4th Generation)"
                    price={949.00} 
                    image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
                    rating={4}
                />
                </div>

                <div className="home_row">
                <Product 
                    id="4903850"
                    title="SAMSUNG LC49RG90SSNXZA 49-Inch CRG9 Curved Gaming Monitor, Black"
                    price={1134.06} 
                    image="https://images-na.ssl-images-amazon.com/images/I/71916r38cNL._AC_SL1500_.jpg"
                    rating={4}
                />
                </div>
            </div>
        </div>
    )
}

export default Home