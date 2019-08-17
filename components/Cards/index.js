// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
axios.get('https://lambda-times-backend.herokuapp.com/articles')
  .then(response => {
    const bootStrap = response.data.articles.bootstrap;
    const javaScript = response.data.articles.javascript;
    const jQuery = response.data.articles.jquery;
    const node = response.data.articles.node;
    const tech = response.data.articles.technology;

    bootStrap.forEach(newArticleCard => {
      const newArticle = newCards(newArticleCard);
      const cardContainer = document.querySelector('.cards-container');
      cardContainer.appendChild(newArticle);
    })
    javaScript.forEach(newArticleCard => {
      const newArticle = newCards(newArticleCard);
      const cardContainer = document.querySelector('.cards-container');
      cardContainer.appendChild(newArticle);
    })
    jQuery.forEach(newArticleCard => {
      const newArticle = newCards(newArticleCard);
      const cardContainer = document.querySelector('.cards-container');
      cardContainer.appendChild(newArticle);
    })
    node.forEach(newArticleCard => {
      const newArticle = newCards(newArticleCard);
      const cardContainer = document.querySelector('.cards-container');
      cardContainer.appendChild(newArticle);
    })
    tech.forEach(newArticleCard => {
      const newArticle = newCards(newArticleCard);
      const cardContainer = document.querySelector('.cards-container');
      cardContainer.appendChild(newArticle);
    })
    // console.log(response.data.articles);
    // const testArray = Array.from(test);
    // console.log(testArray);    
  })
  .catch(error => {
    console.error(error);
  });

function newCards(Object) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  const cardHeadline = document.createElement('div');
  cardHeadline.classList.add('headline');
  cardHeadline.textContent = Object.headline;

  const cardAuthor = document.createElement('div');
  cardAuthor.classList.add('author');

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  cardAuthor.appendChild(imgContainer);

  const img = document.createElement('img');
  img.setAttribute('src', Object.authorPhoto);
  imgContainer.appendChild(img);

  const cardSpan = document.createElement('span');
  cardSpan.textContent = `By ${Object.authorName}`;
  imgContainer.appendChild(cardSpan);

  cardDiv.appendChild(cardHeadline);
  cardDiv.appendChild(cardAuthor);
  
  return cardDiv;
}

