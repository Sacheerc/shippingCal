const groupRates = [
    {
        "group": "A",
        "first20": 55,
        "addtional10": 15
    },
    {
        "group": "B",
        "first20": 60,
        "addtional10": 15
    },
    {
        "group": "C",
        "first20": 65,
        "addtional10": 20
    },
    {
        "group": "D",
        "first20": 70,
        "addtional10": 20
    },
    {
        "group": "E",
        "first20": 75,
        "addtional10": 25
    },
    {
        "group": "F",
        "first20": 80,
        "addtional10": 25
    },
    {
        "group": "G",
        "first20": 85,
        "addtional10": 30
    },
    {
        "group": "H",
        "first20": 110,
        "addtional10": 40
    }
]

const rateData = [
    {
        "Country": "Afghanistan",
        "Group": "C"
    },
    {
        "Country": "Albania",
        "Group": "E"
    },
    {
        "Country": "Algeria",
        "Group": "E"
    },
    {
        "Country": "Andorra",
        "Group": "E"
    },
    {
        "Country": "Angola",
        "Group": "E"
    },
    {
        "Country": "Anguilla",
        "Group": "H"
    },
    {
        "Country": "Antigua & Barbuda",
        "Group": "H"
    },
    {
        "Country": "Antilles (Netherland Antilles)",
        "Group": "H"
    },
    {
        "Country": "Argentina",
        "Group": "H"
    },
    {
        "Country": "Armenia",
        "Group": "G"
    },
    {
        "Country": "Aruba",
        "Group": "H"
    },
    {
        "Country": "Ascension",
        "Group": "H"
    },
    {
        "Country": "Australia",
        "Group": "D"
    },
    {
        "Country": "Austria",
        "Group": "D"
    },
    {
        "Country": "Azerbaijan",
        "Group": "C"
    },
    {
        "Country": "Bahamas",
        "Group": "H"
    },
    {
        "Country": "Bahrain",
        "Group": "B"
    },
    {
        "Country": "Bangladesh",
        "Group": "B"
    },
    {
        "Country": "Barbados",
        "Group": "H"
    },
    {
        "Country": "Belarus",
        "Group": "E"
    },
    {
        "Country": "Belgium",
        "Group": "E"
    },
    {
        "Country": "Belize",
        "Group": "H"
    },
    {
        "Country": "Benin",
        "Group": "G"
    },
    {
        "Country": "Bermuda",
        "Group": "G"
    },
    {
        "Country": "Bhutan",
        "Group": "C"
    },
    {
        "Country": "Gambia",
        "Group": "G"
    },
    {
        "Country": "Georgia",
        "Group": "G"
    },
    {
        "Country": "Germany",
        "Group": "E"
    },
    {
        "Country": "Ghana",
        "Group": "G"
    },
    {
        "Country": "Gibraltar",
        "Group": "F"
    },
    {
        "Country": "Great Britain",
        "Group": "E"
    },
    {
        "Country": "Greece",
        "Group": "D"
    },
    {
        "Country": "Greenland",
        "Group": "F"
    },
    {
        "Country": "Grenada",
        "Group": "H"
    },
    {
        "Country": "Guadeloupe",
        "Group": "H"
    },
    {
        "Country": "Guam",
        "Group": "G"
    },
    {
        "Country": "Guatemala",
        "Group": "H"
    },
    {
        "Country": "Guernsey",
        "Group": "E"
    },
    {
        "Country": "Guinea - Bissau",
        "Group": "G"
    },
    {
        "Country": "Guinea Rep",
        "Group": "G"
    },
    {
        "Country": "Guyana",
        "Group": "H"
    },
    {
        "Country": "Haiti",
        "Group": "H"
    },
    {
        "Country": "Honduras(Rep)",
        "Group": "H"
    },
    {
        "Country": "Hong Kong",
        "Group": "C"
    },
    {
        "Country": "Hungary",
        "Group": "D"
    },
    {
        "Country": "Iceland",
        "Group": "F"
    },
    {
        "Country": "India",
        "Group": "A"
    },
    {
        "Country": "Indonesia",
        "Group": "B"
    },
    {
        "Country": "Iran (Islamic Rep)",
        "Group": "C"
    },
    {
        "Country": "Iraq",
        "Group": "C"
    },
    {
        "Country": "Ireland",
        "Group": "G"
    },
    {
        "Country": "Isle of Man",
        "Group": "E"
    },
    {
        "Country": "Israel",
        "Group": "C"
    },
    {
        "Country": "Italy",
        "Group": "E"
    },
    {
        "Country": "Ivory Coast",
        "Group": "G"
    },
    {
        "Country": "Jamaica",
        "Group": "H"
    },
    {
        "Country": "Japan",
        "Group": "D"
    },
    {
        "Country": "Jersey",
        "Group": "E"
    },
    {
        "Country": "Jordan",
        "Group": "C"
    },
    {
        "Country": "Kazakhstan",
        "Group": "D"
    },
    {
        "Country": "Kenya",
        "Group": "C"
    },
    {
        "Country": "Kiribati",
        "Group": "G"
    },
    {
        "Country": "Korea North (Dem. People's Rep. of Korea)",
        "Group": "D"
    },
    {
        "Country": "Korea South",
        "Group": "D"
    },
    {
        "Country": "Kosovo",
        "Group": "E"
    },
    {
        "Country": "Kuwait",
        "Group": "C"
    },
    {
        "Country": "Kyrgyzstan",
        "Group": "D"
    },
    {
        "Country": "Lao People's DEM",
        "Group": "B"
    },
    {
        "Country": "Latvia",
        "Group": "F"
    },
    {
        "Country": "Lebanon",
        "Group": "C"
    },
    {
        "Country": "Lesotho",
        "Group": "D"
    },
    {
        "Country": "Liberia",
        "Group": "G"
    },
    {
        "Country": "Libya",
        "Group": "G"
    },
    {
        "Country": "Liechtenstein",
        "Group": "E"
    },
    {
        "Country": "Lithuania",
        "Group": "F"
    },
    {
        "Country": "Ukraine",
        "Group": "F"
    },
    {
        "Country": "Uruguay",
        "Group": "H"
    },
    {
        "Country": "USA",
        "Group": "G"
    },
    {
        "Country": "Uzbekistan",
        "Group": "C"
    },
    {
        "Country": "Vanuatu",
        "Group": "F"
    },
    {
        "Country": "Bolivia",
        "Group": "H"
    },
    {
        "Country": "Bosnia & Herzegovina",
        "Group": "E"
    },
    {
        "Country": "Botswana",
        "Group": "D"
    },
    {
        "Country": "Brazil",
        "Group": "H"
    },
    {
        "Country": "Brunei Darussalam",
        "Group": "C"
    },
    {
        "Country": "Bulgaria",
        "Group": "E"
    },
    {
        "Country": "Burkina Faso",
        "Group": "G"
    },
    {
        "Country": "Burundi",
        "Group": "E"
    },
    {
        "Country": "Cambodia",
        "Group": "B"
    },
    {
        "Country": "Cameroon",
        "Group": "G"
    },
    {
        "Country": "Canada",
        "Group": "G"
    },
    {
        "Country": "Canary Island",
        "Group": "E"
    },
    {
        "Country": "Cape Verde",
        "Group": "G"
    },
    {
        "Country": "Cayman Island",
        "Group": "H"
    },
    {
        "Country": "Central African Rep",
        "Group": "G"
    },
    {
        "Country": "Chad",
        "Group": "G"
    },
    {
        "Country": "Chile",
        "Group": "H"
    },
    {
        "Country": "China",
        "Group": "C"
    },
    {
        "Country": "Christmas Islands",
        "Group": "E"
    },
    {
        "Country": "Cocos (Keeling) Island",
        "Group": "E"
    },
    {
        "Country": "Colombia",
        "Group": "H"
    },
    {
        "Country": "Comoros",
        "Group": "E"
    },
    {
        "Country": "Congo (Dem Rep)",
        "Group": "H"
    },
    {
        "Country": "Congo (People's Rep.)",
        "Group": "H"
    },
    {
        "Country": "Cook Island",
        "Group": "G"
    },
    {
        "Country": "Luxemburg",
        "Group": "E"
    },
    {
        "Country": "Macau",
        "Group": "C"
    },
    {
        "Country": "Macedonia(FYROM)",
        "Group": "E"
    },
    {
        "Country": "Madagascar",
        "Group": "E"
    },
    {
        "Country": "Malawi",
        "Group": "E"
    },
    {
        "Country": "Malaysia",
        "Group": "B"
    },
    {
        "Country": "Maldives",
        "Group": "A"
    },
    {
        "Country": "Mali",
        "Group": "G"
    },
    {
        "Country": "Malta",
        "Group": "F"
    },
    {
        "Country": "Mariana Islands",
        "Group": "G"
    },
    {
        "Country": "Marshall Island",
        "Group": "G"
    },
    {
        "Country": "Martinique",
        "Group": "H"
    },
    {
        "Country": "Mauritania",
        "Group": "G"
    },
    {
        "Country": "Mauritius",
        "Group": "F"
    },
    {
        "Country": "Mayotte",
        "Group": "H"
    },
    {
        "Country": "Mexico",
        "Group": "H"
    },
    {
        "Country": "Micronesia(Federated States)",
        "Group": "G"
    },
    {
        "Country": "Moldova",
        "Group": "F"
    },
    {
        "Country": "Monaco",
        "Group": "E"
    },
    {
        "Country": "Mongolia",
        "Group": "D"
    },
    {
        "Country": "Montenegro",
        "Group": "H"
    },
    {
        "Country": "Montserrat",
        "Group": "H"
    },
    {
        "Country": "Morocco",
        "Group": "F"
    },
    {
        "Country": "Mozambique",
        "Group": "D"
    },
    {
        "Country": "Myanmar",
        "Group": "C"
    },
    {
        "Country": "Namibia",
        "Group": "E"
    },
    {
        "Country": "Nauru",
        "Group": "G"
    },
    {
        "Country": "Nepal",
        "Group": "B"
    },
    {
        "Country": "Netherlands",
        "Group": "E"
    },
    {
        "Country": "New Caledonia",
        "Group": "G"
    },
    {
        "Country": "New Zealand",
        "Group": "F"
    },
    {
        "Country": "Nicaragua",
        "Group": "H"
    },
    {
        "Country": "Niger",
        "Group": "G"
    },
    {
        "Country": "Nigeria",
        "Group": "G"
    },
    {
        "Country": "Niue",
        "Group": "G"
    },
    {
        "Country": "Norfolk Island",
        "Group": "E"
    },
    {
        "Country": "Northern Ireland",
        "Group": "E"
    },
    {
        "Country": "Norway",
        "Group": "E"
    },
    {
        "Country": "Oman",
        "Group": "B"
    },
    {
        "Country": "Pakistan",
        "Group": "B"
    },
    {
        "Country": "Palau Island",
        "Group": "G"
    },
    {
        "Country": "Panama (Rep)",
        "Group": "H"
    },
    {
        "Country": "Papua New Guinea",
        "Group": "F"
    },
    {
        "Country": "Paraguay",
        "Group": "H"
    },
    {
        "Country": "Peru",
        "Group": "H"
    },
    {
        "Country": "Philippines",
        "Group": "C"
    },
    {
        "Country": "Pitcairn Island",
        "Group": "H"
    },
    {
        "Country": "Poland",
        "Group": "F"
    },
    {
        "Country": "Portugal",
        "Group": "F"
    },
    {
        "Country": "Puerto Rico",
        "Group": "G"
    },
    {
        "Country": "Vatican City",
        "Group": "E"
    },
    {
        "Country": "Venezuela",
        "Group": "H"
    },
    {
        "Country": "Vietnam",
        "Group": "B"
    },
    {
        "Country": "Virgin Islands (GB)",
        "Group": "E"
    },
    {
        "Country": "Virgin Islands (USA)",
        "Group": "G"
    },
    {
        "Country": "Costa Rica",
        "Group": "H"
    },
    {
        "Country": "Croatia",
        "Group": "E"
    },
    {
        "Country": "Cuba",
        "Group": "H"
    },
    {
        "Country": "Cyprus",
        "Group": "E"
    },
    {
        "Country": "Czech Rep",
        "Group": "F"
    },
    {
        "Country": "Denmark",
        "Group": "E"
    },
    {
        "Country": "Djibouti",
        "Group": "C"
    },
    {
        "Country": "Dominica",
        "Group": "H"
    },
    {
        "Country": "Dominican Republic",
        "Group": "H"
    },
    {
        "Country": "East Timor/Timor-Leste(Dem. Rep)",
        "Group": "G"
    },
    {
        "Country": "Ecuador",
        "Group": "H"
    },
    {
        "Country": "Egypt",
        "Group": "C"
    },
    {
        "Country": "EL Salvador",
        "Group": "H"
    },
    {
        "Country": "Equatorial Guinea",
        "Group": "G"
    },
    {
        "Country": "Eritrea",
        "Group": "C"
    },
    {
        "Country": "Estonia",
        "Group": "F"
    },
    {
        "Country": "Ethiopia",
        "Group": "D"
    },
    {
        "Country": "Falkland Island",
        "Group": "H"
    },
    {
        "Country": "Faroe Island",
        "Group": "E"
    },
    {
        "Country": "Fiji",
        "Group": "G"
    },
    {
        "Country": "Finland",
        "Group": "F"
    },
    {
        "Country": "France",
        "Group": "E"
    },
    {
        "Country": "French Guyana",
        "Group": "H"
    },
    {
        "Country": "French Polynesia",
        "Group": "H"
    },
    {
        "Country": "Gabon",
        "Group": "F"
    },
    {
        "Country": "Qatar",
        "Group": "B"
    },
    {
        "Country": "Reunion",
        "Group": "E"
    },
    {
        "Country": "Romania",
        "Group": "F"
    },
    {
        "Country": "Russian Federation",
        "Group": "D"
    },
    {
        "Country": "Rwanda",
        "Group": "E"
    },
    {
        "Country": "Samoa American",
        "Group": "G"
    },
    {
        "Country": "Samoa Western",
        "Group": "G"
    },
    {
        "Country": "San Marino",
        "Group": "E"
    },
    {
        "Country": "Sao Tome & Principe",
        "Group": "F"
    },
    {
        "Country": "Saudi Arabia",
        "Group": "C"
    },
    {
        "Country": "Senegal",
        "Group": "G"
    },
    {
        "Country": "Serbia",
        "Group": "F"
    },
    {
        "Country": "Seychelles",
        "Group": "F"
    },
    {
        "Country": "Sierra Leone",
        "Group": "G"
    },
    {
        "Country": "Singapore",
        "Group": "B"
    },
    {
        "Country": "Slovakia",
        "Group": "G"
    },
    {
        "Country": "Slovenia",
        "Group": "F"
    },
    {
        "Country": "Solomon Island",
        "Group": "F"
    },
    {
        "Country": "Somalia",
        "Group": "D"
    },
    {
        "Country": "South Africa",
        "Group": "D"
    },
    {
        "Country": "South Georgia",
        "Group": "E"
    },
    {
        "Country": "South Sandwich Island",
        "Group": "E"
    },
    {
        "Country": "Spain",
        "Group": "E"
    },
    {
        "Country": "St. Christopher (St. Kitts) & Nevis",
        "Group": "H"
    },
    {
        "Country": "St. Helena",
        "Group": "H"
    },
    {
        "Country": "St. Lucia",
        "Group": "H"
    },
    {
        "Country": "St. Pierre & Miquelon",
        "Group": "G"
    },
    {
        "Country": "St. Vincent",
        "Group": "H"
    },
    {
        "Country": "Sudan",
        "Group": "D"
    },
    {
        "Country": "Suriname",
        "Group": "H"
    },
    {
        "Country": "Swaziland",
        "Group": "D"
    },
    {
        "Country": "Sweden",
        "Group": "E"
    },
    {
        "Country": "Switzerland",
        "Group": "E"
    },
    {
        "Country": "Syrian Arab Rep.",
        "Group": "G"
    },
    {
        "Country": "Taiwan",
        "Group": "C"
    },
    {
        "Country": "Tajikistan",
        "Group": "C"
    },
    {
        "Country": "Tanzania",
        "Group": "E"
    },
    {
        "Country": "Thailand",
        "Group": "B"
    },
    {
        "Country": "Togo",
        "Group": "G"
    },
    {
        "Country": "Tokelau",
        "Group": "F"
    },
    {
        "Country": "Tonga",
        "Group": "G"
    },
    {
        "Country": "Trinidad & Tobago",
        "Group": "H"
    },
    {
        "Country": "Tristan DA Cunha",
        "Group": "E"
    },
    {
        "Country": "Tunisia",
        "Group": "E"
    },
    {
        "Country": "Turkey",
        "Group": "D"
    },
    {
        "Country": "Turkmenistan",
        "Group": "C"
    },
    {
        "Country": "Turks & Caicos Islands",
        "Group": "H"
    },
    {
        "Country": "Tuvalu",
        "Group": "G"
    },
    {
        "Country": "UAE",
        "Group": "B"
    },
    {
        "Country": "Uganda",
        "Group": "E"
    },
    {
        "Country": "Wallis and Futuna islands",
        "Group": "G"
    },
    {
        "Country": "* Yemen",
        "Group": "C"
    },
    {
        "Country": "Zambia",
        "Group": "E"
    },
    {
        "Country": "Zimbabwe",
        "Group": "D"
    }
]

