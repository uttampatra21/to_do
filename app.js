const input = document.querySelector("#input");
const lists = document.querySelector(".lists");
const data = document.querySelector("main");
data.innerHTML = `
<div class="container">
            <input type="text" id="input" placeholder="Create your lists">
            <ul class="lists">  
            </ul>
        </div>
`;
input.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
       toDo(this.value);
       this.value = "";
    }
})

const toDo = (items) => {
    const listitem = document.createElement("li");
    listitem.innerHTML = `
            ${items}
            <i class="fa-sharp fa-solid fa-circle-xmark"></i>
    `;

    listitem.addEventListener("click", function(){
        this.classList.toggle("done");
    });

    listitem.querySelector("i").addEventListener("click", function(){
        listitem.remove()
    });
    lists.appendChild(listitem);
}