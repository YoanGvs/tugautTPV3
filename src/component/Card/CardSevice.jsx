import React from 'react'
import { NavLink } from 'react-router-dom'

const CardSevice = (props) => {
    const { data } = props;
    return (
        <NavLink
            to={`/service/detail/${data.slug}`} className="wrapper__card-service color__black d-inline-block w-100">
            <img src={data.img} className='img' alt={data.title} />
            <div className="desc">
                <div className="h5 medium font__size--20 text__20-1024 text-uppercase">{data.title}</div>
                <p className="normal font__size--16 text__16-1024 roboto color__gray-2">
                    {data.desc}
                </p>
                <div className="d-inline-block">
                    <a href="#!" className='color__orange text-uppercase'>en savoir plus</a>
                </div>
            </div>
        </NavLink>
    )
}

export default CardSevice
