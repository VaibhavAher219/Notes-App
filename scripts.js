
const addbtn=document.querySelector('.add');
addbtn.addEventListener('click',()=>{
    addnote();
});

function addnote(){
    const note=document.createElement('div');
    note.classList.add('note');
    note.innerHTML =`
        
        <div class="tools">
            <button class="edits"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
        </div>
        <div class="main hidden"></div>
        <textarea></textarea>
        </div>
        ` 
        const edit=note.querySelector('.edits');
      
        const deletebtn=note.querySelector('.delete');
        deletebtn.addEventListener('click',()=>{
                note.remove();
        })
        const main=note.querySelector('.main');
        const txtarea=note.querySelector('textarea');
        edit.addEventListener('click',()=>{
            main.classList.toggle('hidden');
            txtarea.classList.toggle('hidden');
        })
        
        txtarea.addEventListener('input',(e)=>{
            const {value}=e.target;
            main.innerHTML = marked.parse(value);
        })
        
    document.body.appendChild(note);
}


