function submitForm(e) {

    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;

    localStorage.setItem("name", name);

    location.href = "Categorias.html";
}

