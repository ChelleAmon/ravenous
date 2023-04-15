import Business from "./business";

const lists = [...Array(3)].map((business) => {
    <li>{business}</li>
})
function BusinessList(){
    return(
        <ul>
            {lists}
        </ul>
    )
};

export default BusinessList;