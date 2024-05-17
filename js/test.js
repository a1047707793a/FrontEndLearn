// class String_test{
//     constructor() {
//         console.log("String_test");
//         this.str = "initial";
//     }
//
//     edit(newStr){
//         this.str=newStr;
//         console.log("edit complete" + this.str);
//     }
//     indexOf(substr,i){
//         console.log("substr is "+substr+"the position is "+i);
//         return this.str.indexOf(substr,i);
//     }
//     charAt(i){
//         console.log("position is "+i);
//         return this.str.charAt(i);
//     }
//
//     trim(){
//         let newStr = this.str.trim();
//         console.log("trim complete");
//         return newStr;
//     }
//
//     subStr(i,j){
//         console.log("start position is "+i+" end position is "+j);
//         return this.str.substring(i,j);
//     }
//
// }
//
//
//
// document.addEventListener("DOMContentLoaded",function (){
//     //新建一个字符串类,用来进行接下来的操作
//     let myStr = new String_test();
//
//     //首先进行输入和修改操作
//
//     //获取事件监听(点击按钮)
//     document.getElementById("inputButton").addEventListener("click", function (){
//         //获取显示位置
//         let arrDiv = document.getElementById("myStr");
//         //判断是否获取到
//         if(arrDiv){
//             //获取输入的值
//             let newStr = document.getElementById("inputStr").value;
//             //进行修改
//             myStr.edit(newStr);
//             //显示
//             arrDiv.innerHTML = myStr.str;
//         }else{
//             //报错
//             alert("arrDiv is null");
//         }
//     })
//
//     //chaAt的实现
//     //获取事件监听:点击返回指定位置的字符的按钮
//     document.getElementById("charAt_confirm").addEventListener("click",function (){
//         //获取要显示的位置
//         let arrDiv = document.getElementById("myCharAt");
//         //进行获取判断
//         if(arrDiv){
//             //获取输入的值
//             let num = document.getElementById("charAt_num").value;
//             arrDiv.innerHTML = myStr.charAt(num);
//         }else{
//             alert("arrDiv is null");
//         }
//     })
// })