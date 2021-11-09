function clickOption(option, bar) {

    if (option == 'profile') {
        document.getElementById('t1').style.display = 'block';
        document.getElementById('t2').style.display = 'none';
        document.getElementById('t3').style.display = 'none';
        document.getElementById('t4').style.display = 'none';
    }
    if (option == 'account') {
        document.getElementById('t1').style.display = 'none';
        document.getElementById('t2').style.display = 'block';
        document.getElementById('t3').style.display = 'none';
        document.getElementById('t4').style.display = 'none';
    }
    if (option == 'create') {
        document.getElementById('t1').style.display = 'none';
        document.getElementById('t2').style.display = 'none';
        document.getElementById('t3').style.display = 'block';
        document.getElementById('t4').style.display = 'none';
    }
    if (option == 'list') {
        document.getElementById('t1').style.display = 'none';
        document.getElementById('t2').style.display = 'none';
        document.getElementById('t3').style.display = 'none';
        document.getElementById('t4').style.display = 'block';
    }
    let tab = document.getElementsByClassName('option');
    for (i = 0; i < tab.length; i++) {
        tab[i].style.borderLeft = 'groove';
    }
    bar.style.borderLeft = '4px solid red';
}

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

function passOn(data, link) {
    document.getElementById(data).type = 'text';
    if (data == 'createPass') {
        var tab = document.getElementsByClassName('opEye1');
        tab[0].style.display = 'none';
        tab[1].style.display = 'block';
    }
    if (data == 'oldPass') {
        var tab = document.getElementsByClassName('opEye2');
        tab[0].style.display = 'none';
        tab[1].style.display = 'block';
    }
    if (data == 'newPass') {
        var tab = document.getElementsByClassName('opEye3');
        tab[0].style.display = 'none';
        tab[1].style.display = 'block';
    }
    if (data == 'confirmPass') {
        var tab = document.getElementsByClassName('opEye4');
        tab[0].style.display = 'none';
        tab[1].style.display = 'block';
    }
}

function passOff(data, link) {
    document.getElementById(data).type = 'password';

    if (data == 'createPass') {
        var tab = document.getElementsByClassName('opEye1');
        tab[0].style.display = 'block';
        tab[1].style.display = 'none';
    }
    if (data == 'oldPass') {
        var tab = document.getElementsByClassName('opEye2');
        tab[0].style.display = 'block';
        tab[1].style.display = 'none';
    }
    if (data == 'newPass') {
        var tab = document.getElementsByClassName('opEye3');
        tab[0].style.display = 'block';
        tab[1].style.display = 'none';
    }
    if (data == 'confirmPass') {
        var tab = document.getElementsByClassName('opEye4');
        tab[0].style.display = 'block';
        tab[1].style.display = 'none';
    }
}

$(document).ready(function() {
    $('#table').DataTable();
});

var vm = new Vue({
    el: "#app",
    data: {
        id: 12345,
        idChange: 12345,
        name: 'Phạm Thế Long',
        nameChange: 'Phạm Thế Long',
        date: '2000-07-06',
        dateChange: '2000-07-06',
        sex: 'Nam',
        sexChange: 'Nam',
        department: 'Dev ' + 5,
        departmentChange: 'Dev ' + 5,
        pass: '123',
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
        search: '',
        userList: [
            { id: 123, name: 'Nguyễn Văn A', date: '2000-01-01', sex: 'Nam', department: 5, flag: true },
            { id: 13, name: 'Nguyễn Văn B', date: '2000-02-02', sex: 'Nam', department: 5, flag: true }
        ]

    },
    methods: {
        changeId: function(event) {

            this.idChange = parseInt(event.target.value);
        },
        changeName(event) {
            this.nameChange = event.target.value;
        },
        changeDate(e) {
            this.dateChange = e.target.value;
        },
        changeSex(e) {
            this.sexChange = e.target.value;
        },
        changeDepartment(e) {
            this.departmentChange = e.target.value;
        },
        handleClick: function() {
            this.id = this.idChange;
            this.name = this.nameChange;
            this.date = this.dateChange;
            this.sex = this.sexChange;
            this.department = this.departmentChange;
        },
        del(data) {
            this.userList[data].flag = false;
        },
        handleClickInputFile(e) {
            this.$refs.fileInputAvatar.click();
            this.$refs.fileSubmitAvatar.click();
        },
        changePassClick() {
            if (this.pass == this.oldPassword && this.newPassword == this.confirmPassword) {
                this.pass = this.newPassword;
            }
        }
    },
    computed: {
        filteredUsers: function() {
            var self = this;
            console.log('1');
            return this.userList.filter(function(cust) { return cust.name.toLowerCase().indexOf(self.search.toLowerCase()) >= 0; });
        }
    }
});