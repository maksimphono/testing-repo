import $ from "jquery";

function ModalBtn(variant, onClick, text){
    return {
        variant,
        onClick,
        text
    };
}

export const modalDelete = (event, handleCompleteTask, handleDeleteTask) => ({
    title : "Are you sure?", 
    body : `You are about to delete task '${event.target.parentNode.parentNode.getElementsByTagName("h2")[0].innerHTML}' from your todo list. If you comleted this task, just click 'Complete' button`,
    buttons : [ModalBtn("success", e => handleCompleteTask(event), "Complete"), ModalBtn("info", e => handleDeleteTask(event), "Delete")]
})

export const modalComplete = (event) => ({
    title : "Congretulations!", 
    body :  `You completed the task "${$(event.target).attr("data-title")}"`,
    buttons : []
})

export const modalDeleteSuccess = (event) => ({
    title : "Success",
    body : "Task was deleted",
    buttons : []
})