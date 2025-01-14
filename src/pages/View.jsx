import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
      <div className='grid grid-cols-2 items-center h-screen'>
      <img height={'350px'} width={'250px'} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wHBoUh7YGeZ6wzo5_0tVI9kFeLD-L7d_XA&s" alt="no image" />

      </div>
      <h3 className='font-bold'>PID: id</h3>
      <h1 className='text-5xl font-bold'>Title</h1>
      <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
      <h4>Brand:</h4>
      <h4>Category:</h4>
      <p>
        <span className='font-bold'>Description</span>: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae voluptatum id illo cupiditate ex ad corrupti quae, blanditiis autem odio et! Dolor aspernatur voluptates accusantium voluptatibus provident, fuga ipsam soluta?
      </p>
      <div className='flex justify-between mt-5'>
        <button className='bg-blue-600 rounded text-white p-2'>Add to Wishlist</button>
        <button className='bg-green-600 rounded text-white p-2'>Add to Cart</button>


      </div>

    </div>
    </>
   )
}

export default View