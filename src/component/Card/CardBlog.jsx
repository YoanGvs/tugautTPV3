import React from 'react'
import { NavLink } from 'react-router-dom'

const CardBlog = (props) => {
    return (
        <NavLink
            to="/news/detail" className="wrapper__card-blog color__black d-inline-block w-100">
            <img src={props.data.img} className='img' alt="" />
            <div className="desc">
                <div className="d-flex align-items-center mb-2">
                    <h5 className='mb-0 semi-bold font__size--14 text__14-1024 text-uppercase color__orange'>{props.data.tag}</h5>
                    <span className='font__size--14 text__14-1024 text-uppercase color__gray-1 px-2'>|</span>
                    <h5 className='mb-0 semi-bold font__size--14 text__14-1024 text-uppercase color__gray-1'>{props.data.date}</h5>
                </div>
                <div className="h5 medium font__size--20 text__20-1024 text-uppercase">{props.data.title}</div>
                <p className="normal font__size--16 text__16-1024 roboto color__gray-2">
                    {props.data.desc}
                </p>
                <div className="d-inline-block">
                    <a href="#!" className='color__orange text-uppercase text__16-1024'>read more</a>
                </div>
            </div>
        </NavLink>
    )
}

export default CardBlog