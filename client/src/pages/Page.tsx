import { useParams } from "react-router-dom";
import milkImg from '../imgs/milk.png'
import { db } from '../data/db';
import { Link } from "react-router-dom";


const Product = () => {
  const { id } = useParams();

  const specificProduct = db.results.filter(p => p.id === id)[0];
 
  return (
    <>
      <Link to='/'>Back</Link>
        <section className="img-container">
          <img src={milkImg} alt='milk cart' className='milk-cart-img' />
        </section>
        <section className="product-name">
          {specificProduct.name}
        </section>
        <section className="product-info">
          <div>{specificProduct.type}</div>
          <div>{(specificProduct.storage === 1) ? `${specificProduct.storage} liter` : `${specificProduct.storage} liters`}</div>
        </section>
    </>
  )
}

export default Product
