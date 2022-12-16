import React from 'react'
import './footer.css'

// var style = {
//   backgroundColor: "#F8F8F8",
//   borderTop: "1px solid #E7E7E7",
//   textAlign: "center",
//   padding: "20px",
//   position: "fixed",
//   left: "0",
//   bottom: "0",
//   height: "80px",
//   width: "100%",
// }
// var phantom = {
//   display: 'block',
//   padding: '20px',
//   height: '60px',
//   width: '100%',
// }

function Footer() {

  return (
    <>
    <div className="footer">
    {/* <div style={phantom} /><div style={style}> */}
      Copyright © 2022 Artificial Incompetence
      <a className='text-center text-reset p-4' href="http://52.146.22.198/" target="_blank">
        <p>About the team</p>
      </a>
    </div>
    </>

  );
}

export default Footer