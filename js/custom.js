const firebaseConfig = {
  apiKey: 'AIzaSyAXKC5vcfdSgCSvGbR5MEXsdR92YhpDAho',
  authDomain: 'shippingcal-7c4af.firebaseapp.com',
  projectId: 'shippingcal-7c4af',
  storageBucket: 'shippingcal-7c4af.appspot.com',
  messagingSenderId: '485867483990',
  appId: '1:485867483990:web:90355efb63936ce52b9cf7',
  measurementId: 'G-YVJGB0TJ1Y',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = firebase.firestore();

const groupRates = [
  {
    group: 'A',
    first20: 110,
    addtional10: 35,
  },
  {
    group: 'B',
    first20: 120,
    addtional10: 40,
  },
  {
    group: 'C',
    first20: 130,
    addtional10: 40,
  },
  {
    group: 'D',
    first20: 140,
    addtional10: 45,
  },
  {
    group: 'E',
    first20: 150,
    addtional10: 50,
  },
  {
    group: 'F',
    first20: 160,
    addtional10: 55,
  },
  {
    group: 'G',
    first20: 170,
    addtional10: 60,
  },
  {
    group: 'H',
    first20: 210,
    addtional10: 85,
  },
];

const rateData = [
  {
    Country: 'Afghanistan',
    Group: 'C',
  },
  {
    Country: 'Albania',
    Group: 'E',
  },
  {
    Country: 'Algeria',
    Group: 'E',
  },
  {
    Country: 'Andorra',
    Group: 'E',
  },
  {
    Country: 'Angola',
    Group: 'E',
  },
  {
    Country: 'Anguilla',
    Group: 'H',
  },
  {
    Country: 'Antigua & Barbuda',
    Group: 'H',
  },
  {
    Country: 'Argentina',
    Group: 'H',
  },
  {
    Country: 'Armenia',
    Group: 'G',
  },
  {
    Country: 'Aruba',
    Group: 'H',
  },
  {
    Country: 'Ascension',
    Group: 'H',
  },
  {
    Country: 'Australia',
    Group: 'E',
  },
  {
    Country: 'Austria',
    Group: 'D',
  },
  {
    Country: 'Azerbaijan',
    Group: 'C',
  },
  {
    Country: 'Bahamas',
    Group: 'H',
  },
  {
    Country: 'Bahrain',
    Group: 'B',
  },
  {
    Country: 'Bangladesh',
    Group: 'B',
  },
  {
    Country: 'Barbados',
    Group: 'H',
  },
  {
    Country: 'Belarus',
    Group: 'D',
  },
  {
    Country: 'Belgium',
    Group: 'E',
  },
  {
    Country: 'Belize',
    Group: 'H',
  },
  {
    Country: 'Benin',
    Group: 'G',
  },
  {
    Country: 'Bermuda',
    Group: 'H',
  },
  {
    Country: 'Bhutan',
    Group: 'B',
  },
  {
    Country: 'Bolivia',
    Group: 'H',
  },
  {
    Country: 'Bosnia & Herzegovina',
    Group: 'E',
  },
  {
    Country: 'Botswana',
    Group: 'D',
  },
  {
    Country: 'Brazil',
    Group: 'H',
  },
  {
    Country: 'Brunei Darussalam',
    Group: 'C',
  },
  {
    Country: 'Bulgaria',
    Group: 'D',
  },
  {
    Country: 'Burkina Faso',
    Group: 'G',
  },
  {
    Country: 'Burundi',
    Group: 'E',
  },
  {
    Country: 'Cambodia',
    Group: 'B',
  },
  {
    Country: 'Cameroon',
    Group: 'G',
  },
  {
    Country: 'Canada',
    Group: 'H',
  },
  {
    Country: 'Canary Island',
    Group: 'E',
  },
  {
    Country: 'Cape Verde',
    Group: 'G',
  },
  {
    Country: 'Cayman Island',
    Group: 'H',
  },
  {
    Country: 'Central African Rep',
    Group: 'G',
  },
  {
    Country: 'Chad',
    Group: 'G',
  },
  {
    Country: 'Chile',
    Group: 'H',
  },
  {
    Country: 'China',
    Group: 'C',
  },
  {
    Country: 'Christmas Islands',
    Group: 'E',
  },
  {
    Country: 'Cocos (Keeling) Island',
    Group: 'E',
  },
  {
    Country: 'Colombia',
    Group: 'H',
  },
  {
    Country: 'Comoros',
    Group: 'E',
  },
  {
    Country: 'Congo (Dem Rep)',
    Group: 'H',
  },
  {
    Country: "Congo (People's Rep.)",
    Group: 'H',
  },
  {
    Country: 'Cook Island',
    Group: 'G',
  },
  {
    Country: 'Costa Rica',
    Group: 'H',
  },
  {
    Country: 'Croatia',
    Group: 'D',
  },
  {
    Country: 'Cuba',
    Group: 'H',
  },
  {
    Country: 'Cyprus',
    Group: 'C',
  },
  {
    Country: 'Czech Rep',
    Group: 'D',
  },
  {
    Country: 'Denmark',
    Group: 'E',
  },
  {
    Country: 'Djibouti',
    Group: 'C',
  },
  {
    Country: 'Dominica',
    Group: 'H',
  },
  {
    Country: 'Dominican Republic',
    Group: 'H',
  },
  {
    Country: 'East Timor/Timor-Leste(Dem. Rep)',
    Group: 'G',
  },
  {
    Country: 'Ecuador',
    Group: 'H',
  },
  {
    Country: 'Egypt',
    Group: 'C',
  },
  {
    Country: 'EL Salvador',
    Group: 'H',
  },
  {
    Country: 'Equatorial Guinea',
    Group: 'G',
  },
  {
    Country: 'Eritrea',
    Group: 'C',
  },
  {
    Country: 'Estonia',
    Group: 'F',
  },
  {
    Country: 'Eswatini (Swaziland)',
    Group: 'D',
  },
  {
    Country: 'Ethiopia',
    Group: 'D',
  },
  {
    Country: 'Falkland Island',
    Group: 'H',
  },
  {
    Country: 'Faroe Island',
    Group: 'E',
  },
  {
    Country: 'Fiji',
    Group: 'G',
  },
  {
    Country: 'Finland',
    Group: 'D',
  },
  {
    Country: 'France',
    Group: 'E',
  },
  {
    Country: 'French Guyana',
    Group: 'H',
  },
  {
    Country: 'French Polynesia',
    Group: 'H',
  },
  {
    Country: 'Gabon',
    Group: 'F',
  },
  {
    Country: 'Gambia',
    Group: 'G',
  },
  {
    Country: 'Georgia',
    Group: 'G',
  },
  {
    Country: 'Germany',
    Group: 'E',
  },
  {
    Country: 'Ghana',
    Group: 'G',
  },
  {
    Country: 'Gibraltar',
    Group: 'F',
  },
  {
    Country: 'Great Britain',
    Group: 'E',
  },
  {
    Country: 'Greece',
    Group: 'D',
  },
  {
    Country: 'Greenland',
    Group: 'F',
  },
  {
    Country: 'Grenada',
    Group: 'H',
  },
  {
    Country: 'Guadeloupe',
    Group: 'H',
  },
  {
    Country: 'Guam',
    Group: 'H',
  },
  {
    Country: 'Guatemala',
    Group: 'H',
  },
  {
    Country: 'Guernsey',
    Group: 'E',
  },
  {
    Country: 'Guinea - Bissau',
    Group: 'G',
  },
  {
    Country: 'Guinea Rep',
    Group: 'H',
  },
  {
    Country: 'Guyana',
    Group: 'H',
  },
  {
    Country: 'Haiti',
    Group: 'H',
  },
  {
    Country: 'Honduras(Rep)',
    Group: 'H',
  },
  {
    Country: 'Hong Kong',
    Group: 'C',
  },
  {
    Country: 'Hungary',
    Group: 'D',
  },
  {
    Country: 'Iceland',
    Group: 'F',
  },
  {
    Country: 'India',
    Group: 'A',
  },
  {
    Country: 'Indonesia',
    Group: 'B',
  },
  {
    Country: 'Iran (Islamic Rep)',
    Group: 'C',
  },
  {
    Country: 'Iraq',
    Group: 'C',
  },
  {
    Country: 'Ireland',
    Group: 'E',
  },
  {
    Country: 'Isle of Man',
    Group: 'E',
  },
  {
    Country: 'Israel',
    Group: 'C',
  },
  {
    Country: 'Italy',
    Group: 'E',
  },
  {
    Country: 'Ivory Coast',
    Group: 'G',
  },
  {
    Country: 'Jamaica',
    Group: 'H',
  },
  {
    Country: 'Japan',
    Group: 'D',
  },
  {
    Country: 'Jersey',
    Group: 'E',
  },
  {
    Country: 'Jordan',
    Group: 'C',
  },
  {
    Country: 'Kazakhstan',
    Group: 'D',
  },
  {
    Country: 'Kenya',
    Group: 'C',
  },
  {
    Country: 'Kiribati',
    Group: 'G',
  },
  {
    Country: "Korea North (Dem. People's Rep. of Korea)",
    Group: 'D',
  },
  {
    Country: 'Korea South',
    Group: 'D',
  },
  {
    Country: 'Kosovo',
    Group: 'E',
  },
  {
    Country: 'Kuwait',
    Group: 'C',
  },
  {
    Country: 'Kyrgyzstan',
    Group: 'D',
  },
  {
    Country: "Lao People's DEM",
    Group: 'B',
  },
  {
    Country: 'Latvia',
    Group: 'D',
  },
  {
    Country: 'Lebanon',
    Group: 'C',
  },
  {
    Country: 'Lesotho',
    Group: 'D',
  },
  {
    Country: 'Liberia',
    Group: 'G',
  },
  {
    Country: 'Libya',
    Group: 'G',
  },
  {
    Country: 'Liechtenstein',
    Group: 'E',
  },
  {
    Country: 'Lithuania',
    Group: 'D',
  },
  {
    Country: 'Luxemburg',
    Group: 'E',
  },
  {
    Country: 'Macau',
    Group: 'C',
  },
  {
    Country: 'Macedonia(FYROM)',
    Group: 'E',
  },
  {
    Country: 'Madagascar',
    Group: 'E',
  },
  {
    Country: 'Malawi',
    Group: 'E',
  },
  {
    Country: 'Malaysia',
    Group: 'B',
  },
  {
    Country: 'Maldives',
    Group: 'A',
  },
  {
    Country: 'Mali',
    Group: 'G',
  },
  {
    Country: 'Malta',
    Group: 'F',
  },
  {
    Country: 'Mariana Islands',
    Group: 'H',
  },
  {
    Country: 'Marshall Island',
    Group: 'H',
  },
  {
    Country: 'Martinique',
    Group: 'H',
  },
  {
    Country: 'Mauritania',
    Group: 'G',
  },
  {
    Country: 'Mauritius',
    Group: 'F',
  },
  {
    Country: 'Mayotte',
    Group: 'H',
  },
  {
    Country: 'Mexico',
    Group: 'H',
  },
  {
    Country: 'Micronesia (Federated States)',
    Group: 'H',
  },
  {
    Country: 'Moldova',
    Group: 'F',
  },
  {
    Country: 'Monaco',
    Group: 'E',
  },
  {
    Country: 'Mongolia',
    Group: 'D',
  },
  {
    Country: 'Montenegro',
    Group: 'H',
  },
  {
    Country: 'Montserrat',
    Group: 'H',
  },
  {
    Country: 'Morocco',
    Group: 'F',
  },
  {
    Country: 'Mozambique',
    Group: 'D',
  },
  {
    Country: 'Myanmar',
    Group: 'B',
  },
  {
    Country: 'Namibia',
    Group: 'E',
  },
  {
    Country: 'Nauru',
    Group: 'G',
  },
  {
    Country: 'Nepal',
    Group: 'B',
  },
  {
    Country: 'Netherlands',
    Group: 'E',
  },
  {
    Country: 'Netherland Antilles',
    Group: 'H',
  },
  {
    Country: 'New Caledonia',
    Group: 'G',
  },
  {
    Country: 'New Zealand',
    Group: 'F',
  },
  {
    Country: 'Nicaragua',
    Group: 'H',
  },
  {
    Country: 'Niger',
    Group: 'G',
  },
  {
    Country: 'Nigeria',
    Group: 'E',
  },
  {
    Country: 'Niue',
    Group: 'G',
  },
  {
    Country: 'Norfolk Island',
    Group: 'E',
  },
  {
    Country: 'Northern Ireland',
    Group: 'E',
  },
  {
    Country: 'Norway',
    Group: 'E',
  },
  {
    Country: 'Oman',
    Group: 'B',
  },
  {
    Country: 'Pakistan',
    Group: 'B',
  },
  {
    Country: 'Palau Island',
    Group: 'H',
  },
  {
    Country: 'Panama (Rep)',
    Group: 'H',
  },
  {
    Country: 'Papua New Guinea',
    Group: 'D',
  },
  {
    Country: 'Paraguay',
    Group: 'H',
  },
  {
    Country: 'Peru',
    Group: 'H',
  },
  {
    Country: 'Philippines',
    Group: 'C',
  },
  {
    Country: 'Pitcairn Island',
    Group: 'H',
  },
  {
    Country: 'Poland',
    Group: 'D',
  },
  {
    Country: 'Portugal',
    Group: 'E',
  },
  {
    Country: 'Puerto Rico',
    Group: 'H',
  },
  {
    Country: 'Qatar',
    Group: 'B',
  },
  {
    Country: 'Reunion',
    Group: 'E',
  },
  {
    Country: 'Romania',
    Group: 'F',
  },
  {
    Country: 'Russian Federation',
    Group: 'D',
  },
  {
    Country: 'Rwanda',
    Group: 'E',
  },
  {
    Country: 'Samoa American',
    Group: 'G',
  },
  {
    Country: 'Samoa Western',
    Group: 'G',
  },
  {
    Country: 'San Marino',
    Group: 'E',
  },
  {
    Country: 'Sao Tome & Principe',
    Group: 'F',
  },
  {
    Country: 'Saudi Arabia',
    Group: 'C',
  },
  {
    Country: 'Senegal',
    Group: 'G',
  },
  {
    Country: 'Serbia',
    Group: 'D',
  },
  {
    Country: 'Seychelles',
    Group: 'B',
  },
  {
    Country: 'Sierra Leone',
    Group: 'G',
  },
  {
    Country: 'Singapore',
    Group: 'B',
  },
  {
    Country: 'Slovakia',
    Group: 'G',
  },
  {
    Country: 'Slovenia',
    Group: 'D',
  },
  {
    Country: 'Solomon Island',
    Group: 'F',
  },
  {
    Country: 'Somalia',
    Group: 'D',
  },
  {
    Country: 'South Africa',
    Group: 'D',
  },
  {
    Country: 'South Georgia',
    Group: 'E',
  },
  {
    Country: 'South Sandwich Island',
    Group: 'E',
  },
  {
    Country: 'Spain',
    Group: 'E',
  },
  {
    Country: 'St. Christopher (St. Kitts) & Nevis',
    Group: 'H',
  },
  {
    Country: 'St. Helena',
    Group: 'H',
  },
  {
    Country: 'St. Lucia',
    Group: 'H',
  },
  {
    Country: 'St. Pierre & Miquelon',
    Group: 'G',
  },
  {
    Country: 'St. Vincent',
    Group: 'H',
  },
  {
    Country: 'Sudan',
    Group: 'D',
  },
  {
    Country: 'Suriname',
    Group: 'H',
  },
  {
    Country: 'Sweden',
    Group: 'D',
  },
  {
    Country: 'Switzerland',
    Group: 'E',
  },
  {
    Country: 'Syrian Arab Rep.',
    Group: 'G',
  },
  {
    Country: 'Taiwan',
    Group: 'C',
  },
  {
    Country: 'Tajikistan',
    Group: 'C',
  },
  {
    Country: 'Tanzania',
    Group: 'E',
  },
  {
    Country: 'Thailand',
    Group: 'B',
  },
  {
    Country: 'Togo',
    Group: 'G',
  },
  {
    Country: 'Tokelau',
    Group: 'F',
  },
  {
    Country: 'Tonga',
    Group: 'G',
  },
  {
    Country: 'Trinidad & Tobago',
    Group: 'H',
  },
  {
    Country: 'Tristan DA Cunha',
    Group: 'E',
  },
  {
    Country: 'Tunisia',
    Group: 'E',
  },
  {
    Country: 'Turkey',
    Group: 'D',
  },
  {
    Country: 'Turkmenistan',
    Group: 'C',
  },
  {
    Country: 'Turks & Caicos Islands',
    Group: 'H',
  },
  {
    Country: 'Tuvalu',
    Group: 'G',
  },
  {
    Country: 'UAE',
    Group: 'B',
  },
  {
    Country: 'Uganda',
    Group: 'E',
  },
  {
    Country: 'Ukraine',
    Group: 'D',
  },
  {
    Country: 'Uruguay',
    Group: 'H',
  },
  {
    Country: 'USA',
    Group: 'H',
  },
  {
    Country: 'Uzbekistan',
    Group: 'C',
  },
  {
    Country: 'Vanuatu',
    Group: 'F',
  },
  {
    Country: 'Vatican City',
    Group: 'E',
  },
  {
    Country: 'Venezuela',
    Group: 'H',
  },
  {
    Country: 'Vietnam',
    Group: 'B',
  },
  {
    Country: 'Virgin Islands (GB)',
    Group: 'E',
  },
  {
    Country: 'Virgin Islands (USA)',
    Group: 'H',
  },
  {
    Country: 'Wallis and Futuna islands',
    Group: 'G',
  },
  {
    Country: 'Yemen',
    Group: 'G',
  },
  {
    Country: 'Zambia',
    Group: 'E',
  },
  {
    Country: 'Zimbabwe',
    Group: 'D',
  },
];

let exchangeRates = [];
let total;
let itemPrice;
const registrationFee = 870;

function setCountry() {
  let list = '';
  rateData.forEach((rate) => {
    list += `<option value ="${rate.Country}">`;
  });
  document.getElementById('countryList').innerHTML = list;
}

function displayResults(
  toCountry,
  weight,
  isRegistered,
  expense,
  expected_profit,
  fromCountry,
  currency
) {
  let group = findGroup(toCountry.Group);
  total = calculateSum(weight, group.first20, group.addtional10, isRegistered);
  itemPrice = total + expense + expected_profit;
  let summary = `<table class="table table-borderless" style="font-size: 14px"><tbody>
                                        <tr><th>From</th> <td> ${fromCountry}</td></tr>
                                        <tr><th>To</th> <td> ${toCountry.Country} (GROUP - ${toCountry.Group})</td></tr>
                                        <tr><th>Weight</th> <td> ${weight} g</td></tr>
                                        <tr><th>Expense</th> <td> ${expense} LKR</td></tr>
                                        <tr><th>Expected Profit</th> <td> ${expected_profit} LKR</td></tr>
                                        <tr id="tableCurrency"><th>Currency</th> <td> ${exchangeRates[currency].currency}</td></tr>
`;
  if (isRegistered) {
    summary += `<tr><th>Registered Post</th> <td>Yes</td></tr></tbody></table>`;
  } else {
    summary += `<tr><th>Registered Post</th> <td>No</td></tr></tbody></table>`;
  }

  let convertedPostalFee = convertCurrency(total, currency);
  let convertedItemPrice = convertCurrency(itemPrice, currency);

  document.getElementById('summary').innerHTML = summary;
  document.getElementById(
    'totalFee'
  ).innerHTML = `Postal Fee: ${convertedPostalFee}`;
  document.getElementById(
    'itemPrice'
  ).innerHTML = `Total Item Price: ${convertedItemPrice}`;
  document.getElementById('loadingUi').style.display = 'none';
  document.getElementById('currency2').value = currency;
  document.getElementById('ex-rate-display').innerHTML = `1 ${
    exchangeRates[currency].currency
  } = ${exchangeRates[currency].fromLkr.toFixed(2)} LKR`;
  document.getElementById('resultSection').style.display = 'block';
  document.getElementById('resultSection2').style.display = 'block';
}

function calculateFee() {
  let form = document.getElementById('calculator');

  function handleForm(event) {
    event.preventDefault();
  }

  form.addEventListener('submit', handleForm);

  let toCountry = document.forms['calculator']['toCountry'].value;
  let fromCountry = document.forms['calculator']['fromCountry'].value;
  let weight = document.forms['calculator']['weight'].value;
  let isRegistered = document.forms['calculator']['isRegistered'].checked;
  let expense = parseFloat(document.forms['calculator']['expense'].value);
  let expected_profit = parseFloat(
    document.forms['calculator']['expected_profit'].value
  );
  let currency = parseInt(document.forms['calculator']['currency'].value);

  if (!expense) {
    expense = 0;
  }
  if (!expected_profit) {
    expected_profit = 0;
  }
  toCountry = findObject(toCountry);

  if (toCountry && fromCountry && weight) {
    document.getElementById('validate-country').style.display = 'none';
    document.getElementById('validate-weight').style.display = 'none';
    fetchExchangeRates().then((r) => {
      displayResults(
        toCountry,
        weight,
        isRegistered,
        expense,
        expected_profit,
        fromCountry,
        currency
      );
    });
  } else {
    if (!toCountry) {
      document.getElementById('validate-country').style.display = 'block';
    } else if (!weight) {
      document.getElementById('validate-country').style.display = 'none';
      document.getElementById('validate-weight').style.display = 'block';
    }
  }
}

function convertCurrency(value, currency) {
  let finalVal = Number((value * exchangeRates[currency].fromLkr).toFixed(2));
  let convertedValue = `${finalVal} ${exchangeRates[currency].currency}`;
  return convertedValue;
}

function updateResults(value) {
  let currency = value;
  let convertedPostalFee = convertCurrency(total, currency);
  let convertedItemPrice = convertCurrency(itemPrice, currency);
  document.getElementById('ex-rate-display').innerHTML = `1 ${
    exchangeRates[currency].currency
  } = ${(1 / exchangeRates[currency].fromLkr).toFixed(2)} LKR`;

  document.getElementById(
    'totalFee'
  ).innerHTML = `Postal Fee: ${convertedPostalFee}`;
  document.getElementById(
    'itemPrice'
  ).innerHTML = `Total Item Price: ${convertedItemPrice}`;
  document.getElementById(
    'tableCurrency'
  ).innerHTML = `<th>Currency</th> <td> ${exchangeRates[currency].currency}</td>`;
}

function reload() {
  window.reload();
}

function calculateSum(weight, first20, additional10, isRegistered) {
  let totalFee = 0;
  let extraWeight = weight - 20;
  if (extraWeight <= 0) {
    totalFee = first20;
  } else {
    let extraCharge = Math.floor(extraWeight / 10) * additional10;
    totalFee = first20 + extraCharge;
  }

  if (isRegistered) {
    totalFee += registrationFee;
  }

  return totalFee;
}

function findGroup(toGroup) {
  let toCountryGroup;
  groupRates.forEach((group) => {
    if (group.group === toGroup) {
      toCountryGroup = group;
    }
  });
  return toCountryGroup;
}

function findObject(country) {
  let obj;
  rateData.forEach((data) => {
    if (data.Country === country) {
      obj = data;
    }
  });
  return obj;
}

async function fetchExchangeRates() {
  document.getElementById('detailForm').style.display = 'none';
  document.getElementById('loadingUi').style.display = 'block';
  if (localStorage.getItem('date') !== new Date().toDateString()) {
    document.getElementById('waitingInfo').style.display = 'block';
    localStorage.clear();
    var currency = await loadExchangeRates();
    localStorage.setItem('date', new Date().toDateString());
    localStorage.setItem('currency', JSON.stringify(currency));
    exchangeRates = currency;
    document.getElementById('waitingInfo').style.display = 'block';
  } else {
    exchangeRates = JSON.parse(localStorage.getItem('currency'));
  }
}

function extractCurrency(currency, currencyRegex, text) {
  let scraped = text.match(currencyRegex);
  let regexFloat = /[+-]?\d+(\.\d+)?/g;
  let obj = {
    currency: currency,
    fromLkr: parseFloat(scraped[0].match(regexFloat)[0]),
    toLkr: parseFloat(scraped[1].match(regexFloat)[0]),
  };
  return obj;
}

async function loadExchangeRates() {
  const snapshot = await db.collection('exchange-rates').get();
  var data = snapshot.docs.map((doc) => doc.data());
  let currency = [];
  if (data) {
    data.forEach((obj) => {
      currency.push(obj);
    });
  } else {
    currency = loadDefaultRates();
  }
  return currency;
}

function loadDefaultRates() {
  let currency = [];
  currency.push({ currency: 'LKR', fromLkr: 1, toLkr: 1 });
  currency.push({
    currency: 'USD',
    fromLkr: 0.002763,
    toLkr: 361.876209,
  });
  currency.push({
    currency: 'AUD',
    fromLkr: 0.004004,
    toLkr: 249.723009,
  });
  currency.push({
    currency: 'EUR',
    fromLkr: 0.002773,
    toLkr: 360.569804,
  });
  currency.push({
    currency: 'GBP',
    fromLkr: 0.002355,
    toLkr: 424.656636,
  });

  return currency;
}
