import React, { Fragment } from 'react'
import Footer from '../../component/Other/Footer'
import Navbar from '../../component/Other/Navbar'
import Contact from '../../component/Section/Contact'
import Head from '../../component/Section/Head'

const Project = () => {
    const projects = [
        {
            title: "name of project",
            category: ['Construction', 'Engineering'],
            link: "#!",
            bg: "./../images/project/Image.png"
        },
        {
            title: "name of project",
            category: ['Construction', 'Engineering'],
            link: "#!",
            bg: "./../images/project/Image-1.png"
        },
        {
            title: "name of project",
            category: ['Construction', 'Engineering'],
            link: "#!",
            bg: "./../images/project/Image-2.png"
        },
        {
            title: "name of project",
            category: ['Construction', 'Engineering'],
            link: "#!",
            bg: "./../images/project/Image-3.png"
        },
        {
            title: "name of project",
            category: ['Construction', 'Engineering'],
            link: "#!",
            bg: "./../images/project/Image-4.png"
        },
        {
            title: "name of project",
            category: ['Construction', 'Engineering'],
            link: "#!",
            bg: "./../images/project/Image-5.png"
        },
        {
            title: "name of project",
            category: ['Construction', 'Engineering'],
            link: "#!",
            bg: "./../images/project/Image-6.png"
        },
        {
            title: "name of project",
            category: ['Construction', 'Engineering'],
            link: "#!",
            bg: "./../images/project/Image-7.png"
        },
        {
            title: "name of project",
            category: ['Construction', 'Engineering'],
            link: "#!",
            bg: "./../images/project/Image-8.png"
        },
    ]
    return (
        <Fragment>
            <div className="overflow-hidden">
                <div className="position-relative">
                    <img src="./../images/Bg.png" className="images__wrap-head" alt="" />
                    <div className="wrapper__bg-head"></div>
                    <Navbar />
                    <Head default="home" current="Our Project" title={"our project"} />
                </div>

                <section>
                    <div className="container">
                        <div className="text-center mb-5">
                            <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">our projects</p>
                            <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase">our projects</h3>
                        </div>
                        <div className="wrapper__list-auto">
                            <div className="list__category normal font__size--16 text__16-1024 roboto mb-5">
                                <div className="items active">All</div>
                                <div className="items">Petroleum & Gas Energy</div>
                                <div className="items">Construction & Engineering</div>
                                <div className="items">Auto & Mechanical Engineering</div>
                            </div>
                        </div>

                        <div className="row">
                            {
                                projects.map((obj) => {
                                    return <div className="col-md-4 mb-4">
                                        <div className="wrapper__card-image-project position-relative">
                                            <img src={obj.bg} className='bg' alt="" />
                                            <div className="cover"></div>
                                            <div className="desc text-center color__white">
                                                <h4 className='bold font__size--20 text__20-1024 text-uppercase mb-0'>{obj.title}</h4>
                                                <div className="category my-3">
                                                    {
                                                        obj.category.map((i) => {
                                                            return <div className="items bold font__size--12 text__12-1024 roboto">
                                                                {i}
                                                            </div>
                                                        })
                                                    }
                                                </div>
                                                <a href={obj.link} className='normal color__white font__size--20 text__20-1024 text-uppercase'>see details</a>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </section>

                <Contact />

                <Footer />
            </div >
        </Fragment>
    )
}

export default Project