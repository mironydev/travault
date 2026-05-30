"use client";

import React from "react";
import { AlertDialog, Button, ModalTrigger } from "@heroui/react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { deleteDestination } from "@/app/lib/actions";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authClient } from "@/app/lib/auth-client";

const DeleteModal = ({ destiDetails }) => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const router = useRouter();
  const handleDelete = async (id) => {
    const res = await deleteDestination(id);
    if (res.deletedCount > 0) {
      toast.success("Travel Package deleted successfully.", {
        duration: 3000,
        iconTheme: {
          primary: "red",
        },
      });
      router.push("/destinations");
    } else {
      toast.error("Something went wrong :(");
    }
  };

  return (
    <AlertDialog>
      {user ? (
        <ModalTrigger>
          <button className="border border-red-500 text-red-500 py-2 pr-4 pl-3 flex items-center gap-2 active:scale-95 duration-75">
            <RiDeleteBin6Line />
            Delete
          </button>
        </ModalTrigger>
      ) : (
        <button
          onClick={() => {
            toast.error("Login to delete this package.");
          }}
          className="border border-red-500 text-red-500 py-2 pr-4 pl-3 flex items-center gap-2 active:scale-95 duration-75"
        >
          <RiDeleteBin6Line />
          Delete
        </button>
      )}

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100 rounded-none">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete package permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete{" "}
                <strong>{destiDetails.destinationName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button
                slot="close"
                variant="tertiary"
                className={"rounded-none"}
              >
                Cancel
              </Button>
              <Button
                slot="close"
                variant="danger"
                className={"rounded-none"}
                onClick={() => {
                  handleDelete(destiDetails._id);
                }}
              >
                Delete Package
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
};

export default DeleteModal;
