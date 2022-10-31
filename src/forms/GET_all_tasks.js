import $ from "jquery"

export default function GET_all_tasks(data){
    const storage = window.localStorage;
    const todos = storage.getItem("todos");
    //console.log(JSON.parse(storage.getItem("todos")));
    //const res = JSON.parse(storage.getItem("todos")).map(todo => (JSON.parse(todo))); 
    //console.table(res);
    if (todos)
        return JSON.parse('[' + todos + ']').map(todo => (JSON.parse(todo)));
    return [];
}