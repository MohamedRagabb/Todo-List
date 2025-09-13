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
    setTask();
}

btn.addEventListener("click", addTask); 

taskList.addEventListener("click",function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        setTask();
    }else if(e.target.tagName ==="SPAN"){
        e.target.parentElement.remove();
        setTask();
    }
    
});

inputTask.addEventListener("keydown",function(e){
    if(e.key ==="Enter"){
        addTask();
    }
});

function setTask(){
    localStorage.setItem("lists", taskList.innerHTML)

};


function loadTaskes(){
    taskList.innerHTML= localStorage.getItem("lists")
}
loadTaskes();