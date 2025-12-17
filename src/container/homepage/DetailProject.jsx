import React, { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Contact from '../../component/Section/Contact'
import Head from '../../component/Section/Head'

const DetailProject = () => {
    return (
        <Fragment>
            <div className="overflow-hidden">
                <div className="position-relative">
                    <img src="./../images/project/tugauttp_entrepot.JPG" className="images__wrap-head" alt="" />
                    <div className="wrapper__bg-head"></div>
                    <Navbar />
                    <Head default="home" current="detail project" title={"detail project"} />
                </div>

                <section>
                    <div className="container">
                        <div className="mb-5">
                            <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">PROJECT NAME</p>
                            <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase">home queen resort</h3>
                        </div>

                        <img src="./../images/sdsdsad.png" className='images__cover-head mb-4' alt="" />
                        <div className="row">
                            <div className="col-4">
                                <img src="./../images/project-one-img-1.jpg.png" className='images__cover-detail' alt="" />
                            </div>
                            <div className="col-4">
                                <img src="./../images/project-one-img-3.jpg.png" className='images__cover-detail' alt="" />
                            </div>
                            <div className="col-4">
                                <img src="./../images/project-one-img-4.jpg.png" className='images__cover-detail' alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className='pt-0'>
                    <div className="container">
                        <div className="wrapper__list-detail-project mb-5">
                            <div className='items'>
                                <h5 className='roboto normal font__size--20 text__20-1024'>Date</h5>
                                <p className='roboto normal font__size--16 text__16-1024'>June 29, 2021</p>
                            </div>
                            <div className='items'>
                                <h5 className='roboto normal font__size--20 text__20-1024'>Categories</h5>
                                <p className='roboto normal font__size--16 text__16-1024'>Construction & Engineering</p>
                            </div>
                            <div className='items'>
                                <h5 className='roboto normal font__size--20 text__20-1024'>Client</h5>
                                <p className='roboto normal font__size--16 text__16-1024'>PT. Queenku</p>
                            </div>
                            <div className='items'>
                                <h5 className='roboto normal font__size--20 text__20-1024'>Location</h5>
                                <p className='roboto normal font__size--16 text__16-1024'>Pontianak</p>
                            </div>
                            <div className='items'>
                                <h5 className='roboto normal font__size--20 text__20-1024'>Completed</h5>
                                <p className='roboto normal font__size--16 text__16-1024'>Nov 2022</p>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-7 mb-4 mb-md-0">
                                <h3 className='bold font__size--32 text__32-1024 text-uppercase mb-3'>about project</h3>

                                <p className='normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3'>Lorem ipsum dolor sit amet consectetur. Facilisis natoque aliquam arcu eget risus luctus sed consectetur. Rhoncus cursus ac pretium nibh ipsum leo nibh. Eu fames morbi id magna egestas commodo leo egestas. Sed sed nisl scelerisque semper. Ante tempus nisi est molestie egestas blandit et. Enim quisque aliquet sit tellus eu faucibus sed lacinia orci. Aenean sed malesuada luctus non facilisi eget pellentesque fermentum pellentesque. Risus faucibus vitae libero phasellus leo. Sapien nunc lacinia quam ut sit. Consectetur cras varius posuere a. Arcu ut arcu massa cursus quisque. Lorem eget ac convallis nec tincidunt facilisis dolor augue pellentesque.</p>
                                <p className='normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3'>Lorem ipsum dolor sit amet consectetur. Facilisis natoque aliquam arcu eget risus luctus sed consectetur. Rhoncus cursus ac pretium nibh ipsum leo nibh. Eu fames morbi id magna egestas commodo leo egestas. Sed sed nisl scelerisque semper. Ante tempus nisi est molestie egestas blandit et. Enim quisque aliquet sit tellus eu faucibus sed lacinia orci. Aenean sed malesuada luctus non facilisi eget pellentesque fermentum pellentesque. Risus faucibus vitae libero phasellus leo. Sapien nunc lacinia quam ut sit. Consectetur cras varius posuere a. Arcu ut arcu massa cursus quisque. Lorem eget ac convallis nec tincidunt facilisis dolor augue pellentesque.</p>
                                <p className='normal roboto font__size--16 text__16-1024 color__gray-1 lh-2 mb-3'>Lorem ipsum dolor sit amet consectetur. Facilisis natoque aliquam arcu eget risus luctus sed consectetur. Rhoncus cursus ac pretium nibh ipsum leo nibh. Eu fames morbi id magna egestas commodo leo egestas. Sed sed nisl scelerisque semper. Ante tempus nisi est molestie egestas blandit et. Enim quisque aliquet sit tellus eu faucibus sed lacinia orci. Aenean sed malesuada luctus non facilisi eget pellentesque fermentum pellentesque. Risus faucibus vitae libero phasellus leo. Sapien nunc lacinia quam ut sit. Consectetur cras varius posuere a. Arcu ut arcu massa cursus quisque. Lorem eget ac convallis nec tincidunt facilisis dolor augue pellentesque.</p>
                            </div>
                            <div className="col-md-5 col-lg-4 offset-lg-1">
                                <h3 className='bold font__size--32 text__32-1024 text-uppercase mb-3'>download brochure</h3>

                                <a href="#!" className="wrapper__list-document d-inline-block color__gray-1">
                                    <div className="d-flex align-items-center">
                                        <img src="./../images/pdf (1) 1.png" alt="" />
                                        <div className='ms-2 semi-bold font__size--14 text__14-1024 text-uppercase'>download COMPANY PROFILE</div>
                                    </div>
                                </a>
                                <a href="#!" className="wrapper__list-document d-inline-block color__gray-1 my-3">
                                    <div className="d-flex align-items-center">
                                        <img src="./../images/pdf (1) 1.png" alt="" />
                                        <div className='ms-2 semi-bold font__size--14 text__14-1024 text-uppercase'>product info</div>
                                    </div>
                                </a>
                                <a href="#!" className="wrapper__list-document d-inline-block color__gray-1">
                                    <div className="d-flex align-items-center">
                                        <img src="./../images/pdf (1) 1.png" alt="" />
                                        <div className='ms-2 semi-bold font__size--14 text__14-1024 text-uppercase'>pricing table</div>
                                    </div>
                                </a>
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

export default DetailProject
