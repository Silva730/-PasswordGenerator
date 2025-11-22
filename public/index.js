function gerarSenha(length) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
    var password = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * chars.length);
        password += chars.charAt(randomIndex);
    }
    return password;
}
document.addEventListener("DOMContentLoaded", function () {
    var lengthInput = document.getElementById("length");
    var button = document.getElementById("generate");
    var output = document.getElementById("output");
    button.addEventListener("click", function () {
        var length = parseInt(lengthInput.value, 10);
        output.value = gerarSenha(length);
    });
});
