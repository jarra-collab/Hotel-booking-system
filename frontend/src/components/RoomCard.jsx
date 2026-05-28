import React from "react";

import { Link } from "react-router-dom";

const RoomCard = ({
  room,
}) => {
  return (
    <div className="room-card">
      <img
        src={room.image_url}
        alt={room.room_type}
        width="250"
      />

      <h3>
        {room.room_type}
      </h3>

      <p>
        Price: $
        {room.price}
      </p>

      <p>
        Capacity:
        {room.capacity}
      </p>

      <p>
        {room.is_available
          ? "Available"
          : "Unavailable"}
      </p>

      <Link
        to={`/rooms/${room.id}`}
      >
        <button>
          View Room
        </button>
      </Link>
    </div>
  );
};

export default RoomCard;