function shuffle(elems) {
    allElems = (function() {
        var ret = [],
            l = elems.length;
        while (l--) {
            ret[ret.length] = elems[l];
        }
        return ret;
    })();

    var shuffled = (function() {
            var l = allElems.length,
                ret = [];
            while (l--) {
                var random = Math.floor(Math.random() * allElems.length),
                    randEl = allElems[random].cloneNode(true);
                allElems.splice(random, 1);
                ret[ret.length] = randEl;
            }
            return ret;
        })(),
        l = elems.length;

    while (l--) {
        elems[l].parentNode.insertBefore(shuffled[l], elems[l].nextSibling);
        elems[l].parentNode.removeChild(elems[l]);
    }
}

window.onload = function() {
    //get all divs from div called container
    gameContainer = document.getElementById('container').getElementsByTagName('div');
    shuffle(gameContainer);
    var btn = document.querySelector("button");
    selectedCell();
    if (btn === null) {
        console.log(btn);
    } else {
        btn.addEventListener(
            "click",
            function() {
                if (confirm("Do you want to restart the game?"))
                    window.location.load(true);
            },
            false
        );
    }

    function selectedCell() {
        for (let i = 0; i < gameContainer.length; i++) {
            gameContainer[i].addEventListener("click", function() {
                selectedEl = document.querySelector(".cell");
                if (selectedEl) {
                    selectedEl.classList.remove(".cell");
                }
                this.classList.add("selCell");
                let table = document.getElementById("player1");
                let val = gameContainer[i].innerHTML;
                let td1 = document.createElement("td");
                let tdText = document.createTextNode(val + " ");
                td1.className = "tabVal";
                td1.appendChild(tdText);
                table.appendChild(td1);
            }, false);;
        }
    }
}