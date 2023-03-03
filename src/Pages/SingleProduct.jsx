import { useParams, Link } from "react-router-dom";
import { products } from "../data";
function SingleProduct() {
  const { productId } = useParams();

  const product = products.find((product) => product.id == productId);

  const { image, title } = product;
  return (
    <div>
      {/* <h1>Single Product id {productId}</h1>  */}
      <h3>{title}</h3>
      <img src={image} alt={title} className="col-md-3" />
      <br></br>
      <Link
        to="/products"
        className="btn btn-danger  btn-sm text-white mt-3 btn-block"
      >
        {" "}
        Back to Product
      </Link>
    </div>
  );
}

export default SingleProduct;
