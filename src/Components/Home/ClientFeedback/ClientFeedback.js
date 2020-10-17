import React, { useEffect } from 'react';
import { useState } from 'react';
import ClientFeedBackInfo from '../ClientFeedBackInfo/ClientFeedBackInfo';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientFeedback = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    const baseUrl = 'https://protected-sands-79109.herokuapp.com';
    useEffect(() => {
        fetch(`${baseUrl}/getClientFeedback`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => setFeedbacks(data))
    }, [])

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    };
    return (
        <section>
            <div className="container mt-5">
                <h3 className="text-center font-weight-bold">Clients <span className="text-success">Feedback</span></h3>
                <Slider {...settings}>
                    {
                        feedbacks.map(feedback => <ClientFeedBackInfo key={feedback._id} feedback={feedback}></ClientFeedBackInfo>)
                    }
                </Slider>
            </div>
        </section>
    );
};

export default ClientFeedback;