# 🇰🇬 Kyrgyz Currency Checker

A lightweight and responsive web application that displays the current exchange rates for USD, EUR, and RUB against the Kyrgyz Som (KGS) in real-time.

## ✨ Features
* **Real-time Data:** Fetches up-to-date currency conversion rates directly from an external API.
* **Advanced Async/Await:** Implements clean asynchronous JavaScript logic for seamless data handling.
* **Robust Error Handling:** Features deep network error validation using `if (!response.ok)` and `try...catch...finally` structures to ensure a bulletproof user experience.
* **Smooth UI/UX:** Includes a CSS-animated loading spinner (loader) that manages state dynamically during API calls.
* **Fail-Safe Design:** Safely updates individual DOM elements and provides clear error feedback to the user if the server goes down.

## 🛠️ Tech Stack
* **HTML5** & **CSS3** (Flexbox, custom `@keyframes` animations)
* **Vanilla JavaScript** (ES6+, Fetch API, Async/Await)
* **ExchangeRate-API** (Dynamic currency data source)

## 📖 What I Practiced in This Project
1. **Asynchronous JS Flow:** Learned how to correctly stop loaders in the `finally` block regardless of the request outcome.
2. **API Status Validation:** Handled hidden API issues by validating responses manually instead of relying solely on generic network catches.
3. **DOM Manipulation:** Dynamically rendered formatted values and injected failure states without breaking the core layout.

## 🔧 How to Run Locally
1. Clone the repository:
   ```bash
   git clone https://github.com/infiniteatomik-droid/kyrgyz-currency-checker
   ```
2. Open `index.html` in your favorite browser.
