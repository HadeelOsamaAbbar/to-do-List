// Select Elements
let $input = document.querySelector("#new_item");
let $btn =document.querySelector("#add-btn");
let $results = document.querySelector(".results");
let $msg = document.querySelector(".warn");
let $form = document.querySelector("#todo_form");


$form.addEventListener("submit" , function(e) {
    e.preventDefault()

    if($input.value=="") {
        warnMsg()
    }
    else
    addElement()
})
// Add Element
function addElement() {
    let newLi= document.createElement("li");
    let check = document.createElement("input");
    let label = document.createElement("label");

    check.type="checkbox";
    label.innerHTML=$input.value;
    newLi.append(check,label);
    $results.appendChild(newLi);
    newLi.classList.add("liSty");
    check.style.cursor= "pointer"

}

function warnMsg() {
    $msg.style.display= "block" ;
    $input.style.border= "1px solid red"

}
$input.addEventListener("keypress" ,function() {
    $msg.style.display= "none" ;
    $input.style.border= "1px solid #fff"

})