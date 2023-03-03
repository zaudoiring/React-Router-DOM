import { products } from "../data";
import { Link } from "react-router-dom";
function Products() {
  return (
    <div className="container">
      <div className="row">
       
          
            {products.map((product) => {
              return (
                <div className="col-md-3">
                <div className="card mt-2">
                  {" "}
                  <div key={product.id}>
                    {" "}
                    {product.title}{" "}
                    <div>
                      <img src={product.image} className="col-md-3" />
                    </div>
                    <Link
                      to={`/products/${product.id}`}
                      className="btn btn-info  btn-sm text-white mt-3 mb-3"
                    >
                      {" "}
                      More Info
                    </Link>
                  </div>{" "}
                </div>
                </div>
              );
            })}
          
        </div>
      </div>
   
  );
}
export default Products;
