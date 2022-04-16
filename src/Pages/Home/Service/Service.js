import React from 'react';
import './Service.css';
import { useNavigate } from 'react-router-dom';
const Service = ({ service }) => {
    const { id, name, img, price, description } = service;
    const navigate = useNavigate()
    const navigateHandleParames = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service'>
            <img src={img} className="w-100" alt="" />
            <h2>{name}</h2>
            <p><small>Price: {price}</small></p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateHandleParames(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;