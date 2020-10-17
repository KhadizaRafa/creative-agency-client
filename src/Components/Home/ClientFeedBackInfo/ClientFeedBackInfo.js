import React from 'react';

const ClientFeedBackInfo = ({ feedback }) => {
    return (
        <div>
            <div className="m-3">
                <div className="row p-3">
                    <div className="col-md-5">
                        <img src={feedback.image} className="rounded-circle w-75" alt="..." />
                    </div>
                    <div className="col-md-7 pt-4">
                        <h5 className="card-title font-weight-bold">{feedback.name}</h5>
                        <p className="card-text font-weight-bold">{feedback.companyName}</p>
                    </div>
                </div>
                <div className="card-body">
                    <p className="card-text text-secondary">{feedback.message}</p>
                </div>
            </div>
        </div>
    );
};

export default ClientFeedBackInfo;