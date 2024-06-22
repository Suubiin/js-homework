
const user = {
  id:'asd@naver.com',
  pw:'spdlqj123!@'
}

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}


const idInput = document.getElementById('userEmail');
const pwInput = document.getElementById('userPassword');
const loginButton = document.querySelector('.btn-login');


idInput.addEventListener('input', ()=>{
  if(!emailReg(idInput.value)){
    idInput.classList.add('is--invalid');
  }
  else{
    idInput.classList.remove('is--invalid');
  }
})

pwInput.addEventListener('input', ()=>{
  if(!pwReg(pwInput.value)){
    pwInput.classList.add('is--invalid');
  }
  else{
    pwInput.classList.remove('is--invalid');
  }
})

loginButton.addEventListener('click', (event) => {
  event.preventDefault();

  if (idInput.value === user.id && pwInput.value === user.pw) {
    window.location.href = 'welcome.html';
  }
  else {
    alert('아이디 또는 비밀번호를 잘못 입력했습니다')
  }
});