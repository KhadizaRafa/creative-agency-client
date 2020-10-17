import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className="contact-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h3 className="font-weight-bold">Let us handle your project, professionally.</h3>
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, ipsam.</small>
                    </div>
                    <div className="col-md-6 ml-auto">
                        <form>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your email address" />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your name / comapany's name" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" id="exampleFormControlTextarea1" placeholder="Your message" rows="3"></textarea>
                            </div>
                            <button className="btn btn-dark pl-4 pr-4 d-block mr-5 mt-3" type="submit">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center copyright">
                <small className="text-secondary">Copyright Orange Labs 2020</small>
            </div>
        </section>
    );
};

export default Contact;