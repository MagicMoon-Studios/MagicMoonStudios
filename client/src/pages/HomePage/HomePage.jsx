import { Row, Col } from 'antd'
import bgStars from '../../assets/media/bg_stars3.png'
import homeHeadL from '../../assets/media/home-header-layer5.png'
import homeHeadL2 from '../../assets/media/home-header-layer-sm.png'

import './HomePage.css'
import { Link } from "react-router-dom"
import Info from "./components/Info/Info"
import Methodology from "./components/Methodology/Methodology"
import Contact from "./components/Contact/Contact"
const HomePage = () => {
    return (
        <>
            <div className="banner-bg">
                <img src={bgStars} alt="" className="bg-img" />

                <img src={homeHeadL} alt="" className="bg-home-img" />
                <img src={homeHeadL2} alt="" className="bg-home-img2" />
                <Row className="text-bg">
                    <Col xs={24} md={12} sm={24} className="text-bg-1">
                        <p>Design of
                            <span>web pages</span>
                            to your measure.
                        </p>

                    </Col>
                    <Col xs={24} md={12} sm={24} className="text-bg-2">
                        <Link to="/" className="banner-btn">Get a quote</Link>
                    </Col>
                </Row>
            </div>
            {/* Info link */}
            <Info/>
            {/* Methodology */}
            <Methodology/>
            {/* contact */}
            <Contact/>

        </>
    )
}

export default HomePage
