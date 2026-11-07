import { useParams } from "react-router-dom";

const ProductViewPage = () => {
    const {id, nome} = useParams();         
    return (     
    <>
        <h1>Produto ({id}) {nome} </h1>
    </>
    );
}
 
export default ProductViewPage;