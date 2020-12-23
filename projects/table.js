const users = [
  {
    "_id": "5d220b10e8265cc978e2586b",
    "isActive": true,
    "balance": 2853.33,
    "age": 20,
    "name": "Buckner Osborne",
    "gender": "male",
    "company": "EMPIRICA",
    "email": "bucknerosborne@empirica.com",
    "phone": "+1 (850) 411-2997",
    "registered": "2018-08-13T04:28:45 -03:00",
    "nestedField": { total: 300 }
  },
  {
    "_id": "5d220b10144ef972f6c2b332",
    "isActive": true,
    "balance": 1464.63,
    "age": 38,
    "name": "Rosalie Smith",
    "gender": "female",
    "company": "KATAKANA",
    "email": "rosaliesmith@katakana.com",
    "phone": "+1 (943) 463-2496",
    "registered": "2016-12-09T05:15:34 -02:00",
    "nestedField": { total: 400 }
  },
  {
    "_id": "5d220b1083a0494655cdecf6",
    "isActive": false,
    "balance": 2823.39,
    "age": 40,
    "name": "Estrada Davenport",
    "gender": "male",
    "company": "EBIDCO",
    "email": "estradadavenport@ebidco.com",
    "phone": "+1 (890) 461-2088",
    "registered": "2016-03-04T03:36:38 -02:00",
    "nestedField": { total: 200 }
  }
];

const tableColumnName = {
  number: '#',
  name: 'Name',
  email: 'Email',
  balance: 'Balance',
};

(function () {
  // create the table into container
  const formContainer = document.querySelector('.table-container');
  const table = document.createElement("table");
  table.classList.add('table');
  formContainer.appendChild(table);

  // create table caption
  const caption = document.createElement('caption');
  caption.textContent = 'List of Users';
  caption.classList.add('table__caption');
  table.appendChild(caption);

  // create table header
  const tableHeader = document.createElement('thead');
  tableHeader.classList.add('table__header');
  table.appendChild(tableHeader);
  createHeaderRow(tableColumnName);

  // create table footer
  const tableFooter = document.createElement('tfoot');
  tableFooter.classList.add('table__footer');
  table.appendChild(tableFooter);
  createFooterRow(users);

  // create table body
  const tableBody = document.createElement('tbody');
  tableBody.classList.add('table__body');
  table.appendChild(tableBody);

  const arrayUsers = createArrayUsersForTable(users);

  arrayUsers.forEach(value => { createBodyRow(value) });



  // -- ALL METHODS OF THIS PROJECT --

  function createHeaderRow(tableColumnName) {
    const headerRow = document.createElement('tr');
    headerRow.classList.add('table__header-row');
    tableHeader.appendChild(headerRow);

    Object.values(tableColumnName).forEach(value => {
      const headerColumn = document.createElement('th');
      headerColumn.classList.add('table__header-column');
      headerColumn.setAttribute('align', 'left');
      headerColumn.textContent = value;
      headerRow.appendChild(headerColumn);
    });

    return headerRow;
  };

  function createFooterRow(array) {
    const sum = array.reduce((acc, item) => acc + parseFloat(item.balance), 0);

    const footerRow = document.createElement('tr');
    footerRow.classList.add('table__footer-row');
    tableFooter.appendChild(footerRow);

    const footerColumn = document.createElement('td');
    footerColumn.classList.add('table__footer-col');
    footerColumn.insertAdjacentHTML('beforeend', `Total balance: <b>${sum}</b>`);
    footerColumn.setAttribute('colspan', 4);
    footerColumn.setAttribute('align', 'right');
    footerRow.appendChild(footerColumn);
  };

  function createArrayUsersForTable(array) {
    // add number field into each object of users array
    array.forEach((item, index) => {
      item.number = index + 1;
    });

    const arrayUsers = array.map(function (user) {
      return {
        number: user.number,
        name: user.name,
        email: user.email,
        balance: user.balance
      };
    });

    return arrayUsers;
  };

  function createBodyRow(tableColumnName) {
    const bodyRow = document.createElement('tr');
    bodyRow.classList.add('table__body-row');
    tableBody.appendChild(bodyRow);

    Object.values(tableColumnName).forEach(value => {
      const bodyColumn = document.createElement('td');
      bodyColumn.classList.add('table__body-column');
      bodyColumn.textContent = value;
      bodyRow.appendChild(bodyColumn);
    });

    return bodyRow;
  };

  console.log(formContainer);

})(users);
