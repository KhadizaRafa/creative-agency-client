import React, { useEffect, useState } from 'react';


const AdminServiceList = () => {

    const [userOrder, setUserOrder] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);

    useEffect(() => {
        fetch('https://protected-sands-79109.herokuapp.com/getClientOrders')
            .then(res => res.json())
            .then(result => {
                setUserOrder(result);
                setIsUpdate(false);
            })
    }, [isUpdate]);

    const handleChange = (id, e) => {
        const status = e.target.value;
        const order = { id, status };

        fetch(`https://protected-sands-79109.herokuapp.com/updateOrderStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    setIsUpdate(true);
                    alert('Status updated successfully')
                }
            }).catch(error => {
                alert('Error',error)
            })
    }

    return (
        <div>
            <div className="row mt-3 table-responsive">
                <div className="ml-2 mr-2">
                    <table style={{ backgroundColor: 'white', borderRadius: '10px' }} className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Email Id</th>
                                <th scope="col">Service</th>
                                <th scope="col">Project Details</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userOrder.length === 0 && <tr className="alert-danger p-5 m-5"><td colSpan="5"><p>No Orders Found</p></td></tr>
                            }
                            {
                                userOrder && userOrder.map(item =>
                                    <tr key={item._id}>
                                        <th>{item.name}</th>
                                        <td>{item.email}</td>
                                        <td>{item.serviceName}</td>
                                        <td>{item.projectDetail}</td>
                                        <td>
                                            <select className={(item.status === "Done" && "btn text-success") ||
                                                (item.status === "Pending" && "btn text-danger") ||
                                                (item.status === "On going" && "btn text-warning")}
                                                name="status" value={item.status}
                                                onChange={(e) => handleChange(item._id, e)} >
                                                <option className="dropdown-item" value="Done">Done</option>
                                                <option className="dropdown-item" value="Pending">Pending</option>
                                                <option className="dropdown-item" value="On going">On going</option>
                                            </select>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminServiceList;