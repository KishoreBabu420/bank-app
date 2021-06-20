'use strict';

const main = document.getElementById('main');
const btnAddUser = document.getElementById('add-user');
const btnDouble = document.getElementById('double');
const btnFilter = document.getElementById('filter-rich');
const btnTotal = document.getElementById('total');

//add user

let data = [];

//fetch a random user from random user

const getRandomUser = async function () {
  const response = await fetch('https://randomuser.me/api');
  const data = await response.json();
  const user = data.results[0];

  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    balance: Math.floor(Math.random() * 100000),
  };

  addData(newUser);
};

//function addData

const addData = function (obj) {
  data.push(obj);
  updateDOM();
};

//Function update DOM

const updateDOM = function (providedData = data) {
  //clear main
  main.innerHTML = '<h2><strong>Name</strong> Balance</h2>';
  providedData.forEach((item) => {
    const element = document.createElement('div');
    element.classList.add('users');
    element.innerHTML = `<strong>${item.name}</strong>₹${formatToCurrency(
      item.balance
    )}`;
    main.appendChild(element);
  });
};

function formatToCurrency(amount) {
  return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

//Double Balance

const doubleBalance = function () {
  data = data.map((user) => {
    return { ...user, balance: user.balance * 2 };
  });

  updateDOM();
};

//fi

//call random Users and
getRandomUser();
getRandomUser();
getRandomUser();

//Event Listeners
btnAddUser.addEventListener('click', getRandomUser);

btnDouble.addEventListener('click', doubleBalance);

btnFilter.addEventListener('click', filterRich);
