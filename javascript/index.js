const addNewTodo = (event) => {
    event.preventDefault();
    console.log("add new todo")

    let new_list = document.createElement("li")
    new_list.innerText = "task"

    document.getElementById("todo-list")


}