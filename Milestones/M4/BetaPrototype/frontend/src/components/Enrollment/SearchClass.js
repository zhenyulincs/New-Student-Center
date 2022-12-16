import Table from 'react-bootstrap/Table';
import { FcCheckmark as FcCheckmate } from 'react-icons/fc';
import React from 'react'
import SearchBar from './SearchBar';
import SearchFilter from '../Navbar/components/SearchFilter';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function SearchClass({ search_filter, default_filter, filters, isLoadingFinish, timeConflict, setEnrollPage, searchSubmit, message, searchResults, enrollSubmit }) {
    const AddToShoppingCart = (e, id, course) => {
        timeConflict(course)
        enrollSubmit(e, id, "AddToShoppingCart")
    }
    return (

        <div className="card-group">
            
            <p className="card-text w-100">Find Your Classes</p>
            <Container>
                <Row>
                    <Col md="6" sm="6" lg="6" xs="6"><SearchBar submit={searchSubmit} /></Col>
                    <Col md="6" sm="6" lg="6" xs="6"><SearchFilter default_filter={default_filter} filters={filters} search_filter={search_filter} className="float-end"></SearchFilter></Col>
                </Row>
            </Container>

            <p className="card-text w-100">{message}</p>

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Select</th>
                        <th>Title</th>
                        <th>Days</th>
                        <th>Times</th>
                        <th>Location</th>
                        <th>Instructor</th>
                        <th>Units</th>
                        <th>Status</th>
                        <th>Rank</th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoadingFinish ?
                        <tr>
                            <td>
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </td>
                        </tr> :
                        searchResults.map((search_result) => (
                            <tr>
                                <td>
                                    {
                                        search_result.enrollment_status == 4 || search_result.enrollment_status == 3
                                            ?
                                            <a type="submit" className="btn" id="button-color" onClick={(e) => { AddToShoppingCart(e, search_result.id, search_result) }}>
                                                Add
                                            </a>
                                            :
                                            <FcCheckmate></FcCheckmate>
                                    }

                                </td>
                                <td>
                                    {search_result.short_name}
                                </td>
                                <td>
                                    {search_result.meeting_days}
                                </td>
                                <td>
                                    {search_result.start_time + "~" + search_result.end_time}
                                </td>
                                <td>
                                    {search_result.location}
                                </td>
                                <td>
                                    {search_result.professor_name}
                                </td>
                                <td>
                                    {search_result.units}
                                </td>
                                <td>open</td>
                                <td>{search_result.rating}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            <div className="d-flex justify-content-center me-auto ms-auto ">
                <a type="submit" className="btn" id="button-color" onClick={() => setEnrollPage(false)}> Save and Return to Your Current Class Schedule </a>
            </div>
        </div>
    )
}
export default SearchClass