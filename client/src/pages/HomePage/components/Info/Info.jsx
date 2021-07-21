import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import './Info.css'
import pWeb from '../../../../assets/media/coding.svg'
import computer from '../../../../assets/media/computer.svg'
import edit from '../../../../assets/media/edit.svg'
import graph from '../../../../assets/media/graph.svg'
const Info = () => {
    return (
        <>
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

        </>
    )
}

export default Info
