/*js中的变量声明*/
var a = 20;//var声明的是全局变量,并且可以重复定义
{
    let a = 20;// let声明的用法和var一样,但是只能在代码块中生效
}
const  b = 20//const声明只读的常量
var c;
document.write(typeof a+"---这是number型变量"+'<br>');
document.write(typeof null+'---这是objcet型变量'+'<br>');
document.write(typeof(c)+"---这是已经声明但未初始化的变量"+'<br>')

/*js中运算符*/
document.write((a == "20").toString()+"--- a == \"20\""+'<br>')//，a === "20" 的运算结果是一个布尔值，这个布尔值和字符串 '<br>' 进行 + 运算时，JavaScript 会尝试把布尔值转换成字符串
document.write((a==="20").toString()+"--- a === \"20\""+'<br>')
document.write((a===20).toString()+"--- a === 20"+'<br>')

/*字符串转换为数字,parseint会把字符串从第一位开始一直转换到非数字的元素的位置*/
document.write(parseInt("12").toString()+'<br>');
document.write(parseInt("12A45").toString()+'<br>')
document.write(parseInt("A45").toString()+'<br>')

/*其他类型转为boolean*/
if(!0){
    document.write("0转换为false"+'<br>')
}
if(!NaN){
    document.write("NaN转换为flase"+'<br>')
}
if(!""){
    document.write("空字符串转为false"+'<br>')
}