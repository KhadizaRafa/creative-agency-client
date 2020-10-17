import React from 'react';
import banner from '../../../images/logos/Frame.png'
const HeaderMain = () => {
    return (
        <div className="container mt-4">
            <main className="row">
                <div className="col-md-4 pt-2">
                    <h1 className="p-1 mb-2 font-weight-bolder">Let's Grow Your Brand To The Next Level</h1>
                    <small>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi aliquam iure ipsam sequi! Necessitatibus magnam cupiditate totam suscipit harum! Nihil!</small>
                    <button className="btn btn-dark pl-4 pr-4 d-block mr-5 mt-3" type="submit">Hire Us</button>
                </div>
                <div className="col-md-6 offset-md-1">
                    <img src={banner} alt="banner" className="img-fluid w-100"></img>
                </div>
            </main>
        </div>
    );
};

export default HeaderMain;