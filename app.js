let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked")
    Validator()
});

let Validator = () => {

    if(input.value === ""){ 
        console.log("error")
        msg.innerHTML = "Your Form cannot be blank"
    }else{
        console.log("sucesses")
        msg.innerHTML = "";
        acceptData();
    }
}

let data = {}; 
let  acceptData = () => {
    data["text"] = input.value
    console.log(data)

    createForm()
}

let createForm = () => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
        <i onClick="modifyForm(this)" class="fa-regular fa-pen-to-square"></i>
        <i onClick="deleteForm(this)" class="fa-solid fa-trash"></i>
    </span>
</div>`
}

let deleteForm = (e) => {
    e.parentElement.parentElement.remove()
}

let modifyForm = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;

    e.parentElement.parentElement.remove()
}   