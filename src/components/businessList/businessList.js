import Business from "../business/business";

// const lists = [...Array(3)].map(() => {
//     <li>
//         <Business />
//     </li>
// })
function BusinessList(){
    return(
        <ul>
            <li>
                <Business />
            </li>
            <li>
                <Business />
            </li>
            <li>
                <Business />
            </li>
        </ul>
    );
};

export default BusinessList;