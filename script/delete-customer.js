import {customerDetails} from '../data/customer-details.js';

let customerHTML = document.querySelector('.customer-list');
let html = '';
customerDetails.forEach((customer)=>{
  html +=
  `
      <div class="customer-list-grid">
        <div style="height: 85%;">
          <div>Name: ${customer.name}</div>
          <div>Amount: ${customer.amount}</div>
          <div>Time: ${customer.times}X</div>
        </div>
        <div style="padding: 0; margin: 0;"><button style="border: 1px solid rgb(103, 93, 80); width: 100%; height: 25px;">delete</button></div>
      </div>
  `;
});
customerHTML.innerHTML = html;