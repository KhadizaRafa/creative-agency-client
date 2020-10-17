import React from 'react';
import slack from '../../../images/logos/slack.png'
import google from '../../../images/logos/google.png'
import uber from '../../../images/logos/uber.png'
import netflix from '../../../images/logos/netflix.png'
import airbnb from '../../../images/logos/airbnb.png'
const BusinessInfo = () => {
    return (
        <div className="container mt-3">
            <div className="card-deck">
                <div className="card w-50 mx-auto border-0">
                    <img src={slack} className="card-img-top p-2 w-75" alt="..." />
                </div>
                <div className="card w-50 mx-auto border-0">
                    <img src={google} className="card-img-top p-2 w-75" alt="..." />
                </div>
                <div className="card w-50 mx-auto border-0">
                    <img src={uber} className="card-img-top p-2 w-50" alt="..." />
                </div>
                <div className="card w-50 mx-auto border-0">
                    <img src={netflix} className="card-img-top w-50" alt="..." />
                </div>
                <div className="card w-50 mx-auto border-0">
                    <img src={airbnb} className="card-img-top p-2 w-75" alt="..." />
                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;