import {getLocalItem, updateItem} from '../data/local-storage.js';
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';

function getId(arr){
  return arr.length + 1;
}

export function updateCustomer(){
  let customerDetails = getLocalItem('customers');
//discript
  const customerName = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();
  const amount = document.getElementById("amount").value.trim();
  const TimesPay = document.getElementById("Times-Pay").value;
  const discript = document.getElementById("discript").value;

  if(!customerName || !address || !amount  || !TimesPay || !discript){
    alert("need to fill up all");
    return;
  }


  let id = getId(customerDetails);

  let ob = {
    id: id,             
    name : customerName,
    amount,
    date: dayjs().format('MMM-DD-YY'),
    discript,
    due: 'no',  // need to edit
    address: address,
    times: TimesPay
  };
  updateItem('customers', customerDetails, ob);
  window.location.href = 'index.html';
}


window.updateCustomer = updateCustomer;