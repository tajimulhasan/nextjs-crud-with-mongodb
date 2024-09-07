"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

export default function RemoveBtn({ id, title }) {
  const router = useRouter();
  const removeTopic = async () => {
    const res = await fetch(`/api/topics?id=${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      router.refresh();
    }
  };
  const modalId = `modal-${id}`;
  return (
    <>
      <label htmlFor={modalId}>
        <HiOutlineTrash className="text-red-500 cursor-pointer" size={24} />
      </label>
      <input type="checkbox" id={modalId} className="modal-toggle" />
      <div className="modal" role="dialog">
        <div className="modal-box">
        <h3 className="text-lg font-bold">Are you sure you want to delete <span className="text-cyan-400">{title}</span>?</h3>
          <div  className="modal-action">
          <button
            onClick={() => removeTopic()}
            className="btn btn-error btn-sm"
          >
            Confirm
          </button>
          <label htmlFor={modalId} className="btn btn-sm">
            Close
          </label>
          </div>
        </div>
      </div>
    </>
  );
}
