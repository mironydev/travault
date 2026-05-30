"use client";

import React, { useTransition } from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  TextArea,
  TextField,
  Select,
} from "@heroui/react";
import { motion } from "framer-motion";
import { addDestination } from "@/app/lib/actions";
import toast from "react-hot-toast";
import { authClient } from "@/app/lib/auth-client";
import Link from "next/link";

const AddDestination = () => {
  const [isPending, startTransition] = useTransition();

  const { data: session, isPending: sessionLoading } = authClient.useSession();

  const user = session?.user;

  const onSubmit = async (formData) => {
    startTransition(async () => {
      const res = await addDestination(formData);

      if (res.insertedId) {
        toast.success("Travel Package added successfully!", {
          duration: 3000,
        });
      } else {
        toast.error("Something went wrong :(");
      }
    });
  };

  return (
    <motion.div
      className="container mx-auto mt-10 mb-14"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-4xl md:text-5xl font-extralight px-6 text-center"
      >
        Add New Travel Package
      </motion.h2>

      {sessionLoading ? (
        <div className="flex justify-center py-20">
          <div className="loading loading-spinner loading-lg"></div>
        </div>
      ) : !user ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="py-10 bg-base-300 text-center mt-6 mx-4"
        >
          <p>
            <Link href={"/login"} className="underline text-blue-950">
              Login
            </Link>{" "}
            to add destination.
          </p>
        </motion.div>
      ) : (
        <motion.form
          action={onSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="px-8 py-8 md:p-8 space-y-8 max-w-xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div whileHover={{ y: -2 }} className="md:col-span-2">
              <TextField name="destinationName" isRequired>
                <Label>Destination Name</Label>

                <Input
                  placeholder="Bali Paradise"
                  className="bg-base-200 rounded-none"
                />

                <FieldError />
              </TextField>
            </motion.div>

            <motion.div whileHover={{ y: -2 }}>
              <TextField name="country" isRequired>
                <Label>Country</Label>

                <Input
                  placeholder="Indonesia"
                  className="bg-base-200 rounded-none"
                />

                <FieldError />
              </TextField>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="not-daisyui">
              <Select
                name="category"
                isRequired
                className="w-full"
                placeholder="Select category"
              >
                <Label className="pb-0.5 text-sm">Category</Label>

                <Select.Trigger className="bg-base-200 rounded-none w-full">
                  <Select.Value />
                  <Select.Indicator />
                </Select.Trigger>

                <Select.Popover className={"rounded-none"}>
                  <ListBox>
                    <ListBox.Item
                      id="Beach"
                      textValue="Beach"
                      className="rounded-none"
                    >
                      Beach
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="Mountain"
                      textValue="Mountain"
                      className="rounded-none"
                    >
                      Mountain
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="City"
                      textValue="City"
                      className="rounded-none"
                    >
                      City
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="Adventure"
                      textValue="Adventure"
                      className="rounded-none"
                    >
                      Adventure
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="Cultural"
                      textValue="Cultural"
                      className="rounded-none"
                    >
                      Cultural
                      <ListBox.ItemIndicator />
                    </ListBox.Item>

                    <ListBox.Item
                      id="Luxury"
                      textValue="Luxury"
                      className="rounded-none"
                    >
                      Luxury
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  </ListBox>
                </Select.Popover>
              </Select>
            </motion.div>

            <motion.div whileHover={{ y: -2 }}>
              <TextField name="price" type="number" isRequired>
                <Label>Price (USD)</Label>

                <Input
                  type="number"
                  placeholder="1299"
                  className="bg-base-200 rounded-none"
                />

                <FieldError />
              </TextField>
            </motion.div>

            <motion.div whileHover={{ y: -2 }}>
              <TextField name="duration" isRequired>
                <Label>Duration</Label>

                <Input
                  placeholder="7 Days / 6 Nights"
                  className="bg-base-200 rounded-none"
                />

                <FieldError />
              </TextField>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="md:col-span-2">
              <TextField name="departureDate" type="date" isRequired>
                <Label>Departure Date</Label>

                <Input type="date" className="bg-base-200 rounded-none" />

                <FieldError />
              </TextField>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="md:col-span-2">
              <TextField name="imageUrl" isRequired>
                <Label>Image URL</Label>

                <Input
                  type="url"
                  placeholder="https://example.com/bali-paradise.jpg"
                  className="bg-base-200 rounded-none"
                />

                <FieldError />
              </TextField>
            </motion.div>

            <motion.div whileHover={{ y: -2 }} className="md:col-span-2">
              <TextField name="description" isRequired>
                <Label>Description</Label>

                <TextArea
                  placeholder="Describe the travel experience..."
                  className="rounded-none bg-base-200"
                />

                <FieldError />
              </TextField>
            </motion.div>
          </div>

          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }}>
            <Button
              type="submit"
              variant="outline"
              isDisabled={isPending}
              className="rounded-none w-full bg-cyan-500 text-white"
            >
              {isPending ? "Adding Package..." : "Add Travel Package"}
            </Button>
          </motion.div>
        </motion.form>
      )}
    </motion.div>
  );
};

export default AddDestination;
