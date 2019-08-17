// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>
axios.get('https://lambda-times-backend.herokuapp.com/topics')
  .then(response => {
    const topicsArray = response.data.topics;
    topicsArray.forEach(newTopic => {
      const newInfo = newTab(newTopic);
      const topicElement = document.querySelector('.topics');
      topicElement.appendChild(newInfo);
    })})    
  .catch(error => {
    console.error(error)
  });

function newTab(data){
  const tabDiv = document.createElement('div');
  tabDiv.classList.add('tab');
  tabDiv.textContent = data;

  return tabDiv;
}