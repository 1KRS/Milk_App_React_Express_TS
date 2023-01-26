import { Routes, Route, useParams } from 'react-router-dom';

// import { Home } from '../components/List';
import { Result } from '../interfaces';
import milkImg from '../imgs/milk.png'

interface IProductProps {
  product: Result
}

const Product = ({product}: IProductProps) => {
  return (
    <>
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
