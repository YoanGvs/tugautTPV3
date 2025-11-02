import React, { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Contact from '../../component/Section/Contact'
import ServiceSec from '../../component/Section/Service'
import Head from '../../component/Section/Head'
import Number from '../../component/Section/Number'
import Step from '../../component/Section/Step'

const Service = () => {
    const service = [
        {
            img: "./../images/Image (4).png",
            title: "Petroleum & Gas Energy",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            img: "./../images/Image (5).png",
            title: "Construction & Engineering",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            img: "./../images/Image (6).png",
            title: "Auto & Mechanical Engineering",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            img: "./../images/ds (1).png",
            title: "Petroleum & Gas Energy",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            img: "./../images/ds (3).png",
            title: "Construction & Engineering",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            img: "./../images/ds (2).png",
            title: "Auto & Mechanical Engineering",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
    ]
    return (
        <Fragment>
            <div className="overflow-hidden">
                <div className="position-relative">
                    <img src="./../images/Bg.png" className="images__wrap-head" alt="" />
                    <div className="wrapper__bg-head"></div>
                    <Navbar />
                    <Head default="home" current="Our Service" title={"Our Service"} />
                </div>

                <ServiceSec service={service} type="service" />

                <Number />

                <Step />

                <Contact />

                <Footer />
            </div >
        </Fragment>
    )
}

export default Service