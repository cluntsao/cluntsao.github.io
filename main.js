var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

function add(){
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    addSum.innerHTML = one + two;
};

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

//IMG JS
pic1.addEventListener("click", picLink);
pic2.addEventListener("click", picLink);
pic3.addEventListener("click", picLink);

function picLink() {
    var allImages = document.querySelectorAll("img");

    for (var i = 0; i<allImages.length; i++){
        allImages[i].className = "hide";
    }

    var picID = this.attributes["data-img"].value;
    var pic = document.getElementById(picID);

    if (pic.className === "hide"){
        pic.className = "";
    } else {
        pic.className = "";
    }
};

var checkList = document.getElementById("checkList");
var items = checkList.querySelectorAll("li");
var inputs = checkList.querySelectorAll("input");

for (var i = 0; i < items.length; i++){
    items[i].addEventListener("click", editItem);
    inputs[i].addEventListener("blur", updateItem);
    inputs[i].addEventListener("keypress", itemKeyPress);
}

function editItem(){
    this.className = "edit";

    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0, input.value.length);
}

function updateItem() {
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

function itemKeyPress(event) {
    if(event.which === 13) {
        updateItem.call(this);
    }
}
