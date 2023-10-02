function verificar() {
   var data = new Date()
   var ano = data.getFullYear()
   var fano = document.getElementById('txtano')
   var res = document.querySelector('div#res')
   if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERROR] Verifique os dados e tente novamente !');
   } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        gênero = 'Homem'
        if(idade >= 0 && idade < 10) {
            //Criança
            img.setAttribute('src', 'crianca-m.png')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'jovem-m.png')
        } else if (idade < 60) {
            //Adulto
            img.setAttribute('src', 'adulto-m.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idoso-m.png')
        }
    } else if (fsex[1].checked) {
        gênero = 'Mulher'
        if(idade >= 0 && idade < 10) {
            // Criança
            img.setAttribute('src', 'crianca-f.png')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'jovem-f.png')
        } else if (idade < 60) {
            // Adulta
            img.setAttribute('src', 'adulto-f.png')
        } else {
            // Idosa
            img.setAttribute('src', 'idoso-f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `O resultado é ${gênero} com ${idade} anos. `
    res.appendChild(img)
    }
}