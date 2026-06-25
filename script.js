let task = document.querySelector('#task');
let addBtn = document.querySelector('#addBtn');
let taskList = document.querySelector('#taskList');
let taskCount = document.querySelector('#taskCount');
let num = 0;


addBtn.addEventListener('click', () => {
    if (task.value === '') {
        return;
    }

    num++;
    taskCount.innerText = `Task left: ${num}`;

    let li = document.createElement('li');
    taskList.appendChild(li);
    let check = document.createElement('Input');
    check.setAttribute("type", "checkbox")
    li.appendChild(check);

    let span = document.createElement('span');
    span.innerText = task.value;
    li.appendChild(span);
    check.addEventListener('change', () => {
        if (check.checked) {
            span.style.textDecoration = 'line-through';
            num--;
            taskCount.innerText = `Task left: ${num}`;
        }
        else {
            span.style.textDecoration = 'none';
            num++;
            taskCount.innerText = `Task left: ${num}`
        }

    })


    let btn = document.createElement('button');
    btn.innerText = 'Delete';
    li.appendChild(btn);
    btn.addEventListener('click', () => {
        taskList.removeChild(li);

        if (check.checked) {

            taskCount.innerText = `Task left: ${num}`;
        }
        else {
            num--;
            taskCount.innerText = `Task left: ${num}`;
        }


    })
    task.value = '';
})




