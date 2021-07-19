import MainContent from "../../components/layout/content/MainContent"
import { Row, Col } from 'antd'
import bgStars from '../../assets/media/bg_stars3.png'
import homeHeadL from '../../assets/media/home-header-layer5.png'
import homeHeadL2 from '../../assets/media/home-header-layer-sm.png'
import pWeb from '../../assets/media/coding.svg'
import computer from '../../assets/media/computer.svg'
import edit from '../../assets/media/edit.svg'
import graph from '../../assets/media/graph.svg'
import './HomePage.css'
import { Link } from "react-router-dom"
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
            <div className="content-info">

                <Row className="container">
                    <Col xs={24} md={24} sm={24} >
                        <p>
                            <span>MagicMoon</span> is a specialist Digital Agency
                            in <span>Web Page Design</span> y
                            and focused Marketing Services
                            Digital for companies that want
                            take off, grow and consolidate in
                            the Internet.
                        </p>
                    </Col>
                    <Col xs={24} md={6} sm={24} className="container-info">
                        <div className="card-info">
                            <Link to="/">
                                <div className="card-img">
                                    <img src={pWeb} alt="" />
                                </div>
                                <p>
                                    Custom Web Pages
                                    <span>Made From Scratch</span>
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={24} md={6} sm={24} className="container-info">
                        <div className="card-info">
                            <Link to="/">
                                <div className="card-img">
                                    <img src={edit} alt="" />
                                </div>
                                <p>
                                    Modern Websites
                                    <span>Professional, Responsive</span>
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={24} md={6} sm={24} className="container-info">
                        <div className="card-info">
                            <Link to="/">
                                <div className="card-img">
                                    <img src={graph} alt="" />
                                </div>
                                <p>
                                    Manageable website
                                    <span>Manage your content</span>
                                </p>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={24} md={6} sm={24} className="container-info">

                        <div className="card-info">
                            <Link to="/">
                                <div className="card-img">
                                    <img src={computer} alt="" />
                                </div>
                                <p>
                                    E-commerce
                                    <span>your online store</span>
                                </p>
                            </Link>
                        </div>

                    </Col>
                    <Col xs={24} md={24} sm={24} className="container-info">
                        <div className="card-info">
                            <Link to="/" className="banner-btn">Know us</Link>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="content-methodology">
                <MainContent>
                    <h1>Methodology <span className="mText-logo">Magic Moon</span></h1>
                    <p>Designing your website is a fundamental element, but it is <span>only the starting point</span> for what we can achieve.</p>
                    <div className="publicity">Discover our<span> Digital Agency</span> approach for the growth of your business.</div>
                </MainContent>
            </div>
            <div className="content-contact">
                <div className="container-contact">
                <h1>Get a quote</h1>
                <p>Take your business to the next level</p>
                <div className="info">
                Tell us what you need, we will contact you shortly.
                </div>
                </div>
            </div>

        </>
    )
}

export default HomePage
