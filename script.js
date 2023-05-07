function injectHTML(list) {
  console.log("fired injectHTML");
  const target = document.querySelector("#restaurant_list");
  target.innerHTML = "";
  list.forEach((item) => {
    const str = `<li>${item.name}</li>`;
    target.innerHTML += str;
  });
}

  async function mainEvent() {
    const mainForm = document.querySelector(".main_form")
    const addToChart = document.querySelector("#add_to_chart");
    const clearChart = document.querySelector("#clear_chart");
    const addItem = document.querySelector("#add_Item")
    const input = document.querySelector("#input_Text");
    const input_arr = [];
    var final_input;
    const url = "https://trackapi.nutritionix.com/v2/search/instant?query=";

    input.addEventListener('input', (event) => {
      input_arr.push(document.getElementById("input_Text").value);
      final_input = input_arr.slice(-1);
      console.log(final_input);
    })

 addItem.addEventListener('click', async (SubmitEvent) => {
      console.log("Loading Data");

      const result = await fetch(url + final_input, {
        headers: {
          'x-app-id': 'a70a1a77',
          'x-app-key': '85cb5f8ba0262142e4397b3393c105c4'
        }
      });

      const data = await result.json()

      console.log(data)
    })
    

    addToChart.addEventListener('click', async (SubmitEvent) => {
      console.log('added to chart');
    })

    clearChart.addEventListener('click', async (SubmitEvent) =>{
      console.log('cleared chart');

    })
  }

  document.addEventListener("DOMContentLoaded", async () => mainEvent()); // the async keyword means we can make API requests
  