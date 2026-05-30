"use server";

import { revalidatePath } from "next/cache";
import { auth } from "./auth";
import { headers } from "next/headers";

export const addDestination = async (formData) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const newData = Object.fromEntries(formData.entries());
  newData.price = Number(newData.price);

  const res = await fetch(`${process.env.SERVER_URL}/destinations`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newData),
  });
  const data = await res.json();
  return data;
};

export const editDestination = async (id, formData) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const editedData = Object.fromEntries(formData.entries());
  editedData.price = Number(editedData.price);
  const res = await fetch(`${process.env.SERVER_URL}/destinations/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(editedData),
  });
  const data = await res.json();
  if (data.modifiedCount > 0) {
    revalidatePath(`/destinations/${id}`);
  }
  return data;
};

export const deleteDestination = async (id) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.SERVER_URL}/destinations/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  if (data.deletedCount > 0) {
    revalidatePath("/destinations");
  }
  return data;
};

export const addBooking = async (bookingData) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.SERVER_URL}/booking`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(bookingData),
  });
  const data = await res.json();
  return data;
};

export const deleteBooking = async (id) => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const res = await fetch(`${process.env.SERVER_URL}/booking/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  revalidatePath("/my-bookings");
  return data;
};
