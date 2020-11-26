function select(num) {
    for (i = 1; i <= 3; i++) {
        var menu = document.getElementById("a" + i);
        var con = document.getElementById("a_" + i);
        menu.className = i == num ? "curr": "";
        con.style.display = i == num ? "block": "none";
    }
}