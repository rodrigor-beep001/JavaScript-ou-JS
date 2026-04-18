// 1. No clique do botão pegar o valor de todos os campos;
// 2. Validar mínimo e máximo de carácteres do campo Nome
// 3. Validar mínimo máximno e presença de @, e .? no E-mail
// 4..Validar mínimo e máximo de carácteres e presença de carácteres especiais da Senha
// 5. Validar mínimo de 18 anos em Data
// 6. Colocar Gênero como opcional 
function validateAndSend() {
  const emailInput = document.querySelector('input[type=email]')
  const passwordInput = document.querySelector('input[type=password]')
  console.log(emailInput.value, passwordInput.value)

  // pode-se usar e/ou para comparar 2 ou mais coisas, usando: "&&" "||"

  if (emailInput.value.length < 5 || passwordInput.value.length < 8) {
    console.log('Mínimo de letras não atingido ')
  }
}