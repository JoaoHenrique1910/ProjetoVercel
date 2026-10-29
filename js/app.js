const btnMobile = document.getElementById('btnMobile');
const navigation = document.querySelector('.navigation');

btnMobile.addEventListener('click', () => {
  navigation.classList.toggle('ativo');
});