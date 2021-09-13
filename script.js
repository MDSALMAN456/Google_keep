let addButton=document.querySelector("#add-btn1");



const updateLSData=()=>{
   const textAreaData=document.querySelectorAll('textarea');
   const notes=[];

   textAreaData.forEach((note)=>{
      return notes.push(note.value);
   })
   console.log(notes);
   localStorage.setItem('notes' , JSON.stringify(notes));
}

const addNewNote=(text="")=>{
    let note=document.createElement("div");
    note.classList.add('note');

    const htmlData=` <div class="operation">
    <button class="edit"><i class="fas fa-edit"></i></button>
    <button class="delete"><i class="fas fa-trash"></i></button>
</div>

<div class="main ${text ? " " : "hidden"}"></div>
<textarea class="text ${text ? "hidden": " "}"></textarea>
 `;

note.insertAdjacentHTML('afterbegin', htmlData);


//Getting the refernces 

let editButton=note.querySelector(".edit");
let deleteButton=note.querySelector('.delete');
let mainDiv=note.querySelector('.main');
let textArea=note.querySelector('textarea');

//Deleting the node
deleteButton.addEventListener('click', ()=>{
    note.remove();
})


mainDiv.value=text;
textArea.value=text;

//Toggle using edit Button//

editButton.addEventListener("click" , ()=>{
    mainDiv.classList.toggle('hidden');
    textArea.classList.toggle('hidden');
})

textArea.addEventListener("change" , (event)=>{
    const value=event.target.value;
    mainDiv.innerHTML=value;

    updateLSData();
})



document.body.appendChild(note);
}



//Getting data back from local storage

const notes=JSON.parse(localStorage.getItem('notes'));
if(notes){notes.forEach((note)=>addNewNote())};


addButton.addEventListener("click" , ()=>{
    addNewNote()
});