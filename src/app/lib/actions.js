"use server";

import { revalidatePath } from "next/cache";

export const addDestination = async (formData) => {
  const newData = Object.fromEntries(formData.entries());
  newData.price = Number(newData.price);

  const res = await fetch(`${process.env.SERVER_URL}/destinations`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(newData),
  });
  const data = await res.json();
  return data;
};

export const editDestination = async (id, formData) => {
  const editedData = Object.fromEntries(formData.entries());
  editedData.price = Number(editedData.price);
  const res = await fetch(`${process.env.SERVER_URL}/destinations/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
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
  const res = await fetch(`${process.env.SERVER_URL}/destinations/${id}`, {
    method: "DELETE",
  });
  const data = await res.json();
  if (data.deletedCount > 0) {
    revalidatePath("/destinations");
  }
  return data;
};
