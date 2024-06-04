new Vue({
        el:"#app",
        data:{
            users:[
                {name:"tom",age:20,gender:1,score:78},
                {name:"jerry",age:22,gender:1,score:80},
                {name:"lucy",age:18,gender:0,score:60},
                {name:"lily",age:25,gender:0,score:99}]
        },
        methods:{
            users: this.users,
            arrAdd:function() {
                let tempName = document.getElementById("name").value;
                let tempAge = document.getElementById("age").value;
                let tempGender = document.getElementById("gender").value;
                let tempScore = document.getElementById("score").value;
                let newUser = {name:tempName,age:tempAge,gender:tempGender,score:tempScore};
                this.users.push(newUser)
            },
            arrDelete:function(){
                if (this.users.length >0){
                    this.users.pop()
                }
            }
        }

    })