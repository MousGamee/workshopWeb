import React from 'react'
import Searchbar from './Searchbar'

const MobileSearchbar = () => {
    return (
    <>
        {/* mobile searchBar */}
        <div className="mobileSearch d-flex d-md-none justify-content-center align-items-center">
            <Searchbar />
        </div>
      </>
    )
}

export default MobileSearchbar
