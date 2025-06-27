import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';



export let datePayments = [{
  id: 1,
  paymentDate: [
    1, 2, 3],
  },{
  id: 2,
  paymentDate: [
    1, 2, 3],
  },{
  id: 3,
  paymentDate: [
    1, 2, 3],
  },{
  id: 4,
  paymentDate: [
    1, 2, 3],
  },{
  id: 5,
  paymentDate: [
    1, 2, 3],
  },{
  id: 6,
  paymentDate: [
    1, 2, 3],
  }];

export function amountHtml(cents){
  return (cents / 1000).toFixed(2);
}

