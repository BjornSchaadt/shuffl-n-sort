document.addEventListener("DOMContentLoaded", function() {
    var container = document.getElementById('cardContainer');
    document.getElementById("doShuffle").addEventListener("click", shuffleCards);
    document.getElementById("doSort").addEventListener("click", sortCards);
    function shuffleCards(){
        //Shuffle the HTML elements with math random
        for (var i = container.children.length; i >= 0; i--) {
            container.appendChild(container.children[Math.random() * i | 0]);
        }
    }
    function sortCards(){
        //A reload will put the cards in ascending order. Since it's in ascending order in the HTML
        location.reload();
    }
});

