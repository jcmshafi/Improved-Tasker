import { useState } from "react";
import { toast } from "react-toastify";
import AddTaskModal from "./AddTaskModal";
import ConfirmToDeleteModal from "./ConfirmToDeleteModal";
import NoTaskFound from "./NoTaskFound";
import SearchTask from "./SearchTask";
import TaskActions from "./TaskActions";
import TaskList from "./TaskList";

import { useContext } from "react";
import { TaskContext } from "../../context/context";

const TaskBoard = () => {
  const { state, dispatch } = useContext(TaskContext);
  const [defaultTasks, setDefaultTasks] = useState(state.tasks); // Store all tasks
  const [showAddModal, setShowAddModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState(null);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [deleteAll, setDeleteAll] = useState(false);

  // const handleAddEditTask = (newTask, isAdd) => {
  //   console.dir(newTask);
  //   if (isAdd) {
  //     //isAdd is true means null so add task hobe
  //     setTasks([...tasks, newTask]); // add new task for list
  //     setAllTasks([...tasks, newTask]); // add new task for search
  //   } else {
  //     //means Edite task
  //     setTasks(
  //       tasks.map((task) => {
  //         if (task.id === newTask.id) {
  //           //after edite task return as a new task
  //           return newTask;
  //         }
  //         //kono edit na korle same task tai return korbe
  //         return task;
  //       })
  //     );
  //   }
  //   setShowAddModal(false); // Close the modal after saving the task
  // };

  const handleAddEditTask = (newTask, isAdd) => {
    if (isAdd) {
      //isAdd is true means null so add task hobe
      dispatch({ type: "ADD_TASK", payload: newTask }); // add new task for list
      setDefaultTasks([...defaultTasks, newTask]); // add new task for search
    } else {
      //means Edite task
      dispatch({ type: "EDIT_TASK", payload: newTask });
    }
    setShowAddModal(false); // Close the modal after saving the task
    setTaskToUpdate(null); // Remove prvious data from Modal
  };

  const handleEditTask = (task) => {
    setTaskToUpdate(task);
    setShowAddModal(true); //
  };

  const handleCloseClick = () => {
    setShowAddModal(false); // Close the modal
    setTaskToUpdate(null); // Remove prvious data from Modal
  };

  //handle delete and all delete tasks
  const handleDeleteTask = (taskId) => {
    setTaskToDelete(taskId);
    setShowDeleteModal(true);
  };

  const handleDeleteAllTask = () => {
    setDeleteAll(true);
    setShowDeleteModal(true);
  };

  // const confirmDeleteTask = () => {
  //   if (deleteAll) {
  //     setTasks([]);
  //     toast.success("Successfully Deleted All Task");
  //   } else {
  //     setTasks(tasks.filter((task) => task.id !== taskToDelete));
  //     toast.success("Successfully Deleted Task");
  //   }

  //   setShowDeleteModal(false);
  //   setTaskToDelete(null);
  //   setDeleteAll(false);
  // };

  const confirmDeleteTask = () => {
    if (deleteAll) {
      dispatch({ type: "DELETE_ALL_TASKS" });
      toast.success("Successfully Deleted All Task");
    } else {
      dispatch({ type: "DELETE_TASK", payload: taskToDelete });
      toast.success("Successfully Deleted Task");
    }

    setShowDeleteModal(false);
    setTaskToDelete(null);
    setDeleteAll(false);
  };

  // const handleFavorite = (taskId) => {
  //   const updatedTasks = tasks.map((task) =>
  //     task.id === taskId
  //       ? {
  //           ...task,
  //           isFavourite: !task.isFavourite,
  //         }
  //       : task
  //   );
  //   setTasks(updatedTasks);
  // };

  const handleFavorite = (taskId) => {
    dispatch({ type: "TOGGLE_FAVORITE", payload: taskId });
  };

  // const handleSearch = (searchTerm) => {
  //   console.log(searchTerm);
  //   if (searchTerm === "") {
  //     setTasks(allTasks); // Reset to all tasks if search term is empty
  //   } else {
  //     const filtered = allTasks.filter((task) => {
  //       const title = task.title.toLowerCase();
  //       const lowerSearchTerm = searchTerm.toLowerCase();
  //       return (
  //         // to check for the full title match
  //         title.includes(lowerSearchTerm) ||
  //         title.split(" ").some((word) => word.startsWith(lowerSearchTerm)) // to check for individual word matches
  //       );
  //     });
  //     setTasks(filtered);
  //   }
  // };

  const handleSearch = (searchTerm) => {
    console.log(searchTerm);
    if (searchTerm === "") {
      dispatch({ type: "SET_TASKS", payload: defaultTasks }); // Show all tasks if search term is empty
    } else {
      const filtered = defaultTasks.filter((task) => {
        const title = task.title.toLowerCase();
        const lowerSearchTerm = searchTerm.toLowerCase();
        return (
          // to check for the full title match
          title.includes(lowerSearchTerm) ||
          // to check for individual word matches
          title.split(" ").some((word) => word.startsWith(lowerSearchTerm))
        );
      });
      dispatch({ type: "SET_TASKS", payload: filtered });
    }
  };

  return (
    <section className="mb-20">
      {showAddModal && (
        <AddTaskModal
          onSave={handleAddEditTask}
          taskToUpdate={taskToUpdate}
          onCloseClick={handleCloseClick}
        />
      )}
      {showDeleteModal && (
        <ConfirmToDeleteModal
          onConfirm={confirmDeleteTask}
          onCancel={() => setShowDeleteModal(false)}
        />
      )}
      <div className="container">
        <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
          <div className="mb-14 items-center justify-between sm:flex">
            <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
            <div className="flex items-center space-x-5">
              <SearchTask onSearch={handleSearch} />
              <TaskActions
                onAddClick={() => setShowAddModal(!showAddModal)}
                onDeleteAllClick={handleDeleteAllTask}
              />
            </div>
          </div>
          {state.tasks.length > 0 ? (
            <TaskList
              onEdit={handleEditTask}
              onDelete={handleDeleteTask}
              onFav={handleFavorite}
            />
          ) : (
            <NoTaskFound />
          )}
        </div>
      </div>
    </section>
  );
};

export default TaskBoard;
