import React, { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Contact from '../../component/Section/Contact'
import AboutSec from '../../component/Section/About'
import Head from '../../component/Section/Head'
import Number from '../../component/Section/Number'
import Step from '../../component/Section/Step'
import Testimonial from '../../component/Section/Testimonial'

const About = () => {
    return (
        <Fragment>
            <div className="overflow-hidden">
                <div className="position-relative">
                    <img src="./../images/Bg.png" className="images__wrap-head" alt="" />
                    <div className="wrapper__bg-head"></div>
                    <Navbar />
                    <Head default="home" current="A propos" title={"A propos"} />
                </div>

                <AboutSec />

                <Number />

                <Step />

                <Testimonial />


                <section>
                    <div className="container">
                        <div className="text-center mb-5">
                            <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">OUR TEAM</p>
                            <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase mb-4">MEET OUR PROFESIONAL TEAM</h3>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="wrapper__card-team">
                                    <div className="position-relative image">
                                        <img src="./../images/Image (1).png" alt="" />
                                        <div className="sosmed d-flex align-items-center justify-content-center">
                                            <a href="#!">
                                                <img src="./../images/ssa (1).png" alt="" />
                                            </a>
                                            <a href="#!" className='mx-3'>
                                                <img src="./../images/ssa (2).png" alt="" />
                                            </a>
                                            <a href="#!">
                                                <img src="./../images/ssa (3).png" alt="" />
                                            </a>
                                        </div>
                                        <div className="bg"></div>
                                    </div>
                                    <div className="desc text-center">
                                        <h4 className='text-uppercase medium font__size--20 text__20-1024'>ahmad dhani</h4>
                                        <p className='text-uppercase mb-0 normal font__size--16 text__16-1024 color__gray-1'>PROJECT MANAGEMENT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="wrapper__card-team">
                                    <div className="position-relative image">
                                        <img src="./../images/Image (2).png" alt="" />
                                        <div className="sosmed d-flex align-items-center justify-content-center">
                                            <a href="#!">
                                                <img src="./../images/ssa (1).png" alt="" />
                                            </a>
                                            <a href="#!" className='mx-3'>
                                                <img src="./../images/ssa (2).png" alt="" />
                                            </a>
                                            <a href="#!">
                                                <img src="./../images/ssa (3).png" alt="" />
                                            </a>
                                        </div>
                                        <div className="bg"></div>
                                    </div>
                                    <div className="desc text-center">
                                        <h4 className='text-uppercase medium font__size--20 text__20-1024'>rajoo</h4>
                                        <p className='text-uppercase mb-0 normal font__size--16 text__16-1024 color__gray-1'>PROJECT MANAGEMENT</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="wrapper__card-team">
                                    <div className="position-relative image">
                                        <img src="./../images/Image (3).png" alt="" />
                                        <div className="sosmed d-flex align-items-center justify-content-center">
                                            <a href="#!">
                                                <img src="./../images/ssa (1).png" alt="" />
                                            </a>
                                            <a href="#!" className='mx-3'>
                                                <img src="./../images/ssa (2).png" alt="" />
                                            </a>
                                            <a href="#!">
                                                <img src="./../images/ssa (3).png" alt="" />
                                            </a>
                                        </div>
                                        <div className="bg"></div>
                                    </div>
                                    <div className="desc text-center">
                                        <h4 className='text-uppercase medium font__size--20 text__20-1024'>hery setiawan</h4>
                                        <p className='text-uppercase mb-0 normal font__size--16 text__16-1024 color__gray-1'>PROJECT MANAGEMENT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Contact />

                <Footer />
            </div >
        </Fragment>
    )
}

export default About
