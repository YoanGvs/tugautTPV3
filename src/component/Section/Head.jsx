import React from 'react'

const Head = (props) => {
    return (
        <section className="position-relative z-2">
            <div className="container my-4">
                <div className="text-center">
                    <h1 className="semi-bold font__size--58 text__50-1024 color__white text-uppercase mb-0">{props.title}</h1>
                    <p className="medium roboto font__size--16 text__16-1024 color__white mt-4 text-capitalize"><span className='color__orange'>{props.default ? props.default + " / " :""}</span> {props.current}</p>
                </div>
            </div>
        </section>
    )
}

export default Head