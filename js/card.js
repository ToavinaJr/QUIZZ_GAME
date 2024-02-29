let names = [ "Bing Mama", "Elektra", "Binaire", "Moglette", "Mook", "Madama Be"]
let cardContainer = document.getElementById("authors-container")

names.forEach( name => {
    cardContainer.innerHTML += `
        <div class="card">
            <p> ${name} </p>
            <img src="./img/profil.png" alt="">
        </div>    
    
    `;
});