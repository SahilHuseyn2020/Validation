
var budget=document.querySelector("#budget");
var tbody=document.querySelector(".transactions");
var tableEl=document.querySelector('table');



function onDeleteRow() {
    if(!e.target.classList.contains("deleteBtn")){
        return false;
    }
    var btn =e.target;
    btn.closest("tr").remowe();
}


budget.addEventListener("submit",function(event){
    tableEl.addEventListener('click',onDeleteRow);

event.preventDefault();
tableEl.addEventListener('click',onDeleteRow);


var inputs={
    desc:document.querySelector("#desc").value,
    price:document.querySelector("#price").value,
    date:document.querySelector("#date").value
    




};
if(inputs.desc.trim()==""){
    alert("qaciqlamaaaa")
    return false;
}

if(isNaN(Number(inputs.price)) || inputs.price==""){
    alert("mebleggg")
    return false;
}

if(inputs.date==""){
    alert("tarixxxx")
    return false;
}
 var tr=document.createElement("tr");
  
 
 tr.innerHTML=`<td>${inputs.desc}</td>`,
tr.innerHTML+=`<td>${inputs.price} Pln</td>`,
tr.innerHTML+= `<td>${inputs.date}</td>`,
tr.innerHTML+=`<td><button class="deleteBtn">Delete</button></td>`;

 

   
 
      
 
 
 
 
  
  
  tbody.appendChild(tr)

  


});



tr.innerHTML=`<td>${inputs.desc}</td>`,
tr.innerHTML+=`<td>${inputs.price} Pln</td>`,
tr.innerHTML+= `<td>${inputs.date}</td>`,
tr.innerHTML+=`<td><button class="deleteBtn">Delete</button></td>`;
