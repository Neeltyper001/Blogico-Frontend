import React from 'react'
import './index.css'

const Category = ({categoryName}) => {
  return (
        <span className='category-span'>
            {categoryName}
        </span>
  )
}

export default Category