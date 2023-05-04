import Business from "../business/business";

// const lists = [...Array(3)].map(() => {
//     <li>
//         <Business />
//     </li>
// })
function BusinessList(props){
    return(
        <ul>
            <li >
                <Business business={props.list} />
            </li>
        </ul>
    );
};

export default BusinessList;