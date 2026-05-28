import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } =
    useAuth();

  return (
    <nav>
      <h2>Hotel Booking</h2>

      <Link to="/">Home</Link>

      <Link to="/hotels">
        Hotels
      </Link>

      {user && (
        <>
          <Link to="/my-bookings">
            My Bookings
          </Link>

          <Link to="/admin">
            Admin
          </Link>

          <button onClick={logout}>
            Logout
          </button>
        </>
      )}

      {!user && (
        <>
          <Link to="/login">
            Login
          </Link>

          <Link to="/register">
            Register
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;