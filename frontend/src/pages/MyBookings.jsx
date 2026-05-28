import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const MyBookings = () => {
  const { fetchWithAuth, user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetchWithAuth("/api/bookings");
      const data = await res.json();

      setBookings(
        data.filter(b => b.user_id === user?.id)
      );
    };

    load();
  }, []);

  return (
    <div className="p-6">
      <h1>My Bookings</h1>

      {bookings.map((b) => (
        <div key={b.id} className="border p-3">
          <p>Room: {b.room_id}</p>
          <p>Status: {b.status}</p>
        </div>
      ))}
    </div>
  );
};

export default MyBookings;