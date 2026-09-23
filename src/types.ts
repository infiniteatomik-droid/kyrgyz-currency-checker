export interface ConversionRates {
  USD: number;
  EUR: number;
  RUB: number;
  KZT: number;
  [key: string]: number;
}

export interface CurrencyApiResponse {
  result: string;
  base_code: string;
  conversion_rates: ConversionRates;
  time_last_update_utc?: string;
}
