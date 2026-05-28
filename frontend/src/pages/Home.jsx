import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Home = () => {
  const { fetchWithAuth } = useAuth();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const loadHotels = async () => {
      const res = await fetchWithAuth("/api/hotels");
      const data = await res.json();
      setHotels(data);
    };

    loadHotels();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">
        Welcome to Hotel Booking
      </h1>

      <p className="text-gray-600 mb-6">
        Find and book luxury hotels easily.
      </p>

      <h2 className="text-xl font-semibold mb-4">
        Featured Hotels
      </h2>

      {hotels.length === 0 ? (
        <p>No hotels available</p>
      ) : (
        <div className="grid grid-cols-3 gap-4">
          {hotels.map((hotel, index) => (
            <div key={index} className="border p-4 rounded-lg shadow">
              <h3 className="font-bold">{hotel.name}</h3>
              <p>{hotel.location}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;