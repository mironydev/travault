export const fetchDestinations = async () => {
  const res = await fetch(`${process.env.SERVER_URL}/destinations`);
  const data = await res.json();
  return data;
};

export const fetchDestinationDetails = async (id) => {
  const res = await fetch(`${process.env.SERVER_URL}/destinations/${id}`);
  const data = await res.json();
  return data;
};

export const fetchBookings = async (id) => {
  const res = await fetch(`${process.env.SERVER_URL}/booking/${id}`);
  const data = await res.json();
  return data;
};
