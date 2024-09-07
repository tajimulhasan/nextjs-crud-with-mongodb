"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
export default function EditTopicForm({topicData, topicId}){
  const [newTitle, setNewTitle] = useState(topicData.topic.title);
  const [newDescription, setNewDescripton] = useState(topicData.topic.description);
const router = useRouter();

  const handleUpdateSubmit = async(e) =>{
    e.preventDefault();
    try {
      const res = await fetch(`/api/topics/${topicId}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({newTitle, newDescription})
      });

      if(!res.ok){
        throw new Error ("Failed to update topic")
      }
      router.push("/")
      router.refresh();
    } catch (error) {
      console.log(error);
      
    }
  }
    return(
        <div>
            <h2 className="text-center text-3xl font-bold my-3">Edit Topic</h2>
            <form onSubmit={handleUpdateSubmit} className="flex flex-col gap-3 w-1/3  m-auto">
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        className=" p-2 border-2 rounded"
        placeholder="Tpye title.."
        type="text"
        name="text"
        id=""
      />
      <input
          onChange={(e) => setNewDescripton(e.target.value)}
          value={newDescription}
        className=" p-2 border-2 rounded"
        placeholder="Tpye description.."
        type="text"
        name="text"
        id=""
      />
      <input type="submit" className="bg-cyan-400 shadow-lg shadow-cyan-400/50 p-2 hover:bg-cyan-600 text-white cursor-pointer rounded-md" value="Update" />
    </form> 
        </div>
    );
}