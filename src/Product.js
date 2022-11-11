import { style } from '@mui/system';
import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'
// import StarIcon from '@mui/icons-material/Star';

function Product({id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    // console.log('this is the basket >>> ', basket);
    // console.log(basket);
    
    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_, i) => (
                    // <StarIcon className='rating_icon'/>
                    <p className='star__emoji'>🌟</p>
                ))}
            </div>
        </div>

        <img style={{height: '100px', width: '100px'}}
            src={image}
            alt=''
        />

        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  )
}

export default Product;
