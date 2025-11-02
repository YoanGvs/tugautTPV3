import React from 'react'

const Number = () => {
    return (
        <section className='position-relative'>
            <img src="./../images/Bg.png" className="images__wrap-head" alt="" />
            <div className="wrapper__bg-head two"></div>
            <div className="container position-relative z-2">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="wrapper__number-work d-flex flex-wrap flex-md-nowrap align-items-center justify-content-between text-center">
                            <div className='items'>
                                <h2 className='bold font__size--58 text__50-1024 text__50-sm color__white'>211</h2>
                                <p className='normal font__size--16 text__16-1024 text-uppercase color__white mb-0'>COMPLETED PROJECTS</p>
                            </div>
                            <div className='items'>
                                <h2 className='bold font__size--58 text__50-1024 text__50-sm color__white'>106</h2>
                                <p className='normal font__size--16 text__16-1024 text-uppercase color__white mb-0'>HAPPY CLIENT</p>
                            </div>
                            <div className='items'>
                                <h2 className='bold font__size--58 text__50-1024 text__50-sm color__white'>321</h2>
                                <p className='normal font__size--16 text__16-1024 text-uppercase color__white mb-0'>COMPLETED PROJECTS</p>
                            </div>
                            <div className='items'>
                                <h2 className='bold font__size--58 text__50-1024 text__50-sm color__white'>109</h2>
                                <p className='normal font__size--16 text__16-1024 text-uppercase color__white mb-0'>HAPPY CLIENT</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Number