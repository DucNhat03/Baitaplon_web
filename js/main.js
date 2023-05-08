//Open link in new tab
function openLink(hreff) {
    // return location.href = hreff;
    return window.open(hreff, "_blank")
}
//Open link in my tab
function openLink1(hreff) {
    return window.open(hreff, "_self")
}
//Reload myweb
function reLoad() {
    return location.reload();
}

function HidenVsShow() {
    for (var i = 0; i < 8; i++) {
        let y = "myDIV" + i;
        var x = document.getElementById(y);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}


function HidenVsShow_BtnPage03() {
    for (var i = 0; i < 7; i++) {
        var x = document.getElementById("BtnPage03" + "_" + i);
        if (x.style.display === "none") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    }
}