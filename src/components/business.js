import React from 'react';
import ReactDOM from 'react-dom';

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
};

function Business (){
    return (
        <div>
            <img />
            <section>
                <h3 className="b_name" id="name">
                    Name
                </h3>
                <span id="address">
                    <p id="address1"></p>
                    <p id="city"></p>
                    <p id="state"></p>
                    <p id="zipcode"></p>
                </span>
                <span>
                    <p id="category"></p>
                    <p id="rating"></p>
                    <p id="rating"></p>
                    <p id="review"></p>
                </span>
            </section>
        </div>
    )
}