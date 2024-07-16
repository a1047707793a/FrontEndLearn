new Vue({
    el: "#app",
    data: {temp: []},
    mounted() {
        // 在页面渲染完成后添加一个请求,获取数据,然后把数据赋值给temp
        axios.get("tsconfig.json").then(result => {
            this.temp = result.data.data;
        })
    },
    methods: {
        formatHobby: function(value) {
            if (!value) return '';
            return value.join(', ');
        },
        renderTime: function(){
            let date = new Date();
            let days = date.getDay();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            return `${days}日${hours}时${minutes}分${seconds}`

        }
    }
})