export default function DELETE_task_by_id(data){
    const storage = window.localStorage;
    const todos = JSON.parse('[' + storage.getItem("todos") + ']');
    const index = +data.todoIndex;

    todos.splice(index, 1);
    storage.setItem("todos", JSON.stringify(todos).slice(1, -1));
}