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