const data = {
    customers: {
      Moe: {
        Foo: 0,
        Bar: 0,
        Bazz: 0
      },
      Larry: {
        Foo: 0,
        Bar: 0,
        Bazz: 0
      },
      Curly: {
        Foo: 0,
        Bar: 0,
        Bazz: 0
      }
    },
    prizes: {
      Foo: 1,
      Bar: 3,
      Bazz: 5
    }
  };

  const prizeNames = Array.from(document.getElementsByClassName('prize-name'));
  const actualPrizeNames = Object.keys(data.prizes);
  
  
  function renderPrizes() {
    let i = 0;
    prizeNames.map(function(el){
        const names = actualPrizeNames;
        el.innerHTML = names[i];
        i++;
    })
  }
  const customerNames = Array.from(document.getElementsByClassName('customer-name'));
  
  function renderCustomers() {
    let i = 0;
    customerNames.map(function(el){
        const names = Object.keys(data.customers);
        el.innerHTML = names[i];
        i++;
    })
  }

  renderPrizes();
  renderCustomers();

  const customerPrizes = Array.from(document.getElementsByClassName('customer-count'));
  const actualCustomerNames = customerNames.map(function(el){return el.innerHTML});
  function renderCustomerPrizes() {
    customerPrizes[0].innerHTML = `<ul> ${actualPrizeNames.map(function(el, i){return `<li class='${i}'><button id='minus' class='${i}'>-</button>${el} ${data.customers[actualCustomerNames[0]][el]}<button id='plus' class='${i}'>+</button></li>`}).join('')} </ul>`;
    customerPrizes[1].innerHTML = `<ul> ${actualPrizeNames.map(function(el, i){return `<li class='${i}'><button id='minus' class='${i}'>-</button>${el} ${data.customers[actualCustomerNames[1]][el]}<button id='plus' class='${i}'>+</button></li>`}).join('')} </ul>`;
    customerPrizes[2].innerHTML = `<ul> ${actualPrizeNames.map(function(el, i){return `<li class='${i}'><button id='minus' class='${i}'>-</button>${el} ${data.customers[actualCustomerNames[2]][el]}<button id='plus' class='${i}'>+</button></li>`}).join('')} </ul>`;
    // custHtml = `<ul> ${actualPrizeNames.map(function(el, i){return `<li class='${i}'><button id='minus' class='${i}'>-</button>${el} ${data.customers[actualCustomerNames[i]][el]}<button id='plus' class='${i}'>+</button></li>`}).join('')} </ul>`;
    // customerPrizes.forEach(function(el){
    //     el.innerHTML = custHtml
    // });
  }

  renderCustomerPrizes();

const prizeCounts = Array.from(document.getElementsByClassName('prize-count'));
function renderPrizeInventory() {
    prizeCounts.forEach(function(el, i){
        el.innerHTML = data.prizes[actualPrizeNames[i]];
    });
}

renderPrizeInventory();

cust1 = document.getElementById('cust1');
cust2 = document.getElementById('cust2');
cust3 = document.getElementById('cust3');

cust1.addEventListener('click', function(ev){
    if (ev.target.tagName === 'BUTTON') {
        let i = ev.target.className;
        if (ev.target.id === 'plus' && data.prizes[actualPrizeNames[i]] > 0) {
            data.customers[actualCustomerNames[0]][actualPrizeNames[i]] += 1;
            data.prizes[actualPrizeNames[i]] -= 1;
            renderCustomerPrizes();
            renderPrizeInventory();
        } else if (ev.target.id === 'minus'){
            let count = data.customers[actualCustomerNames[0]][actualPrizeNames[i]];
            if(count > 0) {
                data.customers[actualCustomerNames[0]][actualPrizeNames[i]] -= 1;
                data.prizes[actualPrizeNames[i]] += 1;
            }
            renderCustomerPrizes();
            renderPrizeInventory();
        }
    }
    console.log(data);
});
cust2.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'BUTTON') {
        if (ev.target.tagName === 'BUTTON') {
            let i = ev.target.className;
            if (ev.target.id === 'plus' && data.prizes[actualPrizeNames[i]] > 0) {
                data.customers[actualCustomerNames[1]][actualPrizeNames[i]] += 1;
                data.prizes[actualPrizeNames[i]] -= 1;
                renderCustomerPrizes();
                renderPrizeInventory();
            } else if (ev.target.id === 'minus'){
                let count = data.customers[actualCustomerNames[1]][actualPrizeNames[i]];
                if(count > 0) {
                    data.customers[actualCustomerNames[1]][actualPrizeNames[i]] -= 1;
                    data.prizes[actualPrizeNames[i]] += 1;
                }
                renderCustomerPrizes();
                renderPrizeInventory();
            }
        }
    }
});
cust3.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'BUTTON') {
        if (ev.target.tagName === 'BUTTON') {
            let i = ev.target.className;
            if (ev.target.id === 'plus' && data.prizes[actualPrizeNames[i]] > 0) {
                data.customers[actualCustomerNames[2]][actualPrizeNames[i]] += 1;
                data.prizes[actualPrizeNames[i]] -= 1;
                renderCustomerPrizes();
                renderPrizeInventory();
            } else if (ev.target.id === 'minus'){
                let count = data.customers[actualCustomerNames[2]][actualPrizeNames[i]];
                if(count > 0) {
                    data.customers[actualCustomerNames[2]][actualPrizeNames[i]] -= 1;
                    data.prizes[actualPrizeNames[i]] += 1;
                }
                renderCustomerPrizes();
                renderPrizeInventory();
            }
        }
    }
});