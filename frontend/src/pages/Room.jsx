import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Room = () => {
  const { roomId } = useParams();
  const { fetchWithAuth } = useAuth();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const load = async () => {
      const res = await fetchWithAuth(`/api/rooms`);
      const data = await res.json();
      setRoom(data.find((r) => r.id == roomId));
    };
    load();
  }, [roomId]);

  if (!room) return <p>Loading...</p>;

  return (
    <div className="p-6">
      <h1 className="text-xl">{room.room_type}</h1>
      <p>${room.price}</p>

      <Link to={`/booking/${room.id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 mt-4">
          Book Now
        </button>
      </Link>
    </div>
  );
};

export default Room;