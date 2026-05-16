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
import { addDestination } from "@/app/lib/actions";
import toast from "react-hot-toast";

const AddDestination = () => {
  const [isPending, startTransition] = useTransition();
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
    <div className="container mx-auto mt-10">
      <h2 className="text-5xl font-extralight px-6">Add New Travel Package</h2>
      <form
        action={onSubmit}
        className="px-4 py-8 md:p-8 space-y-8 max-w-xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Destination Name */}
          <div className="md:col-span-2">
            <TextField name="destinationName" isRequired>
              <Label>Destination Name</Label>
              <Input
                placeholder="Bali Paradise"
                className="bg-base-200 rounded-none"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Country */}
          <TextField name="country" isRequired>
            <Label>Country</Label>
            <Input
              placeholder="Indonesia"
              className="bg-base-200 rounded-none"
            />
            <FieldError />
          </TextField>

          {/* Category - Updated Select Component */}
          <div>
            <Select
              name="category"
              isRequired
              className="w-full"
              placeholder="Select category"
            >
              <Label>Category</Label>
              <Select.Trigger className="bg-base-200 rounded-none">
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
          </div>

          {/* Price */}
          <TextField name="price" type="number" isRequired>
            <Label>Price (USD)</Label>
            <Input
              type="number"
              placeholder="1299"
              className="bg-base-200 rounded-none"
            />
            <FieldError />
          </TextField>

          {/* Duration */}
          <TextField name="duration" isRequired>
            <Label>Duration</Label>
            <Input
              placeholder="7 Days / 6 Nights"
              className="bg-base-200 rounded-none"
            />
            <FieldError />
          </TextField>

          {/* Departure Date */}
          <div className="md:col-span-2">
            <TextField name="departureDate" type="date" isRequired>
              <Label>Departure Date</Label>
              <Input type="date" className="bg-base-200 rounded-none" />
              <FieldError />
            </TextField>
          </div>

          {/* Image URL - Removed preview */}
          <div className="md:col-span-2">
            <TextField name="imageUrl" isRequired>
              <Label>Image URL</Label>
              <Input
                type="url"
                placeholder="https://example.com/bali-paradise.jpg"
                className="bg-base-200 rounded-none"
              />
              <FieldError />
            </TextField>
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label>Description</Label>
              <TextArea
                placeholder="Describe the travel experience..."
                className="rounded-none bg-base-200"
              />
              <FieldError />
            </TextField>
          </div>
        </div>

        {/* Buttons */}

        <Button
          type="submit"
          variant="outline"
          isDisabled={isPending}
          className=" rounded-none w-full bg-cyan-500 text-white"
        >
          {isPending ? "Adding Package..." : "Add Travel Package"}
        </Button>
      </form>
    </div>
  );
};

export default AddDestination;
