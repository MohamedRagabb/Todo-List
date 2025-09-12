const inputTask = document.getElementById("input-task");
const taskList = document.getElementById("task-list");
const btn = document.querySelector(".btn");


//Add new task

function addTask(){
    let taskValue= inputTask.value;

    if(!taskValue){
        alert("You Must Add A Value");
    }else{
        let li = document.createElement("li");
        let span = document.createElement("span");

        li.innerHTML = taskValue;
        taskList.appendChild(li);
        span.innerHTML = "&times;";
        li.appendChild(span);
    }
    
    inputTask.value="";
}

btn.addEventListener("click", addTask); 
