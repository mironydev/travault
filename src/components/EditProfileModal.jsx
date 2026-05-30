"use client";

import React from "react";
import {
  Button,
  FieldError,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { BiPencil } from "react-icons/bi";
import { authClient } from "@/app/lib/auth-client";
import toast from "react-hot-toast";

const EditProfileModal = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const editedUserData = Object.fromEntries(formData.entries());

    const { error } = await authClient.updateUser({
      name: editedUserData.name || user.name,
      image: editedUserData.imageUrl || user.image,
    });

    if (!error) {
      toast.success("Profile updated successfully!");
    } else {
      toast.error("Something went wrong.");
    }
  };
  return (
    <Modal>
      <Button className={"rounded-none w-full bg-cyan-500"}>
        <BiPencil /> Edit Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md rounded-none">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Heading>Edit Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="pt-3 px-1">
              <Surface variant="default">
                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                  <TextField
                    className="w-full"
                    name="name"
                    type="text"
                    variant="secondary"
                  >
                    <Label>Name</Label>
                    <Input
                      placeholder="Enter your new name"
                      className={"rounded-none"}
                    />
                  </TextField>

                  <TextField
                    className="w-full"
                    name="imageUrl"
                    variant="secondary"
                  >
                    <Label>Photo URL</Label>
                    <Input
                      type="url"
                      placeholder="Enter your new image URL"
                      className={"rounded-none"}
                    />
                    <FieldError />
                  </TextField>
                  <Modal.Footer className="gap-4 mt-3">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="text-cyan-500 rounded-none"
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="bg-cyan-500 rounded-none"
                      slot="close"
                    >
                      Update Profile
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
};

export default EditProfileModal;
