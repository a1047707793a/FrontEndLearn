// 类定义
class calculate{
    static add(a, b) {
        // 返回参数 a 和 b 转化为数字相加的结果
        return Number(a) + Number(b);
    }

    static show(result){
        let resultDiv = document.createElement("div");//新建一个div元素
        resultDiv.innerHTML = "Done,the result is :<br>"+result;//对这个元素的功能进行建立
        document.body.appendChild(resultDiv);//将这个元素加入到HTML中
        //
    }
}
// 为 'submit' 元素添加 'click' 事件监听
document.getElementById('submit').addEventListener('click', function ()
{
    // 获取 id 为 'a' 的 HTML 元素的值，并赋值给变量 a
    const a = document.getElementById('a').value;
    // 获取 id 为 'b' 的 HTML 元素的值，并赋值给变量 b
    const b = document.getElementById('b').value;

    calculate.show(calculate.add(a, b))
});




