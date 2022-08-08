const categoryData = [
  {
    categoryName: 'Other',
    default: 12.85,
    ebayStore: 12.0,
    topRated: 11.6,
    belowStandard: 13.48,
    storeTopRated: 10.83,
    storeBelowStandard: 12.59,
  },
  {
    categoryName: 'Automotive Tools & Supplies. For vehicles',
    default: undefined,
    ebayStore: 11.0,
    topRated: undefined,
    belowStandard: undefined,
    storeTopRated: 9.93,
    storeBelowStandard: 11.54,
  },
  {
    categoryName: 'Athletic Shoes',
    default: 0,
    ebayStore: 0,
    topRated: 0,
    belowStandard: 0,
    storeTopRated: 0,
    storeBelowStandard: 0,
  },
  {
    categoryName: 'Books,Magazines,Movies & TV',
    default: 14.85,
    ebayStore: 14.85,
    topRated: 13.39,
    belowStandard: 15.58,
    storeTopRated: 13.39,
    storeBelowStandard: 15.58,
  },
  {
    categoryName: 'Bullion',
    default: 12.65,
    ebayStore: 7.3,
    topRated: 11.42,
    belowStandard: 13.27,
    storeTopRated: 6.6,
    storeBelowStandard: 7.65,
  },
  {
    categoryName: 'Cameras & Photoes',
    default: undefined,
    ebayStore: 12,
    topRated: undefined,
    belowStandard: undefined,
    storeTopRated: 10.83,
    storeBelowStandard: 12.59,
  },
  {
    categoryName: 'Cell phones & Accessories',
    default: undefined,
    ebayStore: 9,
    topRated: undefined,
    belowStandard: undefined,
    storeTopRated: 8.13,
    storeBelowStandard: 9.44,
  },
  {
    categoryName: 'Coin & Paper Money',
    default: undefined,
    ebayStore: 8.8,
    topRated: undefined,
    belowStandard: undefined,
    storeTopRated: 7.95,
    storeBelowStandard: 9.23,
  },
  {
    categoryName: 'Guitar & Basses',
    default: 6.15,
    ebayStore: 6.15,
    topRated: 5.57,
    belowStandard: 6.44,
    storeTopRated: undefined,
    storeBelowStandard: undefined,
  },
  {
    categoryName: 'Computer Tablets & Networking',
    default: undefined,
    ebayStore: 9,
    topRated: undefined,
    belowStandard: undefined,
    storeTopRated: 8.13,
    storeBelowStandard: 9.44,
  },
  {
    categoryName: 'Consumer Eletronics',
    default: undefined,
    ebayStore: 9,
    topRated: undefined,
    belowStandard: undefined,
    storeTopRated: 8.13,
    storeBelowStandard: 9.44,
  },
  {
    categoryName: 'Heavy Equipment,Commercial Printing Press',
    default: 3.3,
    ebayStore: 2.8,
    topRated: 3,
    belowStandard: 3.45,
    storeTopRated: 2.55,
    storeBelowStandard: 2.92,
  },
  {
    categoryName: 'Music',
    default: 14.85,
    ebayStore: 14.85,
    topRated: 13.39,
    belowStandard: 15.58,
    storeTopRated: 13.39,
    storeBelowStandard: 15.58,
  },
  {
    categoryName: 'Stamps',
    default: undefined,
    ebayStore: 9,
    topRated: undefined,
    belowStandard: undefined,
    storeTopRated: 8.13,
    storeBelowStandard: 9.44,
  },
  {
    categoryName: 'Video Games',
    default: undefined,
    ebayStore: 9,
    topRated: undefined,
    belowStandard: undefined,
    storeTopRated: 8.13,
    storeBelowStandard: 9.44,
  },
  {
    categoryName: 'NFTs',
    default: 5.3,
    ebayStore: 5.3,
    topRated: 4.8,
    belowStandard: 5.55,
    storeTopRated: 4.8,
    storeBelowStandard: 5.55,
  },
  {
    categoryName: 'Trading Card or Collectibale Card Games',
    default: 12.65,
    ebayStore: 11.8,
    topRated: 11.42,
    belowStandard: 13.27,
    storeTopRated: 10.65,
    storeBelowStandard: 12.38,
  },
  {
    categoryName: 'Watches',
    default: 15.3,
    ebayStore: 12.8,
    topRated: 13.8,
    belowStandard: 16.05,
    storeTopRated: 11.55,
    storeBelowStandard: 13.43,
  },
  {
    categoryName: "Women's Handbag",
    default: 11.8,
    ebayStore: 11.8,
    topRated: 13.8,
    belowStandard: 16.05,
    storeTopRated: 10.65,
    storeBelowStandard: 12.34,
  },
];

let selectedCategory = categoryData[0];

// Enabling and disabling optional input fields
function onChecked(id, block) {
  if (document.getElementById(id).checked) {
    document.getElementById(block).style.display = 'block';
  } else {
    document.getElementById(block).style.display = 'none';
  }
}

// Set categories list
function setCategories() {
  let list = '';
  categoryData.forEach((category, i) => {
    list += `<option value ="${i}">${category.categoryName}</option>`;
  });
  document.getElementById('category').innerHTML = list;
}

//get selected category
function getSelectedCategory() {
  return selectedCategory;
}

//Calculate Ebay final fee
function calculateFinalFee() {
  let itemCost = parseFloat(document.forms['calculator']['item-cost'].value);
  let expectedProfit = parseFloat(document.forms['calculator']['profit'].value);
  let shippingCharges = parseFloat(
    document.forms['calculator']['shipping-charges'].value
  );
  selectedCategory =
    categoryData[document.forms['calculator']['category'].value];

  console.log(selectedCategory);

  let total = (
    (itemCost ? itemCost : 0) +
    (expectedProfit ? expectedProfit : 0) +
    (shippingCharges ? shippingCharges : 0)
  ).toFixed(2);

  displayFinalFeeValue(total, 'USD');
}

//     categoryName: "Women's Handbag",
//     default: 11.8,
//     ebayStore: 11.8,
//     topRated: 13.8,
//     belowStandard: 16.05,
//     storeTopRated: 10.65,
//     storeBelowStandard: 12.34,

function calculateCharges() {
  let charges = 0;
  let isEbayStore = document.forms['calculator']['ebay-store'].value;
  let isTopRated = document.forms['calculator']['top-rated'].value;
  let isBelowStandard = document.forms['calculator']['below-standard'].value;
  let isInternationalFee =
    document.forms['calculator']['international-fee'].value;
  let isPromotedListing = document.forms['calculator']['is-promoted'].value;
  let isSalesTax = document.forms['calculator']['checkbox'].value;
  let isOtherFees = document.forms['calculator']['other'].value;

  if (selectedCategory) {
    if (isEbayStore) {
    }
  }

  return charges;
}

//Display final fee value
function displayFinalFeeValue(finalFee, currency) {
  document.getElementById('final-cost').innerHTML = finalFee;
  document.getElementById('final-currency').innerHTML = currency;
}

// Execute functions with page refresh
setCategories();
