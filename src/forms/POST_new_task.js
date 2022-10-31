export default function POST_new_task(data){
    const storage = window.localStorage;
    const todos = storage.getItem("todos");

    if (todos)
        //console.log(todos + ',' + JSON.stringify(data));
        storage.setItem("todos", todos + ',' + JSON.stringify(data));
    else
        //console.log(JSON.stringify(data));
        storage.setItem("todos", JSON.stringify(data));
    
}