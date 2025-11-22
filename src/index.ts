function gerarSenha(length: number): string {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars.charAt(randomIndex);
  }
  return password;
}

document.addEventListener("DOMContentLoaded", () => {
  const lengthInput = document.getElementById("length") as HTMLInputElement;
  const button = document.getElementById("generate") as HTMLButtonElement;
  const output = document.getElementById("output") as HTMLInputElement;

  button.addEventListener("click", () => {
    const length = parseInt(lengthInput.value, 10);
    output.value = gerarSenha(length);
  });
});
