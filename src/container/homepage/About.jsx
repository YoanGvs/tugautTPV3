import React, { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Contact from '../../component/Section/Contact'
import AboutSec from '../../component/Section/About'
import Head from '../../component/Section/Head'
import Number from '../../component/Section/Number'
import Step from '../../component/Section/Step'

const About = () => {
    return (
        <Fragment>
            <div className="overflow-hidden">
                <div className="position-relative">
                    <img src="./../images/Bg.png" className="images__wrap-head" alt="" />
                    <div className="wrapper__bg-head"></div>
                    <Navbar />
                    <Head default="home" current="About" title={"about us"} />
                </div>

                <AboutSec />

                <Number />

                <Step />

                <section>
                    <div className="container">
                        <div className="text-center mb-5">
                            <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">testimoni</p>
                            <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase mb-4">Check Our Clients Review</h3>
                            <p className='normal font__size--16 color__gray-1 roboto'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis <br className='d-none d-md-block' /> enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        </div>

                        <div className="row justify-content-center mb-5">
                            <div className="col-xl-11">
                                <div className="row">
                                    <div className="col-lg-6 mb-4 mb-lg-0">
                                        <div className="wrapper__card-testimonial">
                                            <div className="d-flex align-items-start flex-wrap flex-sm-nowrap">
                                                <img src="./../images/Rectangle 2.png" className='img' alt="" />
                                                <div className='ms-sm-4 mt-4 mt-sm-0'>
                                                    <h5 className='emdium font__size--20 text__20-1024 text-uppercase mb-0'>Arlene Mccoy</h5>
                                                    <p className='normal font__size--12 text__12-1024 color__gray-1 roboto mb-3'>-sm@b mb-1rooklysim</p>

                                                    <p className='normal font__size--16 color__gray-1 roboto mb-0'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="wrapper__card-testimonial">
                                            <div className="d-flex align-items-start flex-wrap flex-sm-nowrap">
                                                <img src="./../images/Rectangle 2 (1).png" className='img' alt="" />
                                                <div className='ms-sm-4 mt-4 mt-sm-0'>
                                                    <h5 className='emdium font__size--20 text__20-1024 text-uppercase mb-0'>maroon 3</h5>
                                                    <p className='normal font__size--12 text__12-1024 color__gray-1 roboto mb-sm-3 mb-1'>@marmar</p>

                                                    <p className='normal font__size--16 color__gray-1 roboto mb-0'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row justify-content-center">
                            <div className="col-xl-10">
                                <div className="wrapper__brand-testimonial d-flex flex-wrap flex-lg-nowrap align-items-center justify-content-lg-between justify-content-center">
                                    <img src="./../images/8.png" alt="" />
                                    <img src="./../images/1.png" alt="" />
                                    <img src="./../images/6.png" alt="" />
                                    <img src="./../images/7.png" alt="" />
                                    <img src="./../images/8.png" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


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