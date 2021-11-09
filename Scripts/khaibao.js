function list(type,element){
    let tabs = document.getElementsByClassName('items');
    for (i =0; i < tabs.length ; i++){
        tabs[i].style.background = '#fff';
    }
    element.style.background = "#ee4d2d";
    switch(type){
        case 'create':
            document.getElementById('update').style.display = 'none';
            document.getElementById('create').style.display = 'block';
            break;
        case 'update':
            document.getElementById('create').style.display = 'none';
            document.getElementById('update').style.display = 'block';
            break;
    }
}
var vm = new Vue({
    el: '#app',
    data: {
        fname : '',
        PL: '',
        NDKB: '',
        DADTG: '',
        appt: ''
    },
    
    methods: {

    },
    computed: {
        
    }
})