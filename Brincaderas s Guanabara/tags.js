// 1. No clique do botão pegar o valor de todos os campos;
// 2. Validar mínimo e máximo de carácteres do campo Nome;
// 3. Validar mínimo máximno e presença de @, e .? no E-mail;
// 4..Validar mínimo e máximo de carácteres e presença de carácteres especiais da Senha;
// 5. Validar mínimo de 18 anos em Data;
// 6. Colocar Gênero como opcional
function validateAndSend() {
  const nameValue = document.querySelector('input[type=text]').value
  const emailValue = document.querySelector('input[type=email]').value
  const passwordValue = document.querySelector('input[type=password]').value
  const birthdayValue = new Date(document.querySelector('input[type=date]').value)
  const maleValue = document.querySelector('input#male').checked
  const femaleValue = document.querySelector('input#female').checked

  console.log(birthdayValue.getFullYear(), new Date().getFullYear)

  // pode-se usar e/ou para comparar 2 ou mais coisas, usando: "&&" "||"

  if (nameValue.length < 3 || nameValue.length > 255) {
    console.log('Quantidade de caractéres do nome incorreta :(')
  } else if (emailValue.length < 6 || emailValue.length > 255) { console.log('Quantidade de caractéres do email incorreta :(') } else if (passwordValue.length > 8 || passwordValue.length > 255) { 'Quantidade de caractéres do senha incorreta :(' } else {
    console.log(nameValue, emailValue, passwordValue, birthdayValue, maleValue, femaleValue)
    console.log('Seu cadastro foi um  sucesso!!! :)')
  }
}
