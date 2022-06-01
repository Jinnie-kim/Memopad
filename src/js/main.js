'use strict';

const memoInputForm = document.querySelector('.memopad-input');
let memoInput = memoInputForm.querySelector('input');
const memoListPage = document.querySelector('.page-lists');

function handleToDoSubmit(event) {
    event.preventDefault();
    // input의 value를 새로운 변수에 복사 
    const newMemo = memoInput.value;
    memoInput.value = '';
}

memoInputForm.addEventListener('submit', handleToDoSubmit);

