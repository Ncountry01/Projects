import React from 'react' 
import ProductApp from '../components/Product';

const HomeApp= () => {


    return (
        <>
<div className='hero'>
<div className="card bg-secondary text-white">
  <img src=""
   className="card-img bg-no repeat" 
  alt="Background" height='300px' />
  <div className='container'>
  <div className="card-img-overlay d-flex  flex-column justify-content-center">
    <h5 className="card-title display-3 fw-bolder mb-0">New Seasonal Arrivals Available</h5>
    <p className="card-text lead fs-2 fw-bold">
CHECK OUT ALL THE TRENDS

    </p>
  </div>
  </div>
  <ProductApp />
</div>
</div>

        </>
    )
}

export default HomeApp;