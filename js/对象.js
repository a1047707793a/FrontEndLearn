//JS对象有：Array，String，JSON,BOM,DOM,Math,Date,RegExp,Function,Global
//Array对象
class Array_test{
    constructor(){
        console.log("Array_test");
        this.arr = [1, 2, 3, 4, 5];
    }


    //修改数组元素
    changeArr(){
        (this.arr)[1]="hello";
        (this.arr)[2]="123";
        (this.arr)[3]=true;
    };
    showAll(){
        let arrDiv = document.getElementById("arr");//新建一个div元素
        arrDiv.innerHTML= "arr="+this.arr+"<br>";
    };
    showItem(i){
        let arrDiv = document.getElementById("arr");//新建一个div元素
        if(arrDiv) {
            arrDiv.innerHTML += "123";
        }else{
            alert("arrDiv is null")
        }
    }

    //javascript中的数组类似于java中的集合，可以存储任意类型的数据且长度不固定
    /* array中常见的属性和方法：
    * 1.length属性，返回数组的长度
    * 2.concat()方法，连接两个或多个数组，并返回结果
    * 3.forEach()方法，用于调用数组的每个元素，并将元素传递给回调函数
    * 4.push()方法，向数组的末尾添加一个或多个元素，并返回新的长度
    * 5.splice()方法，向/从数组中添加/删除项目，然后返回被删除的项目
     */
    traversalArray(){
        for (let i = 0; i < this.arr.length; i++) {
            // this.showItem(i);
        alert(1);
        }
    }
}

my_Array = new Array_test();
test = document.getElementById("travel_Arr");
alert(test)
// .addEventListener("click",function() {
//     my_Array.traversalArray();
// })

my_Array.changeArr();
my_Array.traversalArray();