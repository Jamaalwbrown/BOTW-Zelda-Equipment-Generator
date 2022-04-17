//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
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
        
        document.querySelector('h2').innerText = item1.name;
        document.querySelector('#item1-pic').src = item1.image;
        document.querySelector('h3').innerText = item1.description;

        // if( data.media_type === 'image' ){
        //   document.querySelector('img').src = data.hdurl
        // }else if(data.media_type === 'video'){
        //   document.querySelector('iframe').src = data.url
        // }
       
        // document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
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