let exchangeRates = [];
let total;
let itemPrice;

function setCountry() {
    let list = "";
    rateData.forEach(rate => {
        list += `<option value ="${rate.Country}">`
    })
    document.getElementById("countryList").innerHTML = list;
}

function displayResults(toCountry, weight, isRegistered, expense, expected_profit, fromCountry, currency) {
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
`
    if (isRegistered) {
        summary += `<tr><th>Registered Post</th> <td>Yes</td></tr></tbody></table>`;
    } else {
        summary += `<tr><th>Registered Post</th> <td>No</td></tr></tbody></table>`;
    }

    let convertedPostalFee = convertCurrency(total, currency);
    let convertedItemPrice = convertCurrency(itemPrice, currency);

    document.getElementById("summary").innerHTML = summary;
    document.getElementById("totalFee").innerHTML = `Postal Fee: ${convertedPostalFee}`;
    document.getElementById("itemPrice").innerHTML = `Total Item Price: ${convertedItemPrice}`;
    document.getElementById("loadingUi").style.display = "none";
    document.getElementById("currency2").value = currency;
    document.getElementById("resultSection").style.display = "block";
    document.getElementById("resultSection2").style.display = "block";
}

function calculateFee() {
    let form = document.getElementById("calculator");

    function handleForm(event) {
        event.preventDefault();
    }

    form.addEventListener('submit', handleForm)

    let toCountry = document.forms["calculator"]["toCountry"].value;
    let fromCountry = document.forms["calculator"]["fromCountry"].value;
    let weight = document.forms["calculator"]["weight"].value;
    let isRegistered = document.forms["calculator"]["isRegistered"].checked;
    let expense = parseFloat(document.forms["calculator"]["expense"].value);
    let expected_profit = parseFloat(document.forms["calculator"]["expected_profit"].value);
    let currency = parseInt(document.forms["calculator"]["currency"].value);

    if (!expense) {expense =0;}
    if (!expected_profit) {expected_profit=0;}
    toCountry = findObject(toCountry);

    if (toCountry && fromCountry && weight) {
        document.getElementById("validate-country").style.display = "none"
        document.getElementById("validate-weight").style.display = "none"
        fetchExchangeRates().then(r => {
            displayResults(toCountry, weight, isRegistered, expense, expected_profit, fromCountry, currency);
        });
    } else {
        if (!toCountry) {
            document.getElementById("validate-country").style.display = "block"
        } else if (!weight) {
            document.getElementById("validate-country").style.display = "none"
            document.getElementById("validate-weight").style.display = "block"
        }
    }
}

function convertCurrency(value, currency) {
    let finalVal = Number((value * exchangeRates[currency].fromLkr).toFixed(2))
    let convertedValue = `${finalVal} ${exchangeRates[currency].currency}`;
    return convertedValue;
}

function updateResults(value) {
    let currency = value;
    let convertedPostalFee = convertCurrency(total, currency);
    let convertedItemPrice = convertCurrency(itemPrice, currency);
    document.getElementById("totalFee").innerHTML = `Postal Fee: ${convertedPostalFee}`;
    document.getElementById("itemPrice").innerHTML = `Total Item Price: ${convertedItemPrice}`;
    document.getElementById("tableCurrency").innerHTML = `<th>Currency</th> <td> ${exchangeRates[currency].currency}</td>`
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
        totalFee += 200;
    }

    return totalFee;
}

function findGroup(toGroup) {
    let toCountryGroup;
    groupRates.forEach(group => {
        if (group.group === toGroup) {
            toCountryGroup = group;
        }
    })
    return toCountryGroup;
}

function findObject(country) {
    let obj;
    rateData.forEach(data => {
        if (data.Country === country) {
            obj = data;
        }
    });
    return obj;
}

async function fetchExchangeRates() {
    document.getElementById("detailForm").style.display = "none";
    document.getElementById("loadingUi").style.display = "block";
    if (localStorage.getItem("date") !== new Date().toDateString()) {
        document.getElementById("waitingInfo").style.display = "block";
        localStorage.clear();
        const response = await fetch('https://calm-ravine-73220.herokuapp.com/https://www.x-rates.com/table/?from=LKR&amount=1');
        const text = await response.text();
        let currency = [{currency: "LKR", fromLkr: 1, toLkr: 1}];
        let expUSD = /(from=LKR&amp;to=USD.*<\/a>|from=USD&amp;to=LKR.*<\/a>)/g;
        let expAUD = /(from=LKR&amp;to=AUD.*<\/a>|from=AUD&amp;to=LKR.*<\/a>)/g;
        let expEUR = /(from=LKR&amp;to=EUR.*<\/a>|from=EUR&amp;to=LKR.*<\/a>)/g;
        let expGBP = /(from=LKR&amp;to=GBP.*<\/a>|from=GBP&amp;to=LKR.*<\/a>)/g;
        currency.push(extractCurrency("USD", expUSD, text));
        currency.push(extractCurrency("AUD", expAUD, text));
        currency.push(extractCurrency("EUR", expEUR, text));
        currency.push(extractCurrency("GBP", expGBP, text));
        localStorage.setItem("date", new Date().toDateString());
        localStorage.setItem("currency", JSON.stringify(currency));
        exchangeRates = currency;
        document.getElementById("waitingInfo").style.display = "block";
    } else {
        exchangeRates = JSON.parse(localStorage.getItem("currency"));
    }
}

function extractCurrency(currency, currencyRegex, text) {
    let scraped = text.match(currencyRegex);
    let regexFloat = /[+-]?\d+(\.\d+)?/g;
    let obj = {
        currency: currency,
        fromLkr: parseFloat(scraped[0].match(regexFloat)[0]),
        toLkr: parseFloat(scraped[1].match(regexFloat)[0])
    }
    return obj;
}