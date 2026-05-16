"use client";

import React, { useTransition } from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  ListBox,
  Modal,
  Surface,
  TextArea,
  TextField,
  Select,
  ModalTrigger,
} from "@heroui/react";
import { BiPencil } from "react-icons/bi";
import toast from "react-hot-toast";
import { editDestination } from "@/app/lib/actions";

const EditModal = ({ destiDetails }) => {
  const [isPending, startTransition] = useTransition();
  const {
    category,
    country,
    destinationName,
    duration,
    imageUrl,
    price,
    _id,
    description,
    departureDate,
  } = destiDetails;
  const onSubmit = async (formData) => {
    startTransition(async () => {
      const res = await editDestination(_id, formData);
      if (res.modifiedCount > 0) {
        toast.success("Travel Package edited successfully!", {
          duration: 3000,
        });
      } else {
        toast.error("Something went wrong :(");
      }
    });
  };

  return (
    <div>
      <Modal>
        <ModalTrigger>
          <button className="border border-black/40 py-2 pr-4 pl-3 flex items-center gap-2 outline-0">
            <BiPencil /> Edit
          </button>
        </ModalTrigger>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-2xl rounded-none px-8 py-10">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading className="text-3xl">
                  Update Travel Package
                </Modal.Heading>
                <p className="text-sm leading-5 text-muted">
                  Make changes to the travel package details below
                </p>
              </Modal.Header>
              <Modal.Body>
                <Surface variant="default">
                  <form
                    action={onSubmit}
                    className="px-4 pt-8 md:p-8 md:pb-0 space-y-8 mx-auto"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* Destination Name */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={destinationName}
                          name="destinationName"
                          isRequired
                        >
                          <Label>Destination Name</Label>
                          <Input
                            placeholder="Bali Paradise"
                            className="bg-base-200 rounded-none w-full"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Country */}
                      <TextField
                        defaultValue={country}
                        name="country"
                        isRequired
                      >
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
                          defaultValue={category}
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
                      <TextField
                        defaultValue={price}
                        name="price"
                        type="number"
                        isRequired
                      >
                        <Label>Price (USD)</Label>
                        <Input
                          type="number"
                          placeholder="1299"
                          className="bg-base-200 rounded-none"
                        />
                        <FieldError />
                      </TextField>

                      {/* Duration */}
                      <TextField
                        defaultValue={duration}
                        name="duration"
                        isRequired
                      >
                        <Label>Duration</Label>
                        <Input
                          placeholder="7 Days / 6 Nights"
                          className="bg-base-200 rounded-none"
                        />
                        <FieldError />
                      </TextField>

                      {/* Departure Date */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={departureDate}
                          name="departureDate"
                          type="date"
                          isRequired
                        >
                          <Label>Departure Date</Label>
                          <Input
                            type="date"
                            className="bg-base-200 rounded-none w-full"
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Image URL - Removed preview */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={imageUrl}
                          name="imageUrl"
                          isRequired
                        >
                          <Label>Image URL</Label>
                          <Input
                            type="url"
                            placeholder="https://example.com/bali-paradise.jpg"
                            className="bg-base-200 rounded-none w-full  "
                          />
                          <FieldError />
                        </TextField>
                      </div>

                      {/* Description */}
                      <div className="md:col-span-2">
                        <TextField
                          defaultValue={description}
                          name="description"
                          isRequired
                        >
                          <Label>Description</Label>
                          <TextArea
                            rows={3}
                            placeholder="Describe the travel experience..."
                            className="rounded-none bg-base-200 border border-black/20"
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
                      slot="close"
                    >
                      {isPending
                        ? "Editing Package..."
                        : "Editing Travel Package"}
                    </Button>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default EditModal;
