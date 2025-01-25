import { createContext } from "react";
import TaskItems from "./TaskItems";

export const TaskContext = createContext ({
    taskItems:[] , 
    setTaskItems :()=>{}
})