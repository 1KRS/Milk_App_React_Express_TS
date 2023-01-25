import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Result } from '../interfaces';
import milkImg from '../imgs/milk.png'

interface IProductProps {
  product: Result
}

const Product = ({product}: IProductProps) => {
  return (
    <>
      {/* <Routes>
        <Route path='/' element={<Home />} />
      </Routes> */}
      <section className="product-container">
        <section className="img-container">
          <img src={milkImg} alt='milk cart' className='milk-cart-img' />
        </section>
        <section className="product-name">
          {product.name}
        </section>
        <section className="product-info">
        <div>{product.type}</div>
        <div>{product.storage}</div>
          
        </section>
      </section>
    </>
  )
}

export default Product



// {/* <h3 className="mobile-title">{item.name}</h3>
//           <img src={item.img}/>
//         </section>
//         <section className="product-details">
//           <h3 className="desktop-title">{item.name}</h3>
//           <h4>{item.price}</h4>
//           <p>{item.description}</p> */}
//           {/* <div className="product-actions">
//             <select className="quantity-selector">
//               {quantity.map(num => <option key= {num} value={num}>{num}</option>)}
//             </select>
//             <button className="addToCartBtn" onClick={cartHandler}>Add to Basket  </button>
//         </div>
//           {itemAdded}
//           {loginAlert} */}