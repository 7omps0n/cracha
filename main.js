// variaveis let ou const: na let voce consegue e pode mudar depois, let it change. já na const não, pois é um dado constante

//mudar links das redes sociais
const socialMediaLinks = {
  github: '7omps0n',
  youtube: 'CortesdoCasimitoOFICIAL',
  instagram: 'paulxvittor',
  twitter: 'paulxvittor',
  facebook: 'paulovictor.thompsonlacerda'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
} 
 changeSocialMediaLinks()
 // dentro da função changeSocialMediaLinks está o laço de repetição for (){} que está ordenando que a variavel li mude os filhos da ul id socialLinks
// a const social está pegando o valor da =s classes das li e embaixo está usando o primeiro filho da li, que é a tag 'a' e mudando a href para o endereço dentro de acentos `` como template strings para aceitar comandos dentro, para mudar o nome do site ${} e o endereço dps da barra socialMediaLinks e chamando a social para mudar cada uma das redes

 function getGitHubProfileInfos(){
    const url = `https://api.github.com/users/${socialMediaLinks.github}`

    fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      gitHubLink.href = data.html_url
      userGitHub.textContent = data.login
      userBio.textContent = data.bio
      profilePhoto.src = data.avatar_url
    }) 
 }
 getGitHubProfileInfos()
 //dentro dessa função foi criada a const da url pra pegar as infos do api do github, usando as templates strings e puxando o github das infos de dentro da socialmediaLinks
 //o fetch procura as infos na url, e depois com com o then (promise) usa o modo arrow => como função para tranformar a resposta em json. Depois é alterada cada informação puxando pela id do html e as devidas ordens, fazendo o card ficar igual ao perfil do github


