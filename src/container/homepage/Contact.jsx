import React, { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Head from '../../component/Section/Head'

const Contact = () => {
    return (
        <Fragment>
            <div className="overflow-hidden">
                <div className="position-relative">
                    <img src="./../images/Bg.png" className="images__wrap-head" alt="" />
                    <div className="wrapper__bg-head"></div>
                    <Navbar />
                    <Head default="home" current="contact us" title={"contact us"} />
                </div>

                <section className="position-relative">
                    <img src="./../images/sdad.png" className="images__wrap-contact" alt="" />
                    <div className="wrapper__bg-orange-wrap"></div>
                    <div className="container position-relative z-2">
                        <div className="row">
                            <div className="col-md-6 mb-4 my-md-auto">
                                <p className="semi-bold font__size--14 text__14-1024 color__white text-uppercase">contact us</p>
                                <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs color__white text-uppercase mb-4">contact us to get more info</h3>
                                <p className="roboto normal font__size--16 text__16-1024 color__white mb-5">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

                                <div className="mb-5">
                                    <h5 className='semi-bold font__size--14 text__14-1024 color__white text-uppercase mb-3'>CONTACT US</h5>

                                    <div className="d-flex align-items-center">
                                        <img src="./../images/gfd (1).png" alt="" />
                                        <span className='ms-2 semi-bold font__size--14 text__14-1024 color__white text-uppercase'>buildup@gmail.com</span>
                                    </div>

                                    <div className="d-flex align-items-center my-3">
                                        <img src="./../images/gfd (6).png" alt="" />
                                        <span className='ms-2 semi-bold font__size--14 text__14-1024 color__white text-uppercase'>+123 456 789</span>
                                    </div>

                                    <div className="d-flex align-items-center">
                                        <img src="./../images/gfd (5).png" alt="" />
                                        <span className='ms-2 semi-bold font__size--14 text__14-1024 color__white text-uppercase'>2118 Thornridge Cir. Syracuse, Connecticut 35624</span>
                                    </div>

                                </div>

                                <h5 className='semi-bold font__size--14 text__14-1024 color__white text-uppercase mb-3'>follow our social account</h5>

                                <div className="d-flex align-items-center">
                                    <a href="#!">
                                        <img src="./../images/gfd (4).png" alt="" />
                                    </a>
                                    <a href="#!" className='mx-3'>
                                        <img src="./../images/gfd (3).png" alt="" />
                                    </a>
                                    <a href="#!">
                                        <img src="./../images/gfd (2).png" alt="" />
                                    </a>
                                </div>

                            </div>
                            <div className="col-md-6 col-xl-5 offset-xl-1">
                                <div className="wrapper__form-contact bg__white">
                                    <h3 className="bold font__size--32 text__32-1024 color__black text-uppercase mb-4">get a free quote</h3>
                                    <div class="form-group mb-4 ">
                                        <label className="semi-bold font__size--14 text__14-1024 text-uppercase">Name</label>
                                        <input type="email" class="form-control wrapper__field" placeholder="Enter your Name" />
                                    </div>
                                    <div class="form-group mb-4 ">
                                        <label className="semi-bold font__size--14 text__14-1024 text-uppercase">Email</label>
                                        <input type="email" class="form-control wrapper__field" placeholder="Enter your Email" />
                                    </div>
                                    <div class="form-group mb-4 ">
                                        <label className="semi-bold font__size--14 text__14-1024 text-uppercase">phone number</label>
                                        <input type="email" class="form-control wrapper__field" placeholder="Enter your phone number" />
                                    </div>
                                    <div class="form-group mb-4  mb-4">
                                        <label className="semi-bold font__size--14 text__14-1024 text-uppercase">message</label>
                                        <textarea class="form-control wrapper__field textarea" cols="30" rows="5" placeholder="Type here..."></textarea>
                                    </div>
                                    <button className="semi-bold rounded-0 font__size--14 text__14-1024 btn btn__orange shadow color__white text-uppercase">request a quote</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer type={"contact"} />
            </div >
        </Fragment>
    )
}

export default Contact