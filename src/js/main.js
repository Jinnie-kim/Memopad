'use strict';

const memoInputForm = document.querySelector('.memopad-input');
let memoInput = memoInputForm.querySelector('input');
const memoListPage = document.querySelector('.page-lists');

function paintMemo(newMemo) {
    const memoList = document.createElement('li');
    const memoListButton = document.createElement('button');
    const memoListButtonIcon = document.createElement('i');
    const memoListContent = document.createElement('strong');
    memoList.setAttribute('class', 'page-list');
    memoListButton.setAttribute('type', 'button');
    memoListButton.addEventListener('click', deleteMemo);
    memoListButtonIcon.setAttribute('class','fa-solid fa-check');
    memoListContent.innerText = newMemo;
    memoListButton.appendChild(memoListButtonIcon);
    memoList.appendChild(memoListButton);
    memoList.appendChild(memoListContent);
    memoListPage.appendChild(memoList);
}

function deleteMemo(event) {
    const memoListNode = event.target.parentElement.parentElement;
    memoListNode.remove();
}
function handleMemoSubmit(event) {
    event.preventDefault();
    // input의 value를 새로운 변수에 복사 
    const newMemo = memoInput.value;
    memoInput.value = '';
    paintMemo(newMemo);
}

memoInputForm.addEventListener('submit', handleMemoSubmit);

