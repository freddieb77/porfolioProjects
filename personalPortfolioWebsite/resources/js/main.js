let readMore = document.getElementById('read-more');
let moreInfo = document.getElementById('more-info');

// Write your code here:
const showInfo = () => {
  moreInfo.style.display = 'block';
}

readMore.addEventListener('click', showInfo);


let readLess = document.getElementById('read-less');


const hideInfo = () => {
  moreInfo.style.display = 'none';
}

readLess.addEventListener('click', hideInfo);

