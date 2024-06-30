# Elemental Movie Poster 구현

---
## main.js에서 data.js import
```
// main.js
export const data = [ ... ];

// data.js
import { data } from "./data.js";

// index.html
<!-- <script src="./js/data.js" defer></script> -->
<script type="module" src="./js/main.js"></script>
```

## DOM 요소 선택
```
const li = document.querySelectorAll('li');
const body = document.querySelector('body');
const visual_img = document.querySelector('.visual img');
const name = document.querySelector('.nickName');
```
- querySelector, querySelectorAll을 사용하여 DOM에서 요소 선택

## 배경색 변경
```
function setBgColor(dataIndex){
  const colorA = data[dataIndex - 1].color[0];
  const colorB = data[dataIndex - 1].color[1];
  body.style.background = `linear-gradient(to bottom, ${colorA}, ${colorB})`;
}
```
- 'data.js'의 data 배열에서 dataIndex - 1 번째 객체의 color 값 읽어와 배경색 변경

## 이미지 변경
```
function setImage(target, dataIndex){
  target.src = `./assets/${data[dataIndex - 1].name}.jpeg`;
  target.alt = data[dataIndex - 1].alt;

  visual_img.src = target.src;
  visual_img.alt = target.alt;
}
```
- 'data.js'의 data 배열에서 dataIndex - 1 번째 객체의 name, alt 값 읽어와 이미지 변경

## 이름 변경
```
function setNameText(dataIndex){
  name.textContent = data[dataIndex - 1].name;
}
```
- 'data.js'의 data 배열에서 dataIndex - 1 번째 객체의 name 값 읽어와 이름 변경

## 이벤트 리스너 등록
```
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
```
1. 각각의 li 요소에 클릭 이벤트 리스너 등록
2. 모든 li 요소에서 'is-active' 클래스 제거
3. 클릭된 요소에 'is-active' 클래스 추가
4. 클릭된 요소의 인덱스 값 추출
5. 배경색, 이미지, 이름 변경 함수 호출