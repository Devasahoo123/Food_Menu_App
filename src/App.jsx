import { useState } from 'react'
// import './App.css'
import Menu from './Components/Menu'
import GalleryReact from './Components/GalleryReact'
import './Components/Galery.css';


function App() {
  const [items, setItems] = useState(Menu)
  const filterItem=(catItem)=>{
    const updatedItems = Menu.filter((curEkm)=>{
      return curEkm.category===catItem ;
    });
    setItems(updatedItems);
}

  return (
    <>
      <div className='Header'>
            <h1 className='mt-5 text-center main-heding'>Order Your Dishes</h1>
            <hr />
            <div className='menu-tabs container'>
            <div className='menu-tab d-flex justify-content-around'>
                <button className='btn btn-warning' onClick={()=>filterItem('breakfast')}>BreakFast</button>
                <button className='btn btn-warning' onClick={()=>filterItem('lunch')}>Lunch</button>
                <button className='btn btn-warning'onClick={()=>filterItem('snack')}>Snack</button>
                <button className='btn btn-warning'onClick={()=>filterItem('dinner')}>Dinner</button>
                <button className='btn btn-warning'onClick={()=>setItems(Menu)}>All Item</button>
            </div>
            </div>
        </div>
        <br />
        <div className='Cards'>
          {items.map((menuItem) => (
            <GalleryReact
              key={menuItem.id}
              img={menuItem.image}
              name={menuItem.name}
              category={menuItem.category}
              price={menuItem.price}
              disc={menuItem.description}
            />
          ))}
        </div>
        
        
    </>
  )
}

export default App
