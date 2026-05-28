import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const Hotels = () => {
  const { fetchWithAuth } = useAuth();
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetchWithAuth("/api/hotels");
      setHotels(await res.json());
    };

    load();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        All Hotels
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {hotels.map((h) => (
          <div key={h.id} className="border p-4 rounded">
            <h3 className="font-bold">{h.name}</h3>
            <p>{h.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;