function myFunction() {
    var menus = document.getElementsByClassName("menuu");
    for (var i = 0; i < menus.length; i++) {
        menus[i].style.display = "unset";
    }

    var infos = document.getElementsByClassName("info");
    for (var j = 0; j < infos.length; j++) {
        infos[j].style.display = "none";
    }
}

function myfonction() {
    var infos = document.getElementsByClassName("info");
    for (var i = 0; i < infos.length; i++) {
        infos[i].style.display = "unset";
    }

    var menus = document.getElementsByClassName("menuu");
    for (var j = 0; j < menus.length; j++) {
        menus[j].style.display = "none";
    }
}

  