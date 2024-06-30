import { data } from "./data.js";

const li = document.querySelectorAll('li');
const body = document.querySelector('body');
const visual_img = document.querySelector('.visual img');
const name = document.querySelector('.nickName');

function setBgColor(dataIndex){
  const colorA = data[dataIndex - 1].color[0];
  const colorB = data[dataIndex - 1].color[1];
  body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}

function setImage(target, dataIndex){
  target.src = `./assets/${data[dataIndex - 1].name}.jpeg`;
  target.alt = data[dataIndex - 1].alt;

  visual_img.src = target.src;
  visual_img.alt = target.alt;
}

function setNameText(dataIndex){
  name.textContent = data[dataIndex - 1].name;
}

li.forEach(elem => {
  elem.addEventListener('click', () => {
    li.forEach(li => li.classList.remove('is-active'));
    elem.classList.add('is-active');

    const dataIndex = elem.getAttribute('data-index');

    setBgColor(dataIndex);
    setImage(elem, dataIndex);
    setNameText(dataIndex);
  })
});