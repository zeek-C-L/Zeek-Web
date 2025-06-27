import {datePayments, amountHtml} from '../data/date-payments.js';
import {customerDetails} from '../data/customer-details.js';
console.log(customerDetails);
let html = '';

let customerHTML = document.querySelector('.div-for-customer');
let customerHTML2 = document.querySelector('.sec2');
let customerHTML3 = document.querySelector('.sec3');

customerDetails.forEach((customer)=>{
  html +=
  `
    <div onclick="
      section2Html(${customer.id});
    " class="customers-grid">
      <div>${customer.name}</div>
      <div>${customer.amount}</div>
      <div>${customer.date}</div>
      <div>${customer.due}</div>
    </div>
  `;
});
customerHTML.innerHTML = html;

function section2Html(customerId){
    let stopper = false;
    let customerCatch = {};
    customerDetails.forEach((customer)=>{
      if(customerId === customer.id){
        customerCatch = customer;
        stopper = true;
      }
    });
    if(stopper){
        customerHTML2.innerHTML = `
          <div class="customer-details">
            <div class="customer-name">${customerCatch.name}</div>
            <div class="customer-amount">Amount: ${amountHtml(customerCatch.amount)}k</div>
            <div style="margin-top: 4%;">Date:</div>
            <div class="customer-details-date">
              <div>${customerCatch.date}</div>
              <div>${customerCatch.times} X</div>
            </div>
            <div style="margin-top: 4%;">Due:</div>
            <div>${customerCatch.due}</div>
            <div style="margin-top: 4%;">payment:</div>
            <div class="customer-details-payments">
              <div>payment1</div>
              <div>payment2</div>
              <div>payment3</div>
            </div>
          </div>
        `;
        section3Html(customerCatch);
      }else{
        customerHTML2.innerHTML =
        `<div class="customer-details">
            <div class="customer-name">Jimmy</div>
            <div class="customer-amount">Amount: 10k</div>
            <div style="margin-top: 4%;">Date:</div>
            <div class="customer-details-date">
              <div>june, 4, 25</div>
              <div>4 X</div>
            </div>
            <div style="margin-top: 4%;">Due:</div>
            <div>June, 25</div>
            <div style="margin-top: 4%;">payment:</div>
            <div class="customer-details-payments">
              <div>payment1</div>
              <div>payment2</div>
              <div>payment3</div>
            </div>
          </div>`;
      }

}
function section3Html(customerCatch){
  customerHTML3.innerHTML =
  `<div class="section3-customer-details">
        <div>address: <span>${customerCatch.address}</span></div>
        <div class="section3-customer-discription">discript: 
        <div>${customerCatch.discript}</div></div>
        
      </div>
  `;
}

window.section2Html = section2Html;