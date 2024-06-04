// 类定义
class calculate{
    static add(a, b) {
        // 返回参数 a 和 b 转化为数字相加的结果
        return Number(a) + Number(b);
    }

    static show(result){
        let resultDiv = document.getElementById("calculate_result");//新建一个div元素
        resultDiv.innerHTML = "Done,the result is :<br>"+result;//对这个元素的功能进行建立
        //
    }
}
// 为 'submit' 元素添加 'click' 事件监听,当点击按钮时执行函数
document.getElementById('submit').addEventListener('click', function ()
{
    // 获取 id 为 'a' 的 HTML 元素的值，并赋值给变量 a
    const a = document.getElementById('a').value;
    // 获取 id 为 'b' 的 HTML 元素的值，并赋值给变量 b
    const b = document.getElementById('b').value;

    calculate.show(calculate.add(a, b))
});

//声明函数的几种方式
function add(a, b) {
    return a + b;
}//这是最常用的声明函数的方式

var functionNmae =function (a, b) {
    return a + b;
}//这是声明匿名函数的方式



