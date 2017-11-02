export function capitalizeFirstLetter(word) {
  const letters = word.split('');
  const first = letters.shift().toUpperCase();
  letters.unshift(first);
  return letters.join('');
}

export function formatMoney(str) {
  // return str.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  // return str.toFixed(0).replace(/(\d)(?=(\d{3})+\.?)/g, '$1,');
  const num = parseInt(str);
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function number(value) {
  if(value > 10000){
    return (value / 10000).toFixed(2) + '万'
  }else{
    return value
  }
}

export function message(value) {
  if(value.length > 12){
    return value.substr(0,10) + '...'
  }else{
    return value
  }
}
