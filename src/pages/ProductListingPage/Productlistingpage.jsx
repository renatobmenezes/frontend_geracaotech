import { Link } from "react-router-dom";
const ProductListingPage = () => {
    return ( 
        <>
            <h3>Produto</h3>
            <ul>
                <li><Link to={"/produtos/1/tenis x"}> TENIS X</Link></li>
                <li><Link to={"/produtos/2/tenis y"}> TENIS Y </Link></li>
            </ul>    
        </>
            
     );
}
 
export default ProductListingPage;