function Business(props){
    return (
        <div>
            {/* {console.log(props)} good to log props to see what object property we are trying to access */}
            <img src={props.business.imageSrc}/>
            <section>
                <h3 className="b_name" id="name">
                    {props.business.name}
                </h3>
                <span id="address">
                    <p id="address1">{props.business.address}</p>
                    <p id="city">{props.business.city}</p>
                    <p id="state">{props.business.state}</p>
                    <p id="zipcode">{props.business.zipcode}</p>
                </span>
                <span>
                    <p id="category">{props.business.category}</p>
                    <p id="rating">{props.business.rating}</p>
                    <p id="review_count">{props.business.reviewCount}</p>
                </span>
            </section>
        </div>
    )
};

export default Business;