
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

function Business(){
    return (
        <div>
            <img src={business.imageSrc}/>
            <section>
                <h3 className="b_name" id="name">
                    {business.name}
                </h3>
                <span id="address">
                    <p id="address1">{business.address}</p>
                    <p id="city">{business.city}</p>
                    <p id="state">{business.state}</p>
                    <p id="zipcode">{business.zipcode}</p>
                </span>
                <span>
                    <p id="category">{business.category}</p>
                    <p id="rating">{business.rating}</p>
                    <p id="review_count">{business.reviewCount}</p>
                </span>
            </section>
        </div>
    )
};

export default Business;