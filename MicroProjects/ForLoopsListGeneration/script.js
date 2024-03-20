function generateList(){
    var numberList = document.getElementById("numberList");

    numberList.innerHTML = "";

    for (var i = 1; i <= 10; i++){
        var listItem = document.createElement("li");
        listItem.textContent = "Number" + i;
        numberList.appendChild(listItem);
    }
}