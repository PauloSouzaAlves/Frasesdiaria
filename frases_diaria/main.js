function showScreen2() {

  document.querySelector('.screen1').classList.add('hide');
  document.querySelector('.screen2').classList.remove('hide');

}



function showScreen1() {
  var r_text = new Array();
  r_text[0] = "A vida trar&aacute; coisas boas se tiveres paci&ecirc;ncia.";
  r_text[1] = "N&atilde;o compense na ira o que lhe falta de raz&atilde;o.";
  r_text[2] = "Defeitos e virtudes s&atilde;o apenas dois lados da mesma moeda.";
  r_text[3] = "A maior de todas as torres come&ccedil;a no solo.";
  r_text[4] = "N&atilde;o h&aacute; que ser forte. H&aacute; que ser flex&iacute;vel.";
  r_text[5] = "Há tr&ecirc;s coisas que jamais voltam; a flecha lan&ccedil;ada, a palavra dita e a oportunidade perdida.";
  r_text[6] = "A juventude n&atilde;o é uma &eacute;poca da vida, &eacute; um estado de esp&iacute;rito.";
  var i = Math.floor(7 * Math.random())
  document.getElementById("frases").innerHTML = r_text[i];

  document.querySelector('.screen1').classList.remove('hide');
  document.querySelector('.screen2').classList.add('hide');
}

