const searchEl = document.querySelector('.search'); //class가 search인 요소를 검색
const searchInputEl = searchEl.querySelector('input'); //const searchInputEl = document.querySelector('.search input');

searchEl.addEventListener('click', function(){
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
    searchEl.classList.add('focused') // focused라는 이름의 class내용추가 
    searchInputEl.setAttribute('placeholder','통합검색');
});

searchInputEl.addEventListener('blur', function(){ //focus가 사라지면
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','');
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();