import { useEffect } from "react";
import {useState, useRef} from "react";
import { alignPropType } from "react-bootstrap/esm/types.js";
import TodosScene from "../scenes/TodosScene.jsx"
import ModalAlert from "./modal_alert.jsx"
import Modal_NewTask from "./Modal_NewTask.jsx"
import GET_all_tasks from "../forms/GET_all_tasks.js"
import DELETE_task_by_id from "../forms/DELETE_task_by_id.js"
import {modalComplete, modalDelete, modalDeleteSuccess} from "./alert_modals.js"
import $ from "jquery";

function Todo(title, description){
    return {title, description};
}

function clearTodos(e){
    window.localStorage.removeItem("todos");
    console.table(window.localStorage.getItem("todos"));
}

export default function Todos(props){
    const [todos, setTodos] = useState(GET_all_tasks(null));
    const [showAlert, setShowAlert] = useState(false);
    const [modal, setModal] = useState({title : "Warning", body : "", buttons : []});
    const [newTask, setNewTask] = useState(false);
    let todosNum = useRef(todos.length);

    //useEffect(clearTodos, []);

    const handleCompleteTask = event => {
        const data = {
            todoIndex : $(event.target).attr("data-todo-index")
        }
        DELETE_task_by_id(data);
        setModal(modalComplete(event));
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 1500);
        setTodos(GET_all_tasks(null));
    };

    const handleNewTask = (event) => {
        event.preventDefault();
        setNewTask(true);
    };

    const handleEditTask = event => {
        event.preventDefault();
        //alert("Edit");
    };

    const handleDeleteTask = event => {
        //alert("Delete task");
        const data = {
            todoIndex : $(event.target).attr("data-todo-index")
        }
        DELETE_task_by_id(data);
        setModal(modalDeleteSuccess(event));
        setTimeout(() => setShowAlert(false), 1500);
        setTodos(GET_all_tasks(null));
    };

    const handleDeleteWarning = event => {
        event.preventDefault();
        setModal(
            modalDelete(
                event, handleCompleteTask, handleDeleteTask
            )
        );
        setShowAlert(!showAlert);
    };

    const handleModalShowHide = event => {
        setShowAlert(!showAlert);
    };

    return (
        <>
        <TodosScene 
            todos = {todos}
            handleNewTask = {handleNewTask}
            handleCompleteTask = {handleCompleteTask}
            handleEditTask = {handleEditTask}
            handleDeleteTask = {handleDeleteWarning}
        />
        <ModalAlert
            show = {showAlert}
            title={modal.title}
            buttons = {
                modal.buttons
                //[ModalBtn("primary", handleModalShowHide, "OK")]
            }
            body = {modal.body}
            handleShowHide = {handleModalShowHide}
        >
        </ModalAlert>
        <Modal_NewTask
            show = {newTask}
            handleShowHide = {(e) => setNewTask(false)}
        >
        </Modal_NewTask>
        </>
    );
}