

//JS对象有：Array，String，JSON,BOM,DOM,Math,Date,RegExp,Function,Global

//------------------------------------Array对象--------------------------------------
    //javascript中的数组类似于java中的集合，可以存储任意类型的数据且长度不固定
    /* array中常见的属性和方法：
    * 1.length属性，返回数组的长度
    * *arr.length

    * 2.concat()方法，连接两个或多个数组，并返回结果

    * 3.forEach()方法，用于调用数组的每个元素，并将元素传递给回调函数
    * *arr.forEach(function(val){...}  注意:forEach仅遍历数组中有值的元素
    * *在ES6中,可以用箭头函数来代替foreach:  (...)=>(...)

    * 4.push()方法，向数组的末尾添加一个或多个元素，并返回新的长度
    *
    * 5.splice()方法，向/从数组中添加/删除项目，然后返回被删除的项目
    * *splice(起始删除的下标,删除的长度,在删除的空间里添加的新的元素A,B...)
     */

// JS对象包括：Array，String，JSON, BOM, DOM, Math, Date, RegExp, Function, Global

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
//------------------------------------Array对象结束--------------------------------------
//      /\\_/\
//     ( o.o )
//      > ^ <
//     /  O  \
//    /_____\
//------------------------------------String对象----------------------------------------

/*String字符串对象创建方式有两种: string = "..." 和 string = new String("123")
 *String字符串对象的常用方法:
 * 1.charAt()返回在指定位置的字符
 * 2.indexOf()检索字符串 ---- indexOf("要查找的字符/字符串",开始查找的位置) 返回的是第一次出现目标字符/字符串的位置索引
 * 3.trim()去除字符串两边的空格
 * 4.substring()提取字符串中两个指定的索引号之间的字符

 */
class String_test{
    constructor() {
        console.log("String_test");
        this.str = "initial";
    }

    edit(newStr){
        this.str=newStr;
        console.log("edit complete" + this.str);
    }
    indexOf(substr,i){
        console.log("substr is "+substr+"the position is "+i);
        return this.str.indexOf(substr,i);
    }
    charAt(i){
        console.log("position is "+i);
        return this.str.charAt(i);
    }

    trim(){
        let newStr = this.str.trim();
        console.log("trim complete");
        return newStr;
    }

    subStr(i,j){
        console.log("start position is "+i+" end position is "+j);
        return this.str.substring(i,j);
    }

}



let myStr = new String_test();
document.addEventListener("DOMContentLoaded",function (){
    //新建一个字符串类,用来进行接下来的操作

    //首先进行输入和修改操作

    //获取事件监听(点击按钮)
    document.getElementById("inputButton").addEventListener("click", function (){
        //获取显示位置
        let arrDiv = document.getElementById("myStr");
        //判断是否获取到
        if(arrDiv){
            //获取输入的值
            let newStr = document.getElementById("inputStr").value;
            //进行修改
            myStr.edit(newStr);
            //显示
            arrDiv.innerHTML = myStr.str;
        }else{
            //报错
            alert("arrDiv is null");
        }
    })
})

//chaAt的实现
document.addEventListener("DOMContentLoaded",function (){
    //获取事件监听:点击返回指定位置的字符的按钮
    document.getElementById("charAt_confirm").addEventListener("click",function (){
        //获取要显示的位置
        let arrDiv = document.getElementById("myCharAt");
        //进行获取判断
        if(arrDiv){
            //获取输入的值
            let num = document.getElementById("chaAtNum").value;
            //加入到显示框内
            arrDiv.innerHTML = myStr.charAt(num);
        }else{
            alert("arrDiv is null");
        }
    })
})


//indexOf的实现
document.addEventListener("DOMContentLoaded",function () {
    //对点击按钮进行监听
    document.getElementById("indexOfButton").addEventListener("click", function () {
        //获取要显示的位置
        let arrDiv = document.getElementById("myIndexOf");
        //进行获取判断
        if (arrDiv) {
            let substr = document.getElementById("indexOf_substr").value;
            let num = document.getElementById("indexOf_num").value;
            arrDiv.innerHTML = myStr.indexOf(substr, num);
        } else {
            alert("arrDiv is null");
        }
    })
})

//trim的实现
document.addEventListener("DOMContentLoaded",function (){
    //按钮点击事件监听
    document.getElementById("trimButton").addEventListener("click",function (){
        //获取文本显示的位置
        let arrDiv = document.getElementById("myTrim");
        //判断并且显示
        if(arrDiv){arrDiv.innerHTML = myStr.trim()}else{alert("arrDiv is null");}
    })
})

document.addEventListener("DOMContentLoaded",function (){
    document.getElementById("substringButton").addEventListener("click", function (){
        let arrDiv = document.getElementById("mySubstring");
        if(arrDiv){
            let i = document.getElementById("substring_start").value;
            let j = document.getElementById("substring_end").value;
            arrDiv.innerHTML = myStr.subStr(i,j);
        }else{
            alert("arrDiv is null");
        }
    })
})
//------------------------------------String对象结束--------------------------------------
/*                .-~~~~~~~~~-._       _.-~~~~~~~~~-.
*             __.'              ~.   .~              `.__
*           .'//                  \./                  \\`.
*         .'//                     |                     \\`.
*       .'// .-~"""""""~~~~-._     |     _,-~~~~"""""""~-. \\`.
*     .'//.-"                 `-.  |  .-'                 "-.\\`.
*   .'//______.============-..   \ | /   ..-============.______\\`.
 .'______________________________\|/______________________________`.
 */
//------------------------------------String对象----------------------------------------