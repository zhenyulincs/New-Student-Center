import React, { useEffect, useState } from 'react'
import DisplayCurrentClass from './enrollPageComponents/DisplayCurrentClass';
import SearchClass from './enrollPageComponents/SearchClass';
import ShoppingCar from './enrollPageComponents/ShoppingCar';
import "./enroll.css"
import Navbars from '../../components/Navbar/navbar'
import Footer from '../../components/Navbar/Footer'
function Enroll() {


  const [search, setSearch] = useState(false);
  const [shoppingCarResults, setShoppingCarResults] = useState([]);
  const [shoppingCarFullResults, setShoppingCarFullResults] = useState([]);
  const [currentClass, setCurrentClass] = useState([]);
  const [check, setCheck] = useState([]);
  const [message, setMessage] = useState("");
  const [results, setResults] = useState([]);
  const [resultsIndex, setResultsIndex] = useState([]);
  const [resultsID, setResultsID] = useState([]);
  const [potentialClass, setPotentialClass] = useState([]);
  const [init, setInit] = useState(true);

  const clean_function = () => {
    let empty_counter = 0
    for (var i = 0; i < localStorage.length; i++) {
      if (localStorage.getItem(localStorage.key(i)) == "") {
        localStorage.removeItem(localStorage.key(i))
      }
      let localStorageTemp = localStorage.getItem(localStorage.key(i)).split(",")
      let length = localStorageTemp.length
      localStorageTemp = localStorageTemp.filter(item => !(item == ""));
      if (length != localStorageTemp.length) {
        localStorage.removeItem(localStorage.key(i))
      } else {
        localStorage.setItem(localStorage.key(i), localStorageTemp)
      }

    }
  }
  if (init) {

    clean_function()
    
    if ((localStorage.getItem("shopping_car") != undefined)) {
      const stored_shopping_car_item = localStorage.getItem("shopping_car").split(",")
      const stored_shopping_car_item_ID = localStorage.getItem("shopping_car_item_ID").split(",")
      let ShoppingCarResultsTemp = []
      for (var i = 0; i < stored_shopping_car_item.length; i += 2) {
        ShoppingCarResultsTemp.push([stored_shopping_car_item[i], stored_shopping_car_item[i + 1]])

      }
      setResultsID(arr => (stored_shopping_car_item_ID))
      setShoppingCarResults(arr => (ShoppingCarResultsTemp))
    }
    if ((localStorage.getItem("class_schedule") != undefined)) {
      const stored_class = localStorage.getItem("class_schedule").split(",")
      let class_Temp = []
      for (var i = 0; i < stored_class.length; i += 6) {
        class_Temp.push(
          [
            stored_class[i],
            stored_class[i + 1],
            stored_class[i + 2],
            stored_class[i + 3],
            stored_class[i + 4],
            stored_class[i + 5],
          ]

        )
      }
      setCurrentClass(arr => (class_Temp))
    }
    if ((localStorage.getItem("potentialClass") != undefined)) {
      const stored_class = localStorage.getItem("potentialClass").split(",")
      let class_Temp = []
      for (var i = 0; i < stored_class.length; i += 6) {
        class_Temp.push(
          [
            stored_class[i],
            stored_class[i + 1],
            stored_class[i + 2],
            stored_class[i + 3],
            stored_class[i + 4],
            stored_class[i + 5],
          ]

        )
      }
      setPotentialClass(arr => (class_Temp))


    }

    if ((localStorage.getItem("resultsIndex") != undefined)) {
      const stored_resultsIndex = localStorage.getItem("resultsIndex").split(",")
      let resultsIndex_temp = []
      for (var i = 0; i < stored_resultsIndex.length; i++) {
        resultsIndex_temp.push(stored_resultsIndex[i])
      }
      setResultsIndex(arr => (resultsIndex_temp))

    }

    if ((localStorage.getItem("resultsID") != undefined)) {
      const stored_resultsID = localStorage.getItem("resultsID").split(",")
      let resultsID_temp = []
      for (var i = 0; i < stored_resultsID.length; i++) {
        resultsID_temp.push(stored_resultsID[i])
      }
      setResultsID(arr => (resultsID_temp))

    }
    setInit(false)
    
  }

  const navigateEnroll = () => {
    if (search) {
      save_with_alert()
      setSearch(false)
    } else {
      setSearch(true)
    }
  };
  const select = (search_result, index) => {

    setShoppingCarResults(shoppingCarResults => [...shoppingCarResults, [search_result.short_name, search_result.meeting_days]])
    setShoppingCarFullResults(shoppingCarFullResults => [...shoppingCarFullResults, [search_result.short_name, search_result.name, search_result.meeting_days, search_result.location, search_result.professor, search_result.units]])
    setResultsIndex(resultsIndex => [...resultsIndex, index])
    setResultsID(resultsID => [...resultsID, search_result.class_number])
  }
  const cancel = (index) => {
    check[resultsIndex[index]] = false
    shoppingCarResults[index] = ""
    resultsIndex[index] = ""
    resultsID[index] = ""
    shoppingCarFullResults[index] = ""

    setShoppingCarResults(shoppingCarResults => [...shoppingCarResults])
    setShoppingCarFullResults(shoppingCarFullResults => [...shoppingCarFullResults])
    setResultsIndex(resultsIndex => [...resultsIndex])
    setResultsID(resultsID => [...resultsID])
    save()

  }
  const save = () => {

    if (shoppingCarResults.length > 0) {
      localStorage.setItem("shopping_car", shoppingCarResults)
      localStorage.setItem("shopping_car_item_ID", resultsID)
    }



  }
  const save_with_alert = () => {
    save()
    alert("Saving Success")
  }

  const drop = (index) => {
    check[resultsIndex[index]] = false
    const droped_class = currentClass[index]
    
    setPotentialClass(potentialClass => [...potentialClass,droped_class])
    
    
    currentClass[index] = undefined
    resultsID[index] = ""
    resultsIndex[index] = ""

    setResultsID(resultsID => [...resultsID])
    setResultsIndex(resultsIndex => [...resultsIndex])
    
    localStorage.setItem("potentialClass", potentialClass)
    localStorage.setItem("class_schedule", currentClass)
    localStorage.setItem("resultsID", resultsID)
    localStorage.setItem("resultsIndex", resultsIndex)
  }
  const addToSchedule = () => {
    clean_function()
    setCurrentClass(arr => (shoppingCarFullResults))
    
    setShoppingCarResults([])
    localStorage.setItem("class_schedule", shoppingCarFullResults)
    
    localStorage.setItem("resultsIndex", resultsIndex)
    localStorage.setItem("resultsID", resultsID)
    localStorage.removeItem("shopping_car")
    localStorage.removeItem("shopping_car_item_ID")
    alert("Add to Schedule Success")
  }

  const checkMark = (search_result, index) => {
    check[index] = true

    select(search_result, index)
  };
  const submit = (e, field) => {
    e.preventDefault();
    setMessage("Working on it, please be patient!")
    if (field == null || field == "") {
      setMessage("Please Enter the class search field")
      return
    }
    const body = {
      category: "course",
      field: field,
    };
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

      if (this.readyState == 4 && this.status == 200) {

        const return_data = JSON.parse(this.responseText)
        if (return_data.search_status.status) {
          setResults(return_data.search_status.result)
        }
        let result_array = []
        return_data.search_status.result.forEach((element, index) => {
          if (!resultsID.includes(element.class_number)) {
            result_array.push(false)
          } else {
            result_array.push(true)
          }

        });

        setCheck(arr => result_array)


        setMessage("")
      }
    }
    xhttp.open("POST", "http://52.146.22.198/backend/search");
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(new URLSearchParams(body).toString());
  }

  return (
    <div className='main-wrap'>
      <Navbars></Navbars>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>
        <div className="container">
          <div className='row'>
            <div className='col-8'>
              <div className="card mb-4" id="card-border">
                <div className="card-header" id="header-color">
                  <b>Enrollment</b>
                </div>
                <div className="card-body p-3 overflow-auto">
                  {
                    search ?
                      <SearchClass navigateEnroll={navigateEnroll} select={select} checkMark={checkMark} submit={submit} results={results} check={check} message={message}></SearchClass> :
                      <DisplayCurrentClass navigateEnroll={navigateEnroll} current_class={currentClass} potential_class={potentialClass} drop={drop}></DisplayCurrentClass>
                  }

                </div>

              </div>
            </div>
            <ShoppingCar courses={shoppingCarResults} cancel={cancel} addToSchedule={addToSchedule} search={search}></ShoppingCar>
          </div>

        </div>
      </div>

      <Footer></Footer>

    </div>
  )
}


export default Enroll