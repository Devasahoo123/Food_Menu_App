import React from 'react'
import './Galery.css'
function GalleryReact(props) {
  return (
    <>
        
        {/* My main item section */}
        <div className='menu-item container-fluid mt-5'>
            <div className='row'>
              <div className='col-11 mx-auto'>
                <div className='row my-5'>
                  <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4'>
                      <div className='row item-inside'>
                        {/* for images */}
                          <div className='col-12 col-md-12 col-lg-4 img-div'></div>
                          <img src={props.img} alt='menuPic' className='img-fluid'/>
                      </div>
                      {/* menu item discripton */}
                      <div className='col-12 col-md-12 col-lg-8'>
                        <div className='main-title pt-4 pb-3'>
                          <h2 className='namer'>{props.name}</h2>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className='menu-price-book'>
                          <div className='price-book-divide d-flex justify-content-around'>
                            <p>Price: ₹ {props.price}</p>
                            <a href="#">
                              <button className='btn1 btn-primeary'>Order Now</button>
                            </a>

                          </div>
                          <p className='dis'> <span><strong>dis: </strong></span>{props.disc}</p>
                        </div>

                      </div>
                  </div>
                </div>
              </div>

            </div>
        </div>
    </>
  )
}

export default GalleryReact
