interface IProductNumberProps {
  showingNumber: number
}

const List = ({showingNumber}: IProductNumberProps) => {

  console.log('showing Number', showingNumber);

  return (
    <section className="product-number">
      <h4 className="product-number-title">Number of Products: {showingNumber}</h4>
    </section>
  )
}

export default List
