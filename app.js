const usdElem = document.querySelector('#usd');
const eurElem = document.querySelector('#eur');
const rubElem = document.querySelector('#rub');
const loader = document.getElementById('loader');
const resultDiv = document.getElementById('result');

async function getCurrencies() {

  if (loader) loader.classList.remove('hidden');
  if (resultDiv) resultDiv.innerHTML = '';

  const url = 'https://v6.exchangerate-api.com/v6/2109565455a579788fbde3f1/latest/KGS';
  
  try { 
    const response = await fetch(url);
    

    if (!response.ok) { 
      throw new Error(`Ошибка сети: ${response.status}`);
    } 
    
    const data = await response.json(); 

    if (data.result === "success") {
     
      renderRates(data.conversion_rates);
    } else {
      throw new Error('API вернул ошибку в ответе');
    }

  } catch(error) { 
    console.error('Не удалось получить курсы:', error);
    
    if(usdElem) usdElem.innerText = 'Ошибка'; 
    if(eurElem) eurElem.innerText = 'Ошибка'; 
    if(rubElem) rubElem.innerText = 'Ошибка'; 

    if (resultDiv) {
      resultDiv.innerHTML = `<p class="error-message">Не удалось загрузить данные. Проверьте интернет или попробуйте позже.</p>`;
    }
  } finally {
    if (loader) loader.classList.add('hidden');
  }
}

function renderRates(rates) { 
  if (!rates) return;

  const usdInKgs = rates.USD ? (1 / rates.USD).toFixed(2) : null;
  const eurInKgs = rates.EUR ? (1 / rates.EUR).toFixed(2) : null;
  const rubInKgs = rates.RUB ? (1 / rates.RUB).toFixed(2) : null;

  if(usdElem && usdInKgs) usdElem.innerText = usdInKgs + ' сом'; 
  if(eurElem && eurInKgs) eurElem.innerText = eurInKgs + ' сом'; 
  if(rubElem && rubInKgs) rubElem.innerText = rubInKgs + ' сом'; 
} 

getCurrencies();
