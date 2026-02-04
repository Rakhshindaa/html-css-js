document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addButton = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    let tasks = [];

    function renderTasks() {
        taskList.innerHTML = ''; 
        tasks.forEach((taskText, index) => {
            const listItem = document.createElement('li');
            listItem.className = 'task-item';
            
            const taskTextSpan = document.createElement('span');
            taskTextSpan.textContent = taskText;
            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-btn';
            deleteButton.addEventListener('click', () => {
                deleteTask(index);
            });

            listItem.appendChild(taskTextSpan);
            listItem.appendChild(deleteButton);
            taskList.appendChild(listItem);
        });
    }
    function addTask() {
        const newTaskText = taskInput.value.trim();

        if (newTaskText !== '') {

            tasks.push(newTaskText); 
    
            renderTasks(); 

            taskInput.value = ''; 
    
            taskInput.focus();
        }
    }

 
    function deleteTask(index) {
   
        tasks.splice(index, 1); 
        renderTasks(); 
    }

    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    renderTasks();
});
