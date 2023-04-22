class house{
    constructor(number, address, city, area){
        this.number = number;
        this.address = address;
        this.city = city;
        this.area = area;
    }
}

function addHouseToList(){
    const v = document.querySelectorAll('form p input');

    let hasAnEmptySpace = false;
    for (i = 0; i < v.length; i++) {
        if(v[i].value == ""){
            alert("Por favor preencha tudo.");
            hasAnEmptySpace = true;
            return;
        }
    }

    if(!hasAnEmptySpace){
        const newHouse = new house(v[0].value, v[1].value, v[2].value, v[3].value)
        houseList.push(newHouse)
        showOnPage(newHouse)
    }
}

function removeHouseFromList(event){
    document.querySelector('section.houses-added').removeChild(event.target.parentNode)
}

function showOnPage(house){
    const addDiv = document.createElement('div');
    const addP = document.createElement('p');
    const addButton = document.createElement('button')

    addP.innerText = 'Numéro: ' + house.number + "\nBairro: " + house.address + '\nCidade: ' + house.city + '\nÁrea: ' + house.area

    addButton.innerText = 'Remover'
    addButton.setAttribute('onclick', 'removeHouseFromList(event)')
    addButton.setAttribute('class', 'remove-button')

    addDiv.setAttribute('class', 'is-inline')
    addDiv.appendChild(addP)
    addDiv.appendChild(addButton)

    document.querySelector('section.houses-added').appendChild(addDiv)
}

let houseList = []