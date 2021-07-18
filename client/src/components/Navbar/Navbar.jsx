import { Link} from "react-router-dom"
import { ReactComponent as LogoMin } from '../../assets/imgs/logo-min.svg'
import LinksMenu from "../../utils/LinksMenu"
import ThemeControl from "./components/ThemeControl"

import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="container wrapper d-flex">
            <div className="item-center d-flex">
                <Link to="/" className="d-flex  item-center">
                    <LogoMin /><span className="text-logo">Magic Moon</span>
                </Link>
            </div>
            <div className="item-center d-flex">
                <ul className="nav__right--links item-center d-flex">
                    <LinksMenu/>
                </ul>
                <ThemeControl />
            </div>
        </nav>
    )
}

export default Navbar
