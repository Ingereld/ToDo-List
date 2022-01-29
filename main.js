
const list = {
    "create a new practice task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
   };

function changeStatus(task, status) {
if ( task in list) {
    list[task] = status;
    }
};

function addTask(newTask, status) {
    list[newTask] = status;
}

function deleteTask(task) {
    delete list[task];
}

function showList () {
let toDo = "";
let inProgress = "";
let done = "";

for ( let task in list) {
    switch(list[task]) {

        case "To Do":
            toDo += `"${task}" \n`
            break;
        
        case "In Progress":
            inProgress += `"${task}" \n`
            break;
        
        case "Done":
            done += `"${task}" \n`
            break;
     }
    }
    console.log(`Todo: \n${toDo || "-"}`);
    console.log(`In Progress: \n${inProgress || "-"}`);
    console.log(`Done: \n${done || "-"}`);

}

changeStatus("make a bed", "Done")
changeStatus("write a post", "Done")
addTask("go for a walk", "Done");
addTask("make a bed", "In Progress")
addTask("make ToDo list", "Done");
addTask("Find time to rest", "In Progress")
deleteTask("make a bed");
showList();













// function showList() {
//     let toDo = ''
//     let done = ''
//     let inProgress = ''
//     const notTask = `\n -`
  
//     for (let task in list) {
  
//       switch (list[task]) {
//         case 'To Do':
//           toDo += `\n "${task}",`
//           break;
//         case 'In Progress':
//           inProgress += `\n "${task}",`
//           break;
//         case 'Done':
//           done += `\n "${task}",`
//           break;
//       }
//     }
//     console.log(`Todo: ${toDo || notTask}\nIn Progress: ${inProgress || notTask}\nDone: ${done || notTask}`);
// }
// showList()





// let guestList = "Guests:\n  John\n  Pete\n  Mary";

// console.log(guestList);