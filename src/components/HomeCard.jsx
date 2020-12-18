import React from 'react'

const HomeCard = () => {
    return (
        <div className="col-12 col-md-6 col-lg-4 classCard mb-2 rounded">
            <img src="img/image1.jpg" className="img-fluid" alt=""/>
            <div className="description p-2">
                <div className="d-flex align-items-center justify-content-between">
                    <h4 className="title">Ma classe</h4>
                    <span className="h5">Teacher</span>
                </div>
                <span className="h6">Studio name</span>
                <div className="categories mt-1 mb-2">
                    <span class="badge bg-light text-dark mr-2">Afro</span>
                    <span class="badge bg-light text-dark">Hip-hop</span>
                </div>
                 <p className="mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio sed digvoluptatibus iure in consequuntur quae architecto maiores cumque odio quibusdam debitis? Qui nesciunt excepturi cum repudiandae, saepe iure.</p>
             </div>
        </div>

    )
}

export default HomeCard
