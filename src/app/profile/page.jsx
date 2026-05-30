import Profile from "@/components/Profile";
import React from "react";
import { auth } from "../lib/auth";
import { headers } from "next/headers";
import { fetchBookings } from "../lib/fetch";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const userId = user?.id;
  const totalBookings = await fetchBookings(userId);

  return (
    <div className="container mx-auto px-4 mb-16 mt-6">
      <div>
        <h1 className="text-center sm:text-left text-4xl md:text-5xl/tight font-extralight">
          My Profile
        </h1>
        <p className="text-center sm:text-left text-gray-600 pt-2 pb-5">
          Manage your account settings and travel preferences
        </p>
      </div>

      <Profile totalBookings={totalBookings} />
    </div>
  );
};

export default ProfilePage;
