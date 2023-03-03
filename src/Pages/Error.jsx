import { Link } from "react-router-dom";
function Error() {
  return (
    <div>
      <h1>404 page not found</h1>
      <Link to="/" className="btn btn-danger rounded-0 btn-sm text-white mt-3">
        Back to Home
      </Link>
    </div>
  );
}
export default Error;
