var vm = new Vue({
    el: "#app",
    data: {
        users: [
            { tranphu: { id: 01, password: 'phutx2000@gmail.com', name: 'Tran Dinh Phu' } },
            { trannam: { id: 02, password: "namdeptrai", name: 'Tran Dinh Nam' } }
        ],
        user: { id: 01, password: 'phutx2000@gmail.com', name: 'Tran Dinh Phu' },
        validateUser: "",
        validatePass: "",
        isLogin: true,
        isDeclare: true,

        // validate: false,
    },
    methods: {
        validate() {
            // console.log("Login");
            // console.log(this.validateUser);
            var flag = 0;
            var getUser = {};
            for (let i = 0; i < this.users.length; i++) {
                // console.log(Object.keys(this.users[i])[0]);
                // console.log(this.validateUser === Object.keys(this.users[i])[0])
                // console.log(Object.values(Object.values(this.users[i])[0])[1]);
                if (this.validateUser === Object.keys(this.users[i])[0]) {
                    if (this.validatePass === Object.values(Object.values(this.users[i])[0])[1]) {
                        // validate = true;
                        getUser = Object.values(Object.values(this.users[i])[0]);
                        console.log(getUser);
                        // console.log(this.$refs.val);
                        this.validateUser = "";
                        this.validatePass = "";
                        // this.$refs.val.click();
                        this.$refs.val.click();
                        flag++;
                        break;
                    }
                }
            }
            this.user = getUser;
            if (flag === 0) {
                alert("Bạn nhập sai mật khẩu hoặc password. Vui lòng thử lại!");
                this.validateUser = "";
                this.validatePass = "";
                flag = 0;
            }
            // validate = false;
        },
        forgotPass() {
            this.isLogin = false;
        },
        declare() {
            this.isDeclare = true;
            console.log(this.user);
        },
        notify() {
            this.isDeclare = false;
        },
        clickSeeMore() {
            console.log(this);
        }
    },
});