// JavaScript source code
var getBut = document.getElementsByClassName("parBut");

for (var junban = 0; junban < getBut.length; junban++) {
    getBut[junban].onclick = function clickSubmit() {
        document.body.setAttribute("data-state", "submit");
        var thisName = getBut[junban].parentNode.getAttribute("dName");
        document.getElementsByClassName("submInput")[0].setAttribute("action", thisName);//´Ë´¦ÓÐÊäÈë£¬ÇëÊäÈë¶ÓÎé½ÓÊÜÂ·¾¶£¬Ä¬ÈÏÎªÇ°ÃæÊäÈëµÄ¶ÓÎéID¡£
    }
}
document.getElementsByClassName("shutBut")[0].onclick = function () {
    document.body.setAttribute("data-state", "normal");
}
var getSelect = document.getElementsByClassName("hidden-input");
for (var bango = 0; bango < getSelect.length; bango++) {
    getSelect[bango].onchange = function () {
        if (this.value == "else") {
            this.parentNode.setAttribute("data-state", "else");
        } else {
            this.parentNode.setAttribute("data-state", "normal");
        }
    }
}