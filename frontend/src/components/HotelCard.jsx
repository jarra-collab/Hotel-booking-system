import React from "react";

import { Link } from "react-router-dom";

const HotelCard = ({
  hotel,
}) => {
  return (
    <div className="hotel-card">
      <img
        src={hotel.image_url}
        alt={hotel.name}
        width="300"
      />

      <h2>{hotel.name}</h2>

      <p>
        {hotel.location}
      </p>

      <p>
        Rating:
        {hotel.rating}
      </p>

      <Link
        to={`/hotels/${hotel.id}`}
      >
        <button>
          View Hotel
        </button>
      </Link>
    </div>
  );
};

export default HotelCard;