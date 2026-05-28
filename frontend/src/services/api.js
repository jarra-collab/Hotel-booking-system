// ==============================
// AUTH API
// ==============================

export const loginUser = async (
  credentials
) => {
  const response = await fetch(
    "http://localhost:5001/api/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type":
          "application/json",
      },
      body: JSON.stringify(
        credentials
      ),
    }
  );

  return response.json();
};

export const registerUser =
  async (userData) => {
    const response =
      await fetch(
        "http://localhost:5001/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify(
            userData
          ),
        }
      );

    return response.json();
  };

// ==============================
// HOTELS API
// ==============================

export const getHotels = async (
  fetchWithAuth
) => {
  const response =
    await fetchWithAuth(
      "/api/hotels"
    );

  return response.json();
};

export const getHotelById =
  async (
    fetchWithAuth,
    hotelId
  ) => {
    const response =
      await fetchWithAuth(
        `/api/hotels/${hotelId}`
      );

    return response.json();
  };

export const searchHotels =
  async (
    fetchWithAuth,
    searchTerm
  ) => {
    const response =
      await fetchWithAuth(
        `/api/hotels/search?q=${searchTerm}`
      );

    return response.json();
  };

// ==============================
// ROOMS API
// ==============================

export const getRoomsByHotel =
  async (
    fetchWithAuth,
    hotelId
  ) => {
    const response =
      await fetchWithAuth(
        `/api/rooms/hotel/${hotelId}`
      );

    return response.json();
  };

export const getRoomById =
  async (
    fetchWithAuth,
    roomId
  ) => {
    const response =
      await fetchWithAuth(
        `/api/rooms/${roomId}`
      );

    return response.json();
  };

// ==============================
// BOOKINGS API
// ==============================

export const createBooking =
  async (
    fetchWithAuth,
    bookingData
  ) => {
    const response =
      await fetchWithAuth(
        "/api/bookings",
        {
          method: "POST",
          body: JSON.stringify(
            bookingData
          ),
        }
      );

    return response.json();
  };

export const getMyBookings =
  async (
    fetchWithAuth
  ) => {
    const response =
      await fetchWithAuth(
        "/api/bookings/my"
      );

    return response.json();
  };

export const cancelBooking =
  async (
    fetchWithAuth,
    bookingId
  ) => {
    const response =
      await fetchWithAuth(
        `/api/bookings/${bookingId}`,
        {
          method: "DELETE",
        }
      );

    return response.json();
  };

// ==============================
// ADMIN API
// ==============================

export const getAdminStats =
  async (
    fetchWithAuth
  ) => {
    const response =
      await fetchWithAuth(
        "/api/admin/stats"
      );

    return response.json();
  };