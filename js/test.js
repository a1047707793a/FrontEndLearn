document.getElementById("travel_arr").addEventListener("click",function() {
   for (let i = 0; i < 2; i++) {
       let arrDiv = document.getElementById("arr");//新建一个div元素
        if(arrDiv) {
            arrDiv.innerHTML += "arr=[" + i + "]" + this.arr[i] + "<br>";
        }else{
            alert("arrDiv is null")
        }
   }
})