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
  
  function renderCustomerPrizes() {
    custHtml = `<ul> ${actualPrizeNames.map(function(el){return `<li><button>-</button>${el}<button>+</button></li>`}).join('')} </ul>`;
    console.log(custHtml);
    customerPrizes.forEach(function(el){el.innerHTML = custHtml});
  }

  renderCustomerPrizes();

