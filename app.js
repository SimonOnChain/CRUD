let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

form.addEventListener("submit", (e) => {
    e.preventDefault()
  console.log("button clicked")

    Validation();
})


let Validation = () => {
    if (input.value === ""){
         console.log("failure")
         msg.innerHTML = "Cannot be blank"
        
    }else {
        console.log("sucesses")
        msg.innerHTML = "";

        acceptData()
    }
};



let data = {};
let acceptData = () => {
    data["text"] = input.value
    console.log(data);
};

