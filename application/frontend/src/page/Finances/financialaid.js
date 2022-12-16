
/* 
File Description: This file response to render the fincial aid page.

fincial aid page contains page contains the following module:
- Important Date
- Announcements

This file displays the important dates and announcments for the Financial Aid page.


*/


import React from "react";
import Navbars from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/Footer";
import ImportantDate from "../../components/Financialaid/ImportantDate";
import Announcements from "../../components/Financialaid/Announcements";
import Events from "../../components/Financialaid/Events";

function Financialaid() {
  const resizeObserver = new ResizeObserver(entries => {
    if (entries[0].target.scrollHeight > entries[0].target.clientHeight) {
      document.getElementsByClassName("footer")[0].style.position = "relative"
    } else {
      document.getElementsByClassName("footer")[0].style.position = "absolute"
    }
  }
  )
  resizeObserver.observe(document.body)
  return (
    <div>
      <Navbars></Navbars>
      <div className="container px-4 mt-4">
        <div className="row">
          {/* Important Date */}
          <ImportantDate></ImportantDate>
          {/* Announcements */}
          <Announcements></Announcements>
          <Events></Events>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Financialaid;
