import React from "react";

const BookingCard = ({
  booking,
  onCancel,
}) => {
  return (
    <div className="booking-card">
      <h3>
        {booking.hotel_name}
      </h3>

      <p>
        Room:
        {booking.room_type}
      </p>

      <p>
        Check In:
        {booking.check_in}
      </p>

      <p>
        Check Out:
        {booking.check_out}
      </p>

      <p>
        Total Price: $
        {booking.total_price}
      </p>

      <button
        onClick={() =>
          onCancel(booking.id)
        }
      >
        Cancel Booking
      </button>
    </div>
  );
};

export default BookingCard;