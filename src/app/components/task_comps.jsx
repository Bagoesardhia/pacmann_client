// Imports Dependencies
"use client";
import axios from "axios";
import { useEffect, useState } from "react";

// Import modules
import UpdateTask from "./update_task_comps";

export default function taskComps() {
  const [task, setTask] = useState([]);
  const [activeTask, setActiveTask] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/task").then((res) => setTask(res.data));
  }, []);

  console.log(task);

  return (
    <>
      {task.map((datas, i) => (
        <div className="overflow-x-auto" key={i}>
          <table className="table">
            <tbody>
              <tr key={datas.id}>
                <td></td>
                <th></th>
                <td>{datas.id}</td>
                <td></td>
                <td></td>
                <td>{datas.name}</td>
                <td></td>
                <td></td>
                <td>{datas.desc}</td>
                <td></td>
                <td></td>
                <td>{datas.start}</td>
                <td></td>
                <td></td>
                <td>{datas.end}</td>
                <td></td>
                <td></td>
                <td>{datas.auth}</td>
                <td></td>
                <td></td>
                <td>{datas.assign}</td>
                <td></td>
                <td></td>
                <td>{datas.status}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ))}
    </>
  );
}
