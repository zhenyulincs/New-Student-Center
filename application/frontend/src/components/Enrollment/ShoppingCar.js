import React from 'react'
import Table from 'react-bootstrap/Table';

function ShoppingCar({ timeConflictClass, isLoadingFinish, shoppingCarResults, enrollSubmit, enrollPage }) {
    const removeFromShoppingCart = (e, id) => {
        enrollSubmit(e, id, "removeFromShoppingCart")
    }
    const fullyEnrolled = (e) => {
        enrollSubmit(e, -1, "fullyEnrolled")
    }
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
                                <th>Days</th>
                                <th>Times</th>

                            </tr>
                        </thead>
                        <tbody>
                            {!isLoadingFinish ?
                                <tr>
                                    <td >
                                        <div class="spinner-border" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    </td>
                                </tr> : shoppingCarResults.map((course) => (
                                    <tr style={timeConflictClass.includes(course.id) ? {border:"red"} : {}}>
                                        <td>
                                            <a type="submit" className="btn" id="button-color" onClick={(e) => { removeFromShoppingCart(e, course.id) }}>
                                                Remove
                                            </a>
                                        </td>
                                        <td>{course.short_name}</td>
                                        <td>{course.meeting_days}</td>
                                        <td>{(course.start_time) + "~" + (course.end_time)}</td>
                                    </tr>
                                    
                                    
                                ))}

                        </tbody>
                    </Table>
                    {
                        shoppingCarResults.length > 0 && !enrollPage ?
                            <div className="d-flex justify-content-center me-auto ms-auto ">
                                <a type="submit" className="btn" id="button-color" onClick={(e) => { fullyEnrolled(e) }}> Add to My Schedule </a>
                            </div>

                            : ""
                    }

                </div>
            </div>
        </div>
    )
}
export default ShoppingCar