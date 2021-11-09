var dem = 0;
var count = 0;

handleSearch = function() {
    count++;
    // console.log("Search");
    if (count % 2 == 0) {
        document.getElementById('search').style.display = 'none';
        // document.getElementById('search').style.transition = '5s ease';
    } else {
        document.getElementById('search').style.display = 'block';
        // document.getElementById('search').style.transition = '5s ease';
    }
    if (count > 10000) {
        count = 0
    }
}
handleLogin = function() {
    dem++;
    if (dem % 2 == 1) {
        document.getElementById('handle-login').style.display = "block";
    } else { document.getElementById('handle-login').style.display = "none"; }

    if (dem > 10000) {
        dem = 0;
    }
}

function on() {
    document.getElementById("overlay").style.display = "block";
    document.getElementById('nav-bar-mobie').style.transform = "translateX(0%)";
}

function off() {
    document.getElementById("overlay").style.display = "none";
    document.getElementById('nav-bar-mobie').style.transform = "translateX(100%)";
    document.getElementById('nav-overlay').style.background = "#fff";
}