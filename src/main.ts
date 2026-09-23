import { CurrencyApiResponse, ConversionRates } from './types';

const usd = document.querySelector<HTMLElement>('#usd')
const eur = document.querySelector<HTMLElement>('#eur')
const rub = document.querySelector<HTMLElement>('#rub')
const kzt = document.querySelector<HTMLElement>('#kzt')

const loader = document.getElementById('loader') as HTMLElement | null;
const resultDiv = document.getElementById('resultDiv') as HTMLElement | null;

async function getCurrencies() {

  if (loader) loader.classList.remove('hidden');
  if (resultDiv) resultDiv.innerHTML = '';

  const url = 'https://v6.exchangerate-api.com/v6/2109565455a579788fbde3f1/latest/KGS';
  
  try { 
    const response = await fetch(url);
    

    if (!response.ok) { 
      throw new Error(`Error data: ${response.status}`);
    } 
    
    const data: CurrencyApiResponse = await response.json(); 

    if (data.result === "success") {
     
      renderRates(data.conversion_rates);
    } else {
      throw new Error('API вернул ошибку в ответе');
    }

  } catch(error) { 
    console.error('Не удалось получить курсы:', error);
    
    if(usd) usd.innerText = 'Error'; 
    if(eur) eur.innerText = 'Error'; 
    if(rub) rub.innerText = 'Error';
    if(kzt) kzt.innerText = 'Error';

    if (resultDiv) {
      resultDiv.innerHTML = `<p class="error-message">Не удалось загрузить данные. Проверьте интернет или попробуйте позже.</p>`;
    }
  } finally {
    if (loader) loader.classList.add('hidden');
  }
}

function renderRates(rates: ConversionRates): void { 
  if (!rates) return;

  const usdInKgs = rates.USD ? (1 / rates.USD).toFixed(2) : null;
  const eurInKgs = rates.EUR ? (1 / rates.EUR).toFixed(2) : null;
  const rubInKgs = rates.RUB ? (1 / rates.RUB).toFixed(2) : null;
  const kztInKgs = rates.KZT ? (1 / rates.KZT).toFixed(2) : null;

  if(usd && usdInKgs) usd.innerText = usdInKgs + ' som'; 
  if(eur && eurInKgs) eur.innerText = eurInKgs + ' som'; 
  if(rub && rubInKgs) rub.innerText = rubInKgs + ' som';
  if(kzt && kztInKgs) kzt.innerText = kztInKgs + ' som';
} 

getCurrencies();
