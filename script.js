const currency_one = document.getElementById('currency-one');
const currency_two = document.getElementById('currency-two');
const amount_one = document.getElementById('amount-one');
const amount_two = document.getElementById('amount-two');

const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM
function calculate() {
    const currency1 = currency_one.value;
    const currency2 = currency_two.value;

    fetch(`https://v6.exchangerate-api.com/v6/b37d43fc07a82b478054f70b/latest/${currency1}`)
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            const curency2_rate = data.conversion_rates[currency2];

            // console.log(rate);
            rate.innerText = `1 ${currency1} = ${curency2_rate} ${currency2}`;

            amount_two.value = (amount_one.value * curency2_rate).toFixed(2);
        });
}

// Event listeners
currency_one.addEventListener('change', calculate);
amount_one.addEventListener('input', calculate);
currency_two.addEventListener('change', calculate);
amount_two.addEventListener('input', calculate);
swap.addEventListener('click', () => {
    const temp = currency_one.value;
    currency_one.value = currency_two.value;
    currency_two.value = temp;
    calculate();
})

calculate();