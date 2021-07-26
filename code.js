var addNotes = document.getElementsByClassName("note")[0];
var addModal = document.getElementsByClassName("modal")[0];
 var addSave =document.getElementsByClassName("save")[0];
 var addcancel =document.getElementsByClassName("cancel")[0];


addNotes.onclick = function(){

  addModal.className ="modal show";
};
 
addSave.onclick = function(){
  let carddiv = document.getElementsByClassName('card-div')[0]
  let d = document.createElement('div')
  d.className = "card flex"
  let par = document.getElementsByClassName("text")[0].value;
  d.innerHTML = '<div class="edit-delete"><button class="edit"> <i class="fas  fa-edit"></i></button><button class="delete"><i class="fas fa-trash-alt"></i></button></div><div><p>'+par+'</p></div><button class="show-btn">show more</button>'

  carddiv.appendChild(d)
  addModal.className = "modal hide";
};

addcancel.onclick = function(){
  addModal.className = "modal hide";
};

document.createElement