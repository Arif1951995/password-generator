const generatePass = () => {

let keys = `abcdefghijklmnopqrstuvwxyz123456789!#$%^&*`;
let lenPass = document.querySelector('.passLen');
let showPass = document.querySelector('.showPass');
let passWord = '';

for(let i = 0; i < lenPass.value; i++) {
  passWord +=  keys.charAt(Math.floor(Math.random() * keys.length));

}
// console.log(passWord);
showPass.value = passWord;




}

document.querySelector('button').addEventListener('click', generatePass);