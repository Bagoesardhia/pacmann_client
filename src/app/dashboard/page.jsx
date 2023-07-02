"use client"
// Import modules
import Navbar from "../components/navbar_comps";
import Tables from "../components/tables_comps";
import Task from "../components/task_comps";
import CreateTask from "../components/create_task_comps"
import UpdateTask from "../components/update_task_comps"

export default function Dashboard() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-2 gap-4 mt-2">
        <CreateTask />
        <UpdateTask/>
      </div>
      <div>
        <Tables />
      </div>
      <div>
        <Task/>
      </div>
      
    </>
  );
}
