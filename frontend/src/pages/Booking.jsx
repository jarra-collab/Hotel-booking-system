import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Booking = () => {
  const { roomId } = useParams();
  const { fetchWithAuth, user } = useAuth();

  const [form, setForm] = useState({
    check_in: "",
    check_out: "",
  });

  const handleBook = async () => {
    const res = await fetchWithAuth("/api/bookings", {
      method: "POST",
      body: JSON.stringify({
        user_id: user?.id,
        room_id: roomId,
        ...form,
      }),
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="p-6">
      <h1>Book Room</h1>

      <input
        type="date"
        onChange={(e) =>
          setForm({ ...form, check_in: e.target.value })
        }
      />

      <input
        type="date"
        onChange={(e) =>
          setForm({ ...form, check_out: e.target.value })
        }
      />

      <button onClick={handleBook}>
        Confirm Booking
      </button>
    </div>
  );
};

export default Booking;