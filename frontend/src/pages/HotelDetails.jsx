import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const HotelDetails = () => {
  const { id } = useParams();
  const { fetchWithAuth } = useAuth();

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const loadRooms = async () => {
      const res = await fetchWithAuth(`/api/rooms`);
      const data = await res.json();

      // filter rooms for this hotel
      setRooms(data.filter(r => r.hotel_id == id));
    };

    loadRooms();
  }, [id]);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">
        Hotel Rooms
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <div key={room.id} className="border p-4 rounded">
            <h3>{room.room_type}</h3>
            <p>${room.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelDetails;