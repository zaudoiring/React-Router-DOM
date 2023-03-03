import { Outlet } from "react-router-dom";
function Dashboard({ user }) {
  return (
    <div>
      <h2> welcome to dashboard {user}</h2>
      <Outlet />
    </div>
  );
}
export default Dashboard;
