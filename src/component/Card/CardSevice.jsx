import React from 'react'
import { NavLink } from 'react-router-dom'

const CardSevice = (props) => {
    return (
        <NavLink
            to="/service/detail" className="wrapper__card-service color__black d-inline-block w-100">
            <img src={props.data.img} className='img' alt="" />
            <div className="desc">
                <div className="h5 medium font__size--20 text__20-1024 text-uppercase">{props.data.title}</div>
                <p className="normal font__size--16 text__16-1024 roboto color__gray-2">
                    {props.data.desc}
                </p>
                <div className="d-inline-block">
                    <a href="#!" className='color__orange text-uppercase'>read more</a>
                </div>
            </div>
        </NavLink>
    )
}

export default CardSevice