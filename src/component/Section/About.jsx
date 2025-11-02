import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-5 mb-4 my-md-auto">
                        <img src="./../images/Images.png" className="w-100" alt="" />
                    </div>
                    <div className="col-md-7 col-lg-6 my-auto ps-lg-5">
                        <p className="semi-bold font__size--14 text__14-1024 color__orange text-uppercase">about us</p>
                        <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs text-uppercase">Let’s Build Something strong Together</h3>
                        <p className="roboto semi-bold font__size--16 text__16-1024">30+ Years of working experience with global industries</p>
                        <p className="roboto normal font__size--16 text__16-1024 color__gray-1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                        <p className="roboto normal font__size--16 text__16-1024 color__gray-1">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
                        <NavLink
                            to="/contact" className="semi-bold rounded-0 font__size--14 text__14-1024 btn btn__orange shadow color__white text-uppercase">Have A Project</NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About