import React, { useState } from "react";

import { useAuth } from "../context/AuthContext";

const BookingForm = ({
  roomId,
}) => {
  const { fetchWithAuth } =
    useAuth();

  const [formData, setFormData] =
    useState({
      check_in: "",
      check_out: "",
    });

  const [message, setMessage] =
    useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response =
        await fetchWithAuth(
          "/api/bookings",
          {
            method: "POST",
            body: JSON.stringify({
              room_id: roomId,
              ...formData,
            }),
          }
        );

      const data =
        await response.json();

      if (!response.ok) {
        setMessage(data.message);
        return;
      }

      setMessage(
        "Booking successful!"
      );

      setFormData({
        check_in: "",
        check_out: "",
      });
    } catch (error) {
      console.error(error);

      setMessage(
        "Booking failed"
      );
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Room</h2>

      <input
        type="date"
        name="check_in"
        value={
          formData.check_in
        }
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="check_out"
        value={
          formData.check_out
        }
        onChange={handleChange}
        required
      />

      <button type="submit">
        Confirm Booking
      </button>

      {message && (
        <p>{message}</p>
      )}
    </form>
  );
};

export default BookingForm;