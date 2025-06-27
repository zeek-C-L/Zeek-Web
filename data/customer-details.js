import {sendToLocal, getLocalItem, updateItem} from './local-storage.js';

let item = [{
  id: 1,
  name: 'jimmy',
  address: 'di makita',
  amount: 1000,
  date: 'jun, 1',
  due: 'jun 25',
  times: 4,
  discript: 'utang for something'
},{
  id: 2,
  name: 'carin',
  address: 'kit san lang',
  amount: 2000,
  date: 'jun, 6',
  due: 'jun 26',
  times: 6,
  discript: 'utang for something'
},{
  id: 3,
  name: 'jam3es',
  address: 'i dont know',
  amount: 2334,
  date: 'jun',
  due: 'jun 15',
  times: 3,
  discript: 'gsdsg for something'
},{
  id: 4,
  name: 'harenz',
  address: 'something',
  amount: 1000,
  date: 'jun 15',
  due: 'jun 25',
  times: 5,
  discript: 'wala pera for something'
},{
  id: 5,
  name: 'bake',
  address: 'something',
  amount: 1000,
  date: 'jun 4',
  due: 'jun 14',
  times: 2,
  discript: 'kapus'
},{
  id: 6,
  name: 'rayna',
  address: 'something',
  amount: 1000,
  date: 'jun 6',
  due: 'jun 18',
  times: 2,
  discript: 'utang for something'
},{
  id: 7,
  name: 'echo',
  address: 'something',
  amount: 34455,
  date: 'jun 5',
  due: 'jun 15',
  times: 1,
  discript: 'utang for something'
}];

//sendToLocal('customers', item);
export let customerDetails = getLocalItem('customers');