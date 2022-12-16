/* 
File Description: This file response to render the footer components.
*/
// import necessary files
import React from 'react'
import './footer.css'
function Footer() {
  // HTML content about the footer
  return (
    <>
      <div className="footer">
        Copyright © 2022 Artificial Incompetence
        <br></br>
        <a className='text-center text-reset' href="http://52.146.22.198/" target="_blank">
          About the team
        </a>
      </div>
    </>

  );
}

export default Footer