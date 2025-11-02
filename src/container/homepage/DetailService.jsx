import React, { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Contact from '../../component/Section/Contact'
import Head from '../../component/Section/Head'

const DetailService = () => {
    return (
        <Fragment>
            <div className="overflow-hidden">
                <div className="position-relative">
                    <img src="./../images/Bg.png" className="images__wrap-head" alt="" />
                    <div className="wrapper__bg-head"></div>
                    <Navbar />
                    <Head default="home" current="Detail Service" title={"Detail Service"} />
                </div>

                <section>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4 mb-4 mb-md-0">
                                <h3 className='medium font__size--20 text__20-1024 text-uppercase mb-3'>our service</h3>

                                <ul className='list__menu-side'>
                                    <li><a href="#!" className='normal font__size--16 text__20-1024 roboto active'>Petroleum & Gas Energy</a></li>
                                    <li><a href="#!" className='normal font__size--16 text__20-1024 roboto'>Construction & Engineering</a></li>
                                    <li><a href="#!" className='normal font__size--16 text__20-1024 roboto'>Auto & Mechanical Engineering</a></li>
                                    <li><a href="#!" className='normal font__size--16 text__20-1024 roboto'>Petroleum & Gas Energy</a></li>
                                    <li><a href="#!" className='normal font__size--16 text__20-1024 roboto'>Construction & Engineering</a></li>
                                    <li><a href="#!" className='normal font__size--16 text__20-1024 roboto'>Auto & Mechanical Engineering</a></li>
                                </ul>
                            </div>
                            <div className="col-md-8">
                                <img src="./../images/sdasda.png" className='images__dt-service mb-4' alt="" />

                                <h3 className='bold font__size--32 text__32-1024 mb-3 text-uppercase'>Petroleum & Gas Energy</h3>
                                
                                <p className='normal roboto font__size--16 text__20-1024 color__gray-1 lh-2 mb-3'>Lorem ipsum dolor sit amet consectetur. Facilisis natoque aliquam arcu eget risus luctus sed consectetur. Rhoncus cursus ac pretium nibh ipsum leo nibh. Eu fames morbi id magna egestas commodo leo egestas. Sed sed nisl scelerisque semper. Ante tempus nisi est molestie egestas blandit et. Enim quisque aliquet sit tellus eu faucibus sed lacinia orci. Aenean sed malesuada luctus non facilisi eget pellentesque fermentum pellentesque. Risus faucibus vitae libero phasellus leo. Sapien nunc lacinia quam ut sit. Consectetur cras varius posuere a. Arcu ut arcu massa cursus quisque. Lorem eget ac convallis nec tincidunt facilisis dolor augue pellentesque.</p>

                                <div className="wrapper__left-line mb-3">
                                    <div className='normal roboto font__size--20 text__20-1024 color__gray-1 lh-2 ps-4'>
                                        Lorem ipsum dolor sit amet consectetur. Facilisis natoque aliquam arcu eget risus luctus sed consectetur. Rhoncus cursus ac pretium nibh ipsum leo nibh.
                                    </div>
                                </div>

                                <p className='normal roboto font__size--16 text__20-1024 color__gray-1 lh-2 mb-5'>Lorem ipsum dolor sit amet consectetur. Facilisis natoque aliquam arcu eget risus luctus sed consectetur. Rhoncus cursus ac pretium nibh ipsum leo nibh. Eu fames morbi id magna egestas commodo leo egestas. Sed sed nisl scelerisque semper. Ante tempus nisi est molestie egestas blandit et. Enim quisque aliquet sit tellus eu faucibus sed lacinia orci. Aenean sed malesuada luctus non facilisi eget pellentesque fermentum pellentesque. Risus faucibus vitae libero phasellus leo. Sapien nunc lacinia quam ut sit. Consectetur cras varius posuere a. Arcu ut arcu massa cursus quisque. Lorem eget ac convallis nec tincidunt facilisis dolor augue pellentesque.</p>
                                
                                <h3 className='bold font__size--20 text__20-1024 mb-3 text-uppercase'>what will you get</h3>

                                <ul className='list__detail-info'>
                                    <li>
                                        <div className="d-flex align-items-start">
                                            <img src="./../images/asas.png" className='object-fit-content mt-2' alt="" />
                                            <p className='ms-3 normal roboto font__size--16 text__20-1024 color__gray-1 lh-2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-start">
                                            <img src="./../images/asas.png" className='object-fit-content mt-2' alt="" />
                                            <p className='ms-3 normal roboto font__size--16 text__20-1024 color__gray-1 lh-2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-start">
                                            <img src="./../images/asas.png" className='object-fit-content mt-2' alt="" />
                                            <p className='ms-3 normal roboto font__size--16 text__20-1024 color__gray-1 lh-2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="d-flex align-items-start">
                                            <img src="./../images/asas.png" className='object-fit-content mt-2' alt="" />
                                            <p className='ms-3 normal roboto font__size--16 text__20-1024 color__gray-1 lh-2'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                                        </div>
                                    </li>
                                </ul>
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

export default DetailService