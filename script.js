document.getElementById('submit').onclick = function () {
	var userInput = document.getElementById('inputUserName').value;
    document.getElementById('data').innerHTML="";
    fetch("https://api.github.com/users/"+userInput)
    .then((result) => result.json())
    .then((data) => {

        // Avatar Image //////////////////////////////
        let img = document.createElement('img');
        img.setAttribute("src",data.avatar_url);
        img.setAttribute("alt","Avatar");
        img.setAttribute("height",200);
        /////////////////////////////////////////////

        // Login Info ///////////////////////////////
        let login = document.createElement('p');
        login.innerHTML = "Login : "+data.login;
        //////////////////////////////////////////////

        // Creation Info /////////////////////////////
        let created_at = document.createElement('p');
        created_at.innerHTML = "Created At : "+data.created_at;
        //////////////////////////////////////////////

        // Name Info /////////////////////////////////
        let name = document.createElement('p');
        name.innerHTML = "Name : "+data.name;
        //////////////////////////////////////////////

        // Appending Items to the Box. ///////////////
        document.getElementById("data").append(img);
        document.getElementById("data").append(name);
        document.getElementById("data").append(login);
        document.getElementById("data").append(created_at);
        //////////////////////////////////////////////
    })
}