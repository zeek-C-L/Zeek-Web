export function sendToLocal(name, item){
  localStorage.setItem(`${name}`, JSON.stringify(item));
}

// Load data
export function getLocalItem(name){
  return JSON.parse(localStorage.getItem(`${name}`) || "[]");
}

export function updateItem(name, arr, item){
  let id = 1;
  arr.forEach(element => {
    element.id = id;
    id++;
  });
  arr.push(item);
  console.log(arr);
  localStorage.setItem('customers', JSON.stringify(arr));
}