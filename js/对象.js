

//JS对象有：Array，String，JSON,BOM,DOM,Math,Date,RegExp,Function,Global
    //javascript中的数组类似于java中的集合，可以存储任意类型的数据且长度不固定
    /* array中常见的属性和方法：
    * 1.length属性，返回数组的长度
    * *arr.length
    * 2.concat()方法，连接两个或多个数组，并返回结果
    * 3.forEach()方法，用于调用数组的每个元素，并将元素传递给回调函数
    * *arr.forEach(function(val){...}  注意:forEach仅遍历数组中有值的元素
    * 4.push()方法，向数组的末尾添加一个或多个元素，并返回新的长度
    * 5.splice()方法，向/从数组中添加/删除项目，然后返回被删除的项目
     */

// JS对象包括：Array，String，JSON, BOM, DOM, Math, Date, RegExp, Function, Global

// Array对象
/**
 * Represents the Array_test class.
 * @class
 */
class Array_test {
    constructor() {
        console.log("Array_test");
        this.arr = [1, 2, 3, 4, 5];
    }

    //遍历数组
    foreach(){
        this.cleanItem();
        this.arr.forEach(function (item){
            let arrDiv = document.getElementById("arr");
            if(arrDiv){arrDiv.innerHTML += item + "<br>";}else{alert("arrDiv is null")}
        })
    }
    // 修改数组元素
    changeArr() {
        this.arr[1] = "hello";
        this.arr[2] = "123";
        this.arr[3] = true;
    }

    // 显示数组所有元素
    showAll() {
        let arrDiv = document.getElementById("arr");
        if(arrDiv){
            arrDiv.innerHTML = "arr=" + this.arr + "<br>";
        }else{
            alert("arrDiv is null");
        }
    }

    // 显示特定索引位置的数组元素
    showItem(i) {
        let arrDiv = document.getElementById("arr");
        if (arrDiv) {
            arrDiv.innerHTML += "arr[" + i + "]=" + this.arr[i] + "<br>";
        } else {
            alert("arrDiv is null");
        }
    }
    // 清除已经显示的数组元素
    cleanItem(){
        let arrDiv = document.getElementById("arr");
        if(arrDiv){
            arrDiv.innerHTML = "";
        }else{
             alert("arrDiv is null");
        }
    }
}

// 当文档加载完成时执行以下代码
document.addEventListener("DOMContentLoaded", function() {
    // 创建Array_test实例
    const my_Array = new Array_test();

    // 获取遍历按钮并添加点击事件监听器
    const travel = document.getElementById("travel_Arr");
    travel.addEventListener("click", function() {
        my_Array.foreach();
        clearInterval();
    });

    // 获取修改按钮并添加点击事件监听器
    const change = document.getElementById("alter_arr");
    change.addEventListener("click", function() {
        my_Array.changeArr();
    });
});

