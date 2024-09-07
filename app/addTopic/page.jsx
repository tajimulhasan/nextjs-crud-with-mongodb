"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();
  const handleSubmitForm = async(e) => {
    e.preventDefault();

    if (!title || !description) {
      alert("Title and description are required");
      return;
    }
    try {
       const res = await fetch("/api/topics", {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({title, description})
      });
      if(res.ok) {
        router.push("/");
        router.refresh();
      }
      else{
        throw new Error("Failed to create a topic")
      }
    } catch (error) {
      console.log("Error posing", error);
      
    }
  };
  return (
    <div>
      <h2 className="text-center text-3xl font-bold my-3">Add Topic</h2>
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col gap-3 w-1/3  m-auto"
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          className=" p-2 border-2 rounded"
          placeholder="Tpye title.."
          type="text"
          name="text"
          id=""
        />
        <input
          onChange={(e) => setDescription(e.target.value)}
          className=" p-2 border-2 rounded"
          placeholder="Tpye description.."
          type="text"
          name="text"
          id=""
        />
        <input
          type="submit"
          className="bg-cyan-400 shadow-lg shadow-cyan-400/50 p-2 hover:bg-cyan-600 text-white cursor-pointer rounded-md"
          value="Add Topic"
        />
      </form>
    </div>
  );
}
