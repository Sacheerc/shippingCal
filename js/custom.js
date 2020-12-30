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
        "Country": "USA",
        "Group": "G",
    },
    {
        "Country": "Sri Lanka",
        "Group": "S",
    },
    {
        "Country": "Russia",
        "Group": "D",
    }
]

function setCountry(){
    let list = "";
    rateData.forEach(rate => {
        list += `<option value ="${rate.Country}">`
    })
    document.getElementById("countryList").innerHTML = list;
}

function calculateFee() {
    let form = document.getElementById("calculator");
    function handleForm(event) { event.preventDefault(); }
    form.addEventListener('submit', handleForm)

    let toCountry = document.forms["calculator"]["toCountry"].value;
    let fromCountry = document.forms["calculator"]["fromCountry"].value;
    let weight = document.forms["calculator"]["weight"].value;
    let isRegistered = document.forms["calculator"]["isRegistered"].checked;
    console.log(isRegistered)
    toCountry = findObject(toCountry)
    if (toCountry && fromCountry && weight){
        document.getElementById("detailForm").style.display = "none";
        document.getElementById("loadingUi").style.display = "block";
        let group = findGroup(toCountry.Group);
        let total = calculateSum(weight, group.first20, group.addtional10, isRegistered);
        let summary = `<table class="table table-borderless" style="font-size: 14px"><tbody>
                                        <tr><th>From</th> <td> ${fromCountry}</td></tr>
                                        <tr><th>To</th> <td> ${toCountry.Country} (GROUP - ${toCountry.Group})</td></tr>
                                        <tr><th>Weight</th> <td> ${weight} g</td></tr>`
        if (isRegistered) {
            summary += `<tr><th>Registered Post</th> <td>Yes</td></tr></tbody></table>`;
        } else {
            summary += `<tr><th>Registered Post</th> <td>No</td></tr></tbody></table>`;
        }
        document.getElementById("summary").innerHTML = summary;
        document.getElementById("totalFee").innerHTML = `Total Cost: ${total}.00 Rs`
        document.getElementById("loadingUi").style.display = "none";
        document.getElementById("resultSection").style.display = "block"
    } else {
        // alert("Please Complete All fields and Try again")
    }

}

function reload() {
    window.reload();
}

function calculateSum(weight, first20, additional10, isRegistered){
    let totalFee = 0;
    let extraWeight =  weight - 20;
    if(extraWeight <= 0){
        totalFee = first20;
    } else {
        let extraCharge = Math.floor(extraWeight/10)*additional10;
        totalFee = first20 + extraCharge;
    }

    if (isRegistered){
        totalFee += 200;
    }

    return totalFee;
}

function findGroup(toGroup){
    let toCountryGroup;
    groupRates.forEach(group => {
        if (group.group === toGroup){
            toCountryGroup = group;
        }
    })
    return toCountryGroup;
}

function findObject(country){
    let obj;
    rateData.forEach( data =>{
        if(data.Country === country) {
            obj = data;
        }
    });
    return obj;
}