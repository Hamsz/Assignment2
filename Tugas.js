function submitForm() {
    event.preventDefault();

    const name = document.getElementById("input-name").value;
    document.getElementById("name").innerText = name;

    const Role = document.getElementById("input-Role").value;
    document.getElementById("Role").innerText = Role;

    const Availbility = document.getElementById("input-Availbility").value;
    document.getElementById("Availbility").innerText = Availbility;

    const Age = document.getElementById("input-Age").value;
    document.getElementById("Age").innerText = Age;

    const Country = document.getElementById("input-Country").value;
    document.getElementById("Country").innerText = Country;

    const Years = document.getElementById("input-Years").value;
    document.getElementById("Years").innerText = Years;

    const Email = document.getElementById("input-Email").value;
    document.getElementById("Email").innerText = Email;
}
