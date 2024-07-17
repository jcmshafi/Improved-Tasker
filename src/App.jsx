import { useReducer } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./Components/Page";
import { TaskContext } from "./context/context";

import { initialState, taskReducer } from "./reducers/taskReducer";

export default function App() {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <>
      <TaskContext.Provider value={{ state, dispatch }}>
        <Page />
        <ToastContainer />
      </TaskContext.Provider>
    </>
  );
}
