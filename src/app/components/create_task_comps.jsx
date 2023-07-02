import axios from "axios";
import { useEffect, useState } from "react";

export default function createTask() {
    const [id, setid] = useState("");
    const [project, setProject] = useState("");
    const [desc, setDescription] = useState("");
    const [start, setStartdate] = useState("");
    const [end, setEnddate] = useState("");
    const [createdby, setCreatedby] = useState("SYSTEM");
    const [owner, setOwner] = useState("");
    const [asign, setAssign] = useState("");
    const [status, setStatus] = useState("");

  async function handleSave() {
    try {
      const response = await fetch("http://127.0.0.1:5000/task/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, project, desc, start, end, createdby, owner, asign, status}),
      });
      console.log(response);
      if (response.ok) {
        alert("Task saved successfully");
      } else {
        alert("Task failed to save");
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <button className="btn btn-info" onClick={() => window.create_task.showModal()}>
        Create New Task
      </button>
      <dialog id="create_task" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <div className="grid place-items-center">
            <p className="py-4">Project ID</p>
            <input
              type="text"
              className="input input-bordered input-accent w-full max-w-xs"
              onChange={(e) => setid(e.target.value)}
            />
            <p className="py-4">Project Name</p>
            <input
              type="text"
              className="input input-bordered input-accent w-full max-w-xs"
              onChange={(e) => setProject(e.target.value)}
            />
            <p className="py-4">Project Description</p>
            <textarea
              className="textarea textarea-accent w-full max-w-xs"
              onChange={(e) => setDescription(e.target.value)}
            />
            <p className="py-4">Start Date</p>
            <input
              type="date"
              className="input input-bordered input-accent w-full max-w-xs"
              onChange={(e) => setStartdate(e.target.value)}
            />
            <p className="py-4">End Date</p>
            <input
              type="date"
              className="input input-bordered input-accent w-full max-w-xs"
              onChange={(e) => setEnddate(e.target.value)}
            />
            <p className="py-4">Owner</p>
            <input
              type="text"
              className="input input-bordered input-accent w-full max-w-xs"
              onChange={(e) => setOwner(e.target.value)}
            />
            <p className="py-4">Assign</p>
            <input
              type="text"
              className="input input-bordered input-accent w-full max-w-xs"
              onChange={(e) => setAssign(e.target.value)}
            />
            <p className="py-4">Status</p>
            <input
              type="text"
              className="input input-bordered input-accent w-full max-w-xs"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>

          <div className="modal-action">
            <button className="btn btn-info" onClick={handleSave}>
              Save
            </button>
            <button className="btn btn-warning">Discard</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
