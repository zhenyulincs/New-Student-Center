import React from 'react'
import Table from 'react-bootstrap/Table';

function ShoppingCar({ courses, cancel,addToSchedule,search }) {
    return (
        <div className="col-4">
            <div className="card mb-4" id="card-border">
                <div className="card-header" id="header-color"><b>ShoppingCar</b></div>
                <div className="card-body p-2 overflow-auto">
                    <Table striped bordered>
                        <thead>
                            <tr>
                                <th>Select</th>
                                <th>Title</th>
                                <th>Days/Times</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course, index) => (
                                course != "" ?
                                <tr>
                                    <td>
                                        <a type="submit" className="btn" id="button-color" onClick={() => { cancel(index) }}>
                                            Remove
                                        </a>
                                    </td>
                                    <td>{course[0]}</td>
                                    <td>{course[1]}</td>
                                </tr>
                                : ""
                            ))}

                        </tbody>
                    </Table>
                    {
                        courses.length > 0 && !search?
                            <div className="d-flex justify-content-center me-auto ms-auto ">
                                <a type="submit" className="btn" id="button-color" onClick={addToSchedule}> Add to My Schedule </a>
                            </div>
                            
                            : ""
                    }

                </div>
            </div>
        </div>
    )
}
export default ShoppingCar