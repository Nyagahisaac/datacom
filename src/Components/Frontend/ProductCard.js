import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { addToCart } from '../../App/features/cartSlice';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

const ProductCard = ({product}) => {
    const { id, category, title, price, image } = product;

    const dispatch = useDispatch()

    const { items } = useSelector(state => state.cart)
    const [ itemsInCart, setItemsInCart ] = useState(false)
    
    useEffect(() => {
      const isExist = items.find(item => item.id === id)
      if(isExist) {
        setItemsInCart(true)
      } 
      // eslint-disable-next-line
    },[items])

    return (
    <div className="card mw-100 mb-2 border-0 shadow mt-5 " >
        <div className='p-1 pt-2 d-flex mw-100 mb-2' style={{height: "200px"}} >
            <img src={image} className="mx-auto mw-100 mh-100" alt="" />
        </div>
        <Link to={`/products/${category}/${id}`}>
        <div className="card-body text-center">
            <h6 className="card-title " style={{fontSize:'20px',fontFamily:'Tajawal,Helvetica,Arial,sans-serif',fontWeight:'500',color:'#1a1a1a'}}>{title.length < 21 ? title : `${title.slice(0,20)}. . .`}</h6>
            <p className="card-text mb-1">Price: {price} kshs.</p>
            <div className='d-flex justify-content-between align-items-center'>
               
                <button
                 className={`btn btn ${itemsInCart ? 'btn-outline-warning' : 'btn-outline-primary ' } `}
                 onClick={() => {dispatch(addToCart({ id, title, price, image }))}}
                >
                    <AddShoppingCartOutlinedIcon/>
                </button>
            </div>
        </div>
        </Link>
    </div>
  )
}

export default ProductCard