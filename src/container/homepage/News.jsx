import React, { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Blog from '../../component/Section/Blog'
import Contact from '../../component/Section/Contact'
import Head from '../../component/Section/Head'

const News = () => {
    const blog = [
        {
            img: "./../images/bg (1).png",
            tag: "oil & gas",
            date: "29 Nov 2022",
            title: "Cargo flow through better supply chain visibility, control.",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            img: "./../images/bg (3).png",
            tag: "oil & gas",
            date: "29 Nov 2022",
            title: "Cargo flow through better supply chain visibility, control.",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            img: "./../images/bg (2).png",
            tag: "oil & gas",
            date: "29 Nov 2022",
            title: "Cargo flow through better supply chain visibility, control.",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            img: "./../images/blog/Image.png",
            tag: "oil & gas",
            date: "29 Nov 2022",
            title: "Cargo flow through better supply chain visibility, control.",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            img: "./../images/blog/Image-1.png",
            tag: "oil & gas",
            date: "29 Nov 2022",
            title: "Cargo flow through better supply chain visibility, control.",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            img: "./../images/blog/Image-2.png",
            tag: "oil & gas",
            date: "29 Nov 2022",
            title: "Cargo flow through better supply chain visibility, control.",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            img: "./../images/blog/Image-3.png",
            tag: "oil & gas",
            date: "29 Nov 2022",
            title: "Cargo flow through better supply chain visibility, control.",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            img: "./../images/blog/Image-4.png",
            tag: "oil & gas",
            date: "29 Nov 2022",
            title: "Cargo flow through better supply chain visibility, control.",
            desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."
        },
        {
            img: "./../images/blog/Image-5.png",
            tag: "oil & gas",
            date: "29 Nov 2022",
            title: "Cargo flow through better supply chain visibility, control.",
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
                    <Head default="home" current="News" title={"News"} />
                </div>

                <Blog blog={blog} title={"news & articles"} top={"our blog"} type={"blog"} />

                <Contact />

                <Footer />
            </div >
        </Fragment>
    )
}

export default News