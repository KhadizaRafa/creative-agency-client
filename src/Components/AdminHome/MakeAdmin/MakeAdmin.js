import React, { useState } from 'react';


const MakeAdmin = () => {

    const [email, setEmail] = useState('');

    const handleBlur = (e) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e) => {
        fetch('https://protected-sands-79109.herokuapp.com/addAdmin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                   alert('Success')
                }
            }).catch(error => {
              alert('Error: ' + error)
            })
        e.preventDefault();
    }
    
    return (
        <section>
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <h5>Email</h5>
                        <div class="form-group d-flex">
                            <input onBlur={handleBlur} type="email" class="form-control" id="exampleFormControlInput1" placeholder="john@gmail.com" required  />
                            <button class="btn btn-success ml-2 d-block" type="submit">Submit</button>
                        </div>          
                    </form>
                </div>
            </div>
        </div>
    </section>
    );
};

export default MakeAdmin;