let elForm = document.querySelector(".form");
let elName = elForm.querySelector(".name");
let elRelative = elForm.querySelector(".relative");
let elSurname = elForm.querySelector(".surname");
let elNumber = elForm.querySelector(".number");
let elList = document.querySelector(".list");

let array = [];

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  let answer = {
    name: elName.value,
    surname: elSurname.value,
    relative: elRelative.value,
    number: elNumber.value
  }

  elName.value = null;
  elSurname.value = null;
  elRelative.value = null;
  elNumber.value = null;

  
 array.push(answer);

elList.innerHTML="";

 for(let i=0; i<array.length; i++){
  let elItem = document.createElement("li");
      elItem.setAttribute("class" , "item btn btn-light fw-bold w-100  d-flex align-items-center justify-content-around p-3 mb-2");
           
      let elSpanName  = document.createElement("span");
      elSpanName.setAttribute("class", "span-name");
      elSpanName.textContent = array[i].name;
    
      let elSpanSurName = document.createElement("span");
      elSpanSurName.setAttribute("class", "span-surname");
      elSpanSurName.textContent = array[i].surname;
     
      let elSpanRelative = document.createElement("span");
      elSpanRelative.setAttribute("class", "span-relative");
      elSpanRelative.textContent = array[i].relative;


      let elSpanNumber = document.createElement("span");
      elSpanNumber.setAttribute("class", "span-number");
      elSpanNumber.textContent = array[i].number;

      elItem.append(elSpanName, elSpanSurName,elSpanRelative,elSpanNumber);
      elList.appendChild(elItem);

 }
 
})