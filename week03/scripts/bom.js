
// declare three const variables that hold references to the input, button, and .list elements.
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

/*
button.addEventListener('click', () => {
    if (input.value !== '') {
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.appendChild(deleteButton);
        list.appendChild(li);
        deleteButton.addEventListener('click', () => {
            list.removeChild(li);
            input.focus();
        });
        input.value = '';
    } else {
        input.focus();
    }
});

*/

// Declare and Initialize chaptersArray
let chaptersArray = getChapterList() || [];

// Populate Displayed List
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Button Click Event Listener
button.addEventListener('click', () => {
  if (input.value !== '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
  else {
    input.focus();
  }
});

// Define displayList Function
function displayList(item) {
  // Create list item and append to the list
  const listItem = document.createElement('li');
  listItem.textContent = item;

  // Add delete button to each list item
  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.addEventListener('click', () => {
    deleteChapter(item);
    listItem.remove();
  });

  // Append delete button to the list item
  listItem.appendChild(deleteButton);

  // Append the list item to the list
  list.appendChild(listItem);
}

// Define setChapterList Function
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Define getChapterList Function
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Define deleteChapter Function
function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

