// let print = console.log

// function Store(name, min_cus, max_cus, average_cook) {
//     let hourly_sales = [
//         "6AM", "7AM", "8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM", "6PM", "7PM"
//     ];
//     let total=0;
//     this.max_cus = max_cus;
//     this.min_cus = min_cus;
//     this.average_cook = average_cook;
//     let array_target = document.getElementById('array_target');
//     console.log (array_target);
//     let childOfBody = document.createElement('ul');
//     array_target.appendChild(childOfBody);
//     childOfBody.textContent = name;

//     for (let i = 0; i < 14; i++ ) {
//         let generateNumber = Math.floor(Math.random() * (this.max_cus - this.min_cus + 1) + this.min_cus);
//         console.log(generateNumber);
//         let true_result = Math.floor(generateNumber * this.average_cook);
//         let listItem = document.createElement('li');
//         hourly_sales[i]= ` ${hourly_sales[i]}:   ${true_result} `;
//         total = true_result + total; 
//         listItem.textContent = hourly_sales[i];
//         childOfBody.appendChild(listItem);
//     }   
//     listItem = document.createElement('li');
//     listItem.textContent = 'Total: ' + total;
//     childOfBody.appendChild(listItem);
    
//     return {
//         store_name: name,
//         min_customers: min_cus,
//         max_customers: max_cus,
//         average_cookies: average_cook,
//         randomCustomer_cookies: hourly_sales,
//         get_average: function () {
//             return this.min_customers / this.max_customers;
//         },
//         set_min_cookies: function (min_customers) {
//             this.min_customers = min_customers;

//         },
//         set_random_customers: function (averageTimesRandom) {
//             this.averageTimesRandom = averageTimesRandom;
//         },
//         print_info: function () {
//             print(` ${this.store_name} Minimum hourly customers: ${this.min_customers} Maximum hourly customers: ${this.max_customers} Average cookies per sale: ${this.average_cookies} ${hourly_sales} ${total}  `);
//         },
//     }
// }

// let storeSeattle = new Store("Seattle", 23, 65, 6.3);
// let storeTokyo = new Store("Tokyo", 3, 24, 1.2);
// let storeDubai = new Store("Dubai", 11, 38, 3.7);
// let storeParis = new Store("Paris", 20, 38, 2.3);
// let storeLima = new Store("Lima", 2, 16, 4.6);

// storeSeattle.print_info();
// storeTokyo.print_info();
// storeDubai.print_info();
// storeParis.print_info();
// storeLima.print_info();



// for (i = 0; stores[0].hourly_sales.length; i++) {
//     let salesByHour = 0
//     for (j = 0; j < stores.length; j++) {
//         salesByHour = salesByHour + stores[j].hourly_sales[i]
//     }
//     totalSalesByHour.push(salesByHour)
// }
// let grandTotal = 0
// for (i=0; i < totalSalesByHour.length; i++) {
//     grandTotal += totalSalesByHour[i];
// }

// Store.prototype.render = function () {
    
// }


// Not working:
// function generateRange(min_cus, max_cus) {
//     let result = (max_cus - min_cus);
//     console.log(result);
//      return result;
// }

// function generateRange(min, max) {
//     return Math.floor(Math.random()) * (max - min + 1) + min);
// }
// let generateNumber = generateRange(this.min_cus, this.max_cus);
// Math.floor(generateNumber * this.average_cook);

// Math.round(Math.floor(Math.random() * ((this.max_cus - this.min_cus + 1) + this.min_cus) * average_cook));

// Seattle.calcavgcook();
// Seattle.rendtr();
// Lima.calcavgcook();
// Lima.rendtr();
// Paris.calcavgcook();
// Paris.rendtr();
// Dubai.calcavgcook();
// Dubai.rendtr();
// Tokyo.calcavgcook();
// Tokyo.rendtr();