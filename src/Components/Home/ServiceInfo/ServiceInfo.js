import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceInfo.css'

const ServiceInfo = ({ service }) => {
    return (
        <div className="col-md-4 service-info mt-5">
            <Link to={`/dashboard/${service.title}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
                <div className="card border-0 m-3">
                    <img src={`data:image/png;base64,${service.image.img}`} className="card-img-top rounded mx-auto d-block w-25 service-logo" alt="..." />
                    <div className="card-body text-center">
                        <h5 className="card-title font-weight-bold">{service.title}</h5>
                        <p className="card-text text-secondary">{service.description}</p>
                    </div>
                </div>
            </Link>
        </div>

    );
};

export default ServiceInfo;