import React, { useEffect, useState } from 'react';
import ServiceInfo from '../ServiceInfo/ServiceInfo';

const Services = () => {
    const [services, setServices] = useState([]);
    const baseUrl = 'https://protected-sands-79109.herokuapp.com';
    useEffect(() => {
        fetch(`${baseUrl}/getServices`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <section>
            <div className="container mt-5">
                <h3 className="text-center font-weight-bold">Provide awesome <span className="text-success">services</span> </h3>
                <div className="row">
                    {
                        services.map(service => <ServiceInfo key={service._id} service={service}></ServiceInfo>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;