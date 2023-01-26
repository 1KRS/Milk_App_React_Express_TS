import { Result } from '../interfaces';
import milkImg from '../imgs/milk.png'
import { useNavigate } from "react-router-dom";

interface IProductProps {
  product: Result
  showingMilkType: string
}

const Product = ({product}: IProductProps) => {

  const navigate = useNavigate();

  return (
    <>
      <section className="product-container" onClick={() => navigate(`${product.id}`)}>
        <section className="img-container">
          <img src={milkImg} alt='milk cart' className='milk-cart-img' />
        </section>
        <section className="product-name">
          {product.name}
        </section>
        <section className="product-info">
          <div>{product.type}</div>
          <div>{(product.storage === 1) ? `${product.storage} liter` : `${product.storage} liters`}</div>
        </section>
      </section>
    </>
  )
}

export default Product
