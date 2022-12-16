import Table from 'react-bootstrap/Table';
import { FcCheckmark } from 'react-icons/fc';
import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar';
function SearchClass({ navigateEnroll, checkMark, submit, message, results, check}) {
    return (
        <div className="card-group">
            <p className="card-text w-100">Find Your Classes</p>
            <SearchBar submit={submit} />
            <p className="card-text w-100">{message}</p>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Title</th>
                        <th>Days/Times</th>
                        <th>Location</th>
                        <th>Instructor</th>
                        <th>Units</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {results.map((search_result, index) => (
                        <tr>
                            <td>
                                {
                                    check[index] ?
                                        <FcCheckmark /> :
                                        <a type="submit" className="btn" id="button-color" onClick={() => { checkMark(search_result, index) }}> Select </a>
                                }
                            </td>
                            <td>
                                {search_result.short_name}
                            </td>
                            <td>
                                {search_result.meeting_days}
                            </td>
                            <td>
                                {search_result.location}
                            </td>
                            <td>
                                {search_result.professor}
                            </td>
                            <td>
                                {search_result.units}
                            </td>
                            <td>open</td>
                        </tr>
                    ))}
                </tbody>
            </Table>


            <div className="d-flex justify-content-center me-auto ms-auto ">
                <a type="submit" className="btn" id="button-color" onClick={navigateEnroll}> Save and Return to Your Current Class Schedule </a>
            </div>
        </div>
    )
}
export default SearchClass