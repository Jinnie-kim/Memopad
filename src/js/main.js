'use strict';

const memoInputForm = document.querySelector('.memopad-input');
const memoInput = memoInputForm.querySelector('input');
const memoListPage = document.querySelector('.page-lists');

let memos = [];
const MEOMS_KEY = 'memos';

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

function saveMemos() {
    localStorage.setItem('memos', JSON.stringify(memos));
}

function handleMemoSubmit(event) {
    event.preventDefault();
    // input의 value를 새로운 변수에 복사 
    const newMemo = memoInput.value;
    memoInput.value = '';
    memos.push(newMemo);
    paintMemo(newMemo);
    saveMemos();
}

memoInputForm.addEventListener('submit', handleMemoSubmit);

const savedMemos = localStorage.getItem(MEOMS_KEY);

if(savedMemos !== null) {
    const parsedMemos = JSON.parse(savedMemos);
    memos = parsedMemos;
    parsedMemos.forEach(item => paintMemo(item));
}