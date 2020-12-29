function adduser(){
    p1_name=document.getElementById("player1_name").value;
    p2_name=document.getElementById("player2_name").value;

    localStorage.setItem("player1", p1_name);
    localStorage.setItem("player2", p2_name);

    window.location="game_page.html";
}
