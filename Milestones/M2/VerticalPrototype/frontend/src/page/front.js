
// import 'bootstrap/dist/css/bootstrap.min.css'
import "./front.css"
import Navbars from '../components/Navbar/navbar'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function front() {
    const background = {
        background: "no-repeat url(../assets/university.svg)",
        backgroundSize: "100vw 100vh",
        overflow: "scroll"
    }

    return (
        <section className='vh-100 overflow-auto' style={background}>
            <div id='container'>
                <h1 id='word'>Your Best Student Center
                <a id='link' href="./login"><p>Start Here</p></a>
                </h1>

            </div>
         </section>
        // <section>
        //     <Navbars></Navbars>
        //     <Container id="front_contain">
        //         <Row className="justify-content-md-center">
        //             <Col xs lg="2">
        //                 <div id="front_login_button">
        //                     <h2>Login</h2>
        //                     <a href="./login"><Button variant="primary">Login</Button></a>{ }
        //                 </div>
        //             </Col>
        //             <Col>
        //                 <div id="front_login_intro">
        //                     <h2>What is Student Center</h2>
        //                     <div>
        //                         <p>

        //                         </p>
        //                     </div>
        //                 </div>
        //             </Col>
        //             <Col>
        //                 <div id="front_login_history">
        //                     <h2>Updated History</h2>
        //                     <div>
        //                         <ul>
        //                             <li>
        //                                 Finished Documentation - 09/21/2022
        //                             </li>
        //                             <li>
        //                                 Finished Vertical Prototype - 10/20/2022
        //                             </li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </Col>
        //         </Row>
        //     </Container>
        // </section>

    )

}
export default front;