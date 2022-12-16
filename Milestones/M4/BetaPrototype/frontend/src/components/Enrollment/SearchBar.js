import React, { useState } from 'react'

function SearchBar({submit}) {
    const [field, setField] = useState('');
    const handleSearch = (e) => {
        submit(e,field)

      }
    return (
        <form action="" method="post" className="d-flex mb-2">
              <div className="input-group">
                <input className="form-control mr-sm-2 border-dark" name="field" list="classes" type="text" placeholder="Search" value={field} onChange={(e) => setField(e.target.value)} aria-label="Search" required/>
                <datalist id="classes">
                  <option value="Chinese">Class: Chinese</option>
                  <option value="English">Class: English</option>
                  <option value="Math">Class: Math</option>
                </datalist>
                <button className="btn btn-outline-dark me-2 my-2 my-sm-0" id="search-button" onClick={handleSearch} type="submit">
                  <span className="input-group-addon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
    )
}

export default SearchBar