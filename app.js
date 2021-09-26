'use strict';

let storeHours = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6AM', '7PM'];
let storeLocations = ['Seattle', 'Tokyo', 'Dubai', 'Paris', 'Lima'];

function Store(name, min_cus, max_cus, avgcpp) {
    this.name = name;
    this.min_cus = min_cus;
    this.max_cus = max_cus;
    this.avgcpp = avgcpp;
    this.salesPerHour = [];
    this.dailysales = 0;
    Store.all.push(this);
}

Store.all = [];

Store.prototype.calcavgcook = function() {
    for (let i = 0; i < storeHours.length; i++) {
        let rndCookSale = Math.floor(this.calcrandcook());
        this.salesPerHour.push(rndCookSale);
        this.dailysales = this.dailysales + rndCookSale;
    }
};

Store.prototype.calcrandcook = function() {
    return (Math.floor(Math.random() * (this.max_cus - this.min_cus + 1) + this.min_cus)) * this.avgcpp;
};

Store.prototype.rendtr = function() {
    let parentElem = document.getElementById('sales_data');
    let rowElem = document.createElement('tr');
    let dataElem = document.createElement('td');
    dataElem.innerText = this.name;
    rowElem.appendChild(dataElem);
    for (let s = 0; s < this.salesPerHour.length; s++) {
        dataElem = document.createElement('td');
        dataElem.innerText = this.salesPerHour[s];
        rowElem.appendChild(dataElem);
    }
    dataElem = document.createElement('td');
    dataElem.innerText = this.dailysales;
    rowElem.appendChild(dataElem);
    console.log(parentElem);
    parentElem.appendChild(rowElem);
};

let Seattle = new Store('Seattle', 23, 65, 6.3);
let Tokyo = new Store('Tokyo', 3, 24, 1.2);
let Dubai = new Store('Dubai', 11, 38, 3.7);
let Paris = new Store('Paris', 20, 38, 2.3);
let Lima = new Store('Lima', 2, 16, 4.6);

rendHead();

for (let store = 0; store < Store.all.length; store++) {
    let currentStore = Store.all[store];
    currentStore.calcavgcook();
    currentStore.rendtr();
};

function rendFoot() {
    let parentElem = document.getElementById('sales_data');
    let rowElem = document.createElement('tr');
    let dataElem = document.createElement('td');
    dataElem.innerText = 'TOTAL';
    rowElem.appendChild(dataElem);

    let grandTot = 0
    for (let h = 0; h < storeHours.length; h++) {
        let dataElem = document.createElement('td');
        let sum = 0;
        for (let store = 0; store < Store.all.length; store++) {
            sum = sum + Store.all[store].salesPerHour[h];
            grandTot = grandTot + Store.all[store].salesPerHour[h];
        }
        dataElem.innerText = sum;
        rowElem.appendChild(dataElem);
    }
    dataElem = document.createElement('td');
    dataElem.innerText = grandTot;
    rowElem.appendChild(dataElem);
    parentElem.appendChild(rowElem);
};

function rendHead() {
    let parentElem = document.getElementById('sales_data');
    let rowElem = document.createElement('tr');
    let dataElem = document.createElement('th');
    dataElem.innerText = ' ';
    rowElem.appendChild(dataElem);
    for (let i = 0; i < storeHours.length; i++) {
        dataElem = document.createElement('th');
        dataElem.innerText = storeHours[i];
        rowElem.appendChild(dataElem);
    }
    dataElem = document.createElement('th');
    dataElem.innerText = 'Daily Total';
    rowElem.appendChild(dataElem);
    parentElem.appendChild(rowElem);

};

rendFoot();


// Event Handler
let newStoreFormEl = document.getElementById('newStoreForm');


function handleNewStore(formSubmission) {
    formSubmission.preventDefault();
    let name = formSubmission.target.newStore.value;
    let min_cus = formSubmission.target.min_cus.value;
    let max_cus = formSubmission.target.max_cus.value;
    let avgcpp = formSubmission.target.avgcpp.value;
    let newMin_Cus = parseInt(min_cus);
    let newMax_Cus = parseInt(max_cus);
    let newAvgcpp = parseInt(avgcpp);
    let storeNew = new Store(name, newMin_Cus, newMax_Cus, newAvgcpp);
    storeNew.calcavgcook();
    storeNew.rendtr();
}

newStoreFormEl.addEventListener('submit', handleNewStore);

// let parentElem = document.getElementById();
// let rowElem = document.createElement();
// let dataElem = document.createElement
// dataElem.innerText = 



// Not Using:

// function renderAllStores() {
//     for (let i = 0; i < storeLocations.length; i++) {
//         storeLocations[i].rendtr();
//     }
// };

// renderAllStores();
// Store();