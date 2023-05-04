
  async function mainEvent() {
    // the async keyword means we can make API requests

    /* START OF NEW CODE 4/4/23 */

    const addToChart = document.querySelector('#add_to_chart');
    const clearChart = document.querySelector('#clear_chart');
    const url = new URL("https://trackapi.nutritionix.com/v2/search/instant");
    const params = 

    addToChart.addEventListener('click', async (SubmitEvent) => {
      console.log('added to chart');

    })
  }

  document.addEventListener("DOMContentLoaded", async () => mainEvent()); // the async keyword means we can make API requests
  