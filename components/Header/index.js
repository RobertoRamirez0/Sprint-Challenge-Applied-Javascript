// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header(){
  const headerDiv = document.createElement('div');
  headerDiv.classList.add('header');

  const headerDate = document.createElement('span');
  headerDate.classList.add('date');
  headerDate.textContent = 'March 28, 2019';

  const headerH1 = document.createElement('h1');
  headerH1.textContent = 'Lambda Times';

  const headerTemp = document.createElement('span');
  headerTemp.textContent = '98°';
  
  headerDiv.appendChild(headerDate);
  headerDiv.appendChild(headerH1);
  headerDiv.appendChild(headerTemp);

  return headerDiv;
}
let headerContainer = document.querySelector('.header-container');
headerContainer.appendChild(Header());