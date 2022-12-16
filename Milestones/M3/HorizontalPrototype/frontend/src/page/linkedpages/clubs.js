import React from 'react'
import "./clubs.css"
import Navbars from '../../components/Navbar/navbar'
import Footer from '../../components/Navbar/Footer'

function Clubs() {
  return (
    <div>
      <Navbars></Navbars>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="container px-4">
        <h2>Club Resources</h2>

        <div className="card-deck">
          <div className="row row-cols-1 row-cols-md-4 g-4">
            <div>
              <div className="col">
                <div className="card mb-4" id="clubs-card-border" type="button" data-bs-toggle="modal" data-bs-target="#club-popup">
                  <img className="card-img-top" src="../assets/books.jpg" alt="Card image cap" />
                  <div className="card-body p-2">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="col">
                <div className="card mb-4" id="clubs-card-border" type="button" data-bs-toggle="modal" data-bs-target="#club-popup">
                  <img className="card-img-top" src="../assets/books.jpg" alt="Card image cap" />
                  <div className="card-body p-2">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="col">
                <div className="card mb-4" id="clubs-card-border" type="button" data-bs-toggle="modal" data-bs-target="#club-popup">
                  <img className="card-img-top" src="../assets/books.jpg" alt="Card image cap" />
                  <div className="card-body p-2">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="col">
                <div className="card mb-4" id="clubs-card-border" type="button" data-bs-toggle="modal" data-bs-target="#club-popup">
                  <img className="card-img-top" src="../assets/books.jpg" alt="Card image cap" />
                  <div className="card-body p-2">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.This content is a little bit longer.</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                  </div>
                </div>
              </div>
            </div>

          </div>






        </div>
      </div>

      <div className="modal fade" id="club-popup" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Book Club</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Super random paragraphs to fill in space. This is where the longer club desrciptions will go.
              Her hair was a tangled mess which she tried to make presentable by putting in a lump on the top of her head.
              It didn't really work although it was a valiant attempt. While most people simply noticed the tangled mess
              on top of her head, what most people failed to understand that within the tangles mess was an entirely new year.
              That was her secret. She kept worlds on top of her head.
              It had been a late night. To be more correct, it had been an early morning. It was now 3:00 AM and George was
              just getting home. He wasn't sure if it had been worth it. He was supposed to have been finished by 10:00 PM,
              but his boss had implored him to stay and help when it was clear they weren't going to meet the 10:00 PM target
              time. So, he had stayed an extra 5 hours and lost a good night's sleep for something he didn't really believe
              in, but he did anyway because he was afraid if he refused he might lose his job.
              There was no time. He ran out of the door without half the stuff he needed for work, but it didn't matter.
              He was late and if he didn't make this meeting on time, someone's life may be in danger.
              He was aware there were numerous wonders of this world including the unexplained creations of humankind that
              howed the wonder of our ingenuity. There are huge heads on Easter Island. There are the Egyptian pyramids.
              There’s Stonehenge. But he now stood in front of a newly discovered monument that simply didn't make any sense
              and he wondered how he was ever going to be able to explain it.
            </div>
          </div>
        </div>
      </div>
      <div><Footer></Footer></div>
    </div>
  )
}

export default Clubs