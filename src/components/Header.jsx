import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <>
            <header>
                    <h1>LOGO</h1>
                    <nav>
                        <ul>
                            <li><Link to={"/"}>HomePage </Link></li>
                            <li><Link to={"/produtos"}>ProductListingPage </Link></li>
                            <li></li>
                        </ul>
                    </nav>
            </header>
        </>
     );
}
 
export default Header;