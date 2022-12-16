import Dropdown from 'react-bootstrap/Dropdown';
import React from 'react'

function SearchFilter({ default_filter,filters,search_filter,className }) {
    return (
        <Dropdown className={className}>
            <Dropdown.Toggle className='navbar-search-filter'>
                {default_filter}
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ right: 0, left: "auto" }}>
                {
                    filters.map((filter)=>(
                        <Dropdown.Item onClick={() => { search_filter(filter) }}>{filter}</Dropdown.Item>
                    ))
                }
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SearchFilter