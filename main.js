var count = 1,
    item = document.getElementsByClassName("items");

for (var i = 0; i < 9; i++) {

    item[i].onclick = function() {

        if (this.classList.contains("selected")) {

            alert("Already selected");
        } else if (count % 2 == 0) {
            this.classList.add("o", "selected");
            count += 1;
        } else {
            this.classList.add("x", "selected");
            count += 1;
        };
        if (item[0].classList.contains("x") && item[1].classList.contains("x") && item[2].classList.contains("x") ||
            item[3].classList.contains("x") && item[4].classList.contains("x") && item[5].classList.contains("x") ||
            item[6].classList.contains("x") && item[7].classList.contains("x") && item[8].classList.contains("x") ||
            item[0].classList.contains("x") && item[3].classList.contains("x") && item[6].classList.contains("x") ||
            item[1].classList.contains("x") && item[4].classList.contains("x") && item[7].classList.contains("x") ||
            item[2].classList.contains("x") && item[5].classList.contains("x") && item[8].classList.contains("x") ||
            item[2].classList.contains("x") && item[5].classList.contains("x") && item[8].classList.contains("x") ||
            item[0].classList.contains("x") && item[4].classList.contains("x") && item[8].classList.contains("x") ||
            item[2].classList.contains("x") && item[4].classList.contains("x") && item[6].classList.contains("x")) {
            document.getElementById("winner").innerText = "X Wins!";
            document.getElementById("clap").style.display = 'block';


        } else if (item[0].classList.contains("o") && item[1].classList.contains("o") && item[2].classList.contains("o") ||
            item[3].classList.contains("o") && item[4].classList.contains("o") && item[5].classList.contains("o") ||
            item[6].classList.contains("o") && item[7].classList.contains("o") && item[8].classList.contains("o") ||
            item[0].classList.contains("o") && item[3].classList.contains("o") && item[6].classList.contains("o") ||
            item[1].classList.contains("o") && item[4].classList.contains("o") && item[7].classList.contains("o") ||
            item[2].classList.contains("o") && item[5].classList.contains("o") && item[8].classList.contains("o") ||
            item[2].classList.contains("o") && item[5].classList.contains("o") && item[8].classList.contains("o") ||
            item[0].classList.contains("o") && item[4].classList.contains("o") && item[8].classList.contains("o") ||
            item[2].classList.contains("o") && item[4].classList.contains("o") && item[6].classList.contains("o")) {
            document.getElementById("winner").innerText = "O Wins!";
            document.getElementById("clap").style.display = 'block';

        } else if (count > 9) {
            document.getElementById("winner").innerText = "0:0";
        } else {
            return;
        };


    };


};









// console.dir(document.getElementsByClassName("items"));
