//Example fetch using pokemonapi.co
document.querySelector('#get-equipment').addEventListener('click', getFetch)

document.querySelector('#reset').addEventListener('click', resetPage)

function getFetch(){
  document.querySelector('img').src = "img/link_ready.jpg"

  const url = 'https://botw-compendium.herokuapp.com/api/v2'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        let randomSelector1 = Math.floor(Math.random() * data.data.equipment.length);
        let randomSelector2 = Math.floor(Math.random() * data.data.equipment.length);
        let randomSelector3 = Math.floor(Math.random() * data.data.equipment.length);

        const item1 = new EquipmentInfo(data.data.equipment[randomSelector1])
        const item2 = new EquipmentInfo(data.data.equipment[randomSelector2])
        const item3 = new EquipmentInfo(data.data.equipment[randomSelector3])
        
        document.querySelector('#item-name-left').innerText = item1.name;
        document.querySelector('#item1-pic').src = item1.image;
        document.querySelector('#item-explain-left').innerText = item1.description;

        document.querySelector('#item-name-middle').innerText = item2.name;
        document.querySelector('#item2-pic').src = item2.image;
        document.querySelector('#item-explain-middle').innerText = item2.description;

        document.querySelector('#item-name-right').innerText = item3.name;
        document.querySelector('#item3-pic').src = item3.image;
        document.querySelector('#item-explain-right').innerText = item3.description;

        document.querySelector('#equipment-status').innerText = 'Scroll down to see your loadout';
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function resetPage() {

  document.querySelector('#item-name-left').innerText = "Empty Slot";
  document.querySelector('#item1-pic').src = "";
  document.querySelector('#item-explain-left').innerText = "Explanation";

  document.querySelector('#item-name-middle').innerText = "Empty Slot"
  document.querySelector('#item2-pic').src = "";
  document.querySelector('#item-explain-middle').innerText = "Explanation";

  document.querySelector('#item-name-right').innerText = "Empty Slot";
  document.querySelector('#item3-pic').src = "";
  document.querySelector('#item-explain-right').innerText = "Explanation";

  document.querySelector('#equipment-status').innerText = 'I have no equipment';

}

class EquipmentInfo {
  constructor(equipmentData) { //I am passing in data.data.equipment
    this.name = equipmentData.name,
    this.description = equipmentData.description,
    this.image = equipmentData.image
  }

  testCall() {
    console.log(this.name + this.description);
  }
}

