
import {LOGO_URL} from "../utils/constants";

const HeaderPart=()=>(
    <div className="Header-class">
        <div className="logo-class">
            <img className="logo" src={LOGO_URL}/>
        </div>
        <div className="Nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
    </div>
)

export default HeaderPart