import axios from "axios";
import { useEffect, useState } from "react";

export default function updateTask() {
  // State Fetching
  const [task, setTask] = useState([]);

  // State When Change
  const [id, setid] = useState("");
  const [desc, setDesc] = useState("");
  const [start, setStartdate] = useState("");
  const [end, setEnddate] = useState("");
  const [updateby, setAuthor] = useState("SYSTEM");
  const [asign, setAsign] = useState("");
  const [status, setStatus] = useState("");

  async function handleUpdated() {
    try {
      const response = await fetch("http://127.0.0.1:5000/task/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, updateby, start, end, desc, asign, status}),
      });
      console.log(response);
      if (response.ok) {
        alert("Task saved successfully");
      } else {
        alert("Task failed to save");
        console.log("Error:", response.JSON.stringify());
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/task/v1").then((res) => setTask(res.data));
  }, []);

  console.log(task);

  return (
    <>
      <button
        className="btn btn-info"
        onClick={() => window.update_task.showModal()}
      >
        update Task
      </button>

      <dialog id="update_task" className="modal">
        <form method="dialog" className="modal-box w-11/12 max-w-5xl">
          <div className="grid place-items-center">
            <p className="py-4">Project ID</p>
            <select
              className="select select-accent w-full max-w-xs"
              onChange={(e) => setid(e.target.value)}
            >
              <option disabled selected>
                Pick a Project
              </option>
              {task.map((opts, i) => (
                <>
                  <option>{opts.id}</option>
                </>
              ))}
            </select>

            <p className="py-4">Project Description</p>
            <textarea
              className="textarea textarea-accent w-full max-w-xs"
              onChange={(e) => setDesc(e.target.value)}
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
            <p className="py-4">Assign</p>
            <input
              type="text"
              className="input input-bordered input-accent w-full max-w-xs"
              onChange={(e) => setAsign(e.target.value)}
            />
            <p className="py-4">Status</p>
            <input
              type="text"
              className="input input-bordered input-accent w-full max-w-xs"
              onChange={(e) => setStatus(e.target.value)}
            />
          </div>

          <div className="modal-action">
            <button className="btn btn-info" onClick={handleUpdated}>
              Updated
            </button>
            <button className="btn btn-warning">Discard</button>
          </div>
        </form>
      </dialog>
    </>
  );
}
