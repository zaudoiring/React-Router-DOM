import { Navigate } from "react-router-dom";
function ProtectRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectRoute;
