
  async function mainEvent() {
 /* START OF NEW CODE 4/4/23 */

    const addToChart = document.querySelector('#add_to_chart');
    const clearChart = document.querySelector('#clear_chart');
    const url = new URL("https://trackapi.nutritionix.com/v2/search/instant");
    const input = document.querySelector("#input_Text");
    const input_arr = [];
    var final_input;

    input.addEventListener('input', (event) => {
      input_arr.push(document.getElementById("input_Text").value);
      final_input = input_arr.slice(-1);
      console.log(final_input);
    })

    addToChart.addEventListener('click', async (SubmitEvent) => {
      console.log('added to chart');
    })

    clearChart.addEventListener('click', async (SubmitEvent) =>{
      console.log('cleared chart');

    })
  }

  document.addEventListener("DOMContentLoaded", async () => mainEvent()); // the async keyword means we can make API requests
  