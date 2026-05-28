import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const AdminDashboard = () => {
  const { fetchWithAuth } = useAuth();

  const [hotels, setHotels] = useState([]);
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);

  const [hotelForm, setHotelForm] = useState({});
  const [roomForm, setRoomForm] = useState({});

  // Load all data
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const h = await fetchWithAuth("/api/hotels");
    const r = await fetchWithAuth("/api/rooms");
    const b = await fetchWithAuth("/api/bookings");

    setHotels(await h.json());
    setRooms(await r.json());
    setBookings(await b.json());
  };

  // Create Hotel
  const createHotel = async () => {
    await fetchWithAuth("/api/hotels", {
      method: "POST",
      body: JSON.stringify(hotelForm),
    });

    setHotelForm({});
    loadData();
  };

  // Create Room
  const createRoom = async () => {
    await fetchWithAuth("/api/rooms", {
      method: "POST",
      body: JSON.stringify(roomForm),
    });

    setRoomForm({});
    loadData();
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* CREATE HOTEL */}
      <div className="border p-4 mb-6">
        <h2 className="font-bold mb-2">Create Hotel</h2>

        <input
          placeholder="Hotel Name"
          className="border p-2 mr-2"
          onChange={(e) =>
            setHotelForm({ ...hotelForm, name: e.target.value })
          }
        />

        <input
          placeholder="Location"
          className="border p-2 mr-2"
          onChange={(e) =>
            setHotelForm({ ...hotelForm, location: e.target.value })
          }
        />

        <button
          onClick={createHotel}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Add Hotel
        </button>
      </div>

      {/* CREATE ROOM */}
      <div className="border p-4 mb-6">
        <h2 className="font-bold mb-2">Create Room</h2>

        <input
          placeholder="Hotel ID"
          className="border p-2 mr-2"
          onChange={(e) =>
            setRoomForm({ ...roomForm, hotel_id: e.target.value })
          }
        />

        <input
          placeholder="Room Type"
          className="border p-2 mr-2"
          onChange={(e) =>
            setRoomForm({ ...roomForm, room_type: e.target.value })
          }
        />

        <input
          placeholder="Price"
          className="border p-2 mr-2"
          onChange={(e) =>
            setRoomForm({ ...roomForm, price: e.target.value })
          }
        />

        <button
          onClick={createRoom}
          className="bg-green-500 text-white px-4 py-2"
        >
          Add Room
        </button>
      </div>

      {/* HOTELS LIST */}
      <div className="mb-6">
        <h2 className="font-bold">Hotels</h2>
        {hotels.map((h) => (
          <div key={h.id} className="border p-2 mt-2">
            {h.name} - {h.location}
          </div>
        ))}
      </div>

      {/* ROOMS LIST */}
      <div className="mb-6">
        <h2 className="font-bold">Rooms</h2>
        {rooms.map((r) => (
          <div key={r.id} className="border p-2 mt-2">
            Hotel: {r.hotel_id} | {r.room_type} | ${r.price}
          </div>
        ))}
      </div>

      {/* BOOKINGS LIST */}
      <div>
        <h2 className="font-bold">Bookings</h2>
        {bookings.map((b) => (
          <div key={b.id} className="border p-2 mt-2">
            User: {b.user_id} | Room: {b.room_id} | {b.status}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;