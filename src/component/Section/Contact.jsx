import React from 'react'

const Contact = () => {
    return (
        <section className="position-relative">
            <img src="./../images/sdad.png" className="images__wrap-contact" alt="" />
            <div className="wrapper__bg-orange-wrap"></div>
            <div className="container position-relative z-2">
                <div className="row">
                    <div className="col-md-6 mb-4 my-md-auto">
                        <p className="semi-bold font__size--14 text__14-1024 color__white text-uppercase">contact us</p>
                        <h3 className="bold font__size--58 text__50-1024 text__50-sm text__50-xs color__white text-uppercase mb-4">contact us to get more info</h3>
                        <p className="roboto normal font__size--16 text__16-1024 color__white">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                    <div className="col-md-6 col-xl-5 offset-xl-1">
                        <div className="wrapper__form-contact bg__white mb__min-14">
                            <h3 className="bold font__size--32 color__black text-uppercase mb-4">get a free quote</h3>
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
    )
}

export default Contact