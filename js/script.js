// let userName = document.getElementById("accountHolderNamedtl");
// let userAge = document.getElementById("accountHolderAgedtl");
// let userAccountNo = document.getElementById("accountNumdtl");
// let userBankName = document.getElementById("bankNamedtl");
// let userBankIfsc = document.getElementById("bankifscdtl");
// let userBalance = document.getElementById("accountHolderBalancedtl");
// let userAddress = document.getElementById("accountHolderAddressdtl");
// let userAccountType = document.getElementById("AccountTypedtl");

// function openPopup() {
//   document.getElementById("popupOverlay").style.display = "flex";
// }

// function closePopup() {
//   document.getElementById("popupOverlay").style.display = "none";
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   let statements = [];
//   // Get form values
//   let accountDetails = {
//       accountNumber: 12345678,
//       accountHolderName: document.getElementById("accountHolderName").value,
//       accountHolderAge: document.getElementById("accountHolderAge").value,
//       bankName: document.getElementById("bankName").value,
//       bankIfsc: "BARB0MALDUN",
//       accountHolderBalance: 0,
//       maxAccountLimit: 50000000,
//       accountHolderAddress: document.getElementById("accountHolderAddress").value,
//       accountType:
//       document.getElementById("accountHolderAge").value >= 18
//       ? "Saving Account"
//       : "Minor Account",

//       deposit(amount) {
//            amount = +alert("please enter your amount value ");
//         if (amount <= 0) {
//             return "Invalid amount!";
//         } else if (amount >= this.maxAccountLimit) {
//             return "Maximum account limit reached!";
//         } else {
//             accountDetails.accountHolderBalance += amount;
//             statements.push(`Deposit ${amount}, ${new Date().toLocaleString()}`);
//             return `Deposit ${amount}`;
//         }
//     },
//     withdraw(amount) {
//          amount = +alert("please enter your amount value ");
//       if (amount <= 0) {
//         return "Invalid amount!";
//       } else if (amount >= this.maxAccountLimit) {
//         return "Maximum account limit reached!";
//       } else if (amount > this.accountHolderBalance) {
//         return "low account balance";
//       } else {
//         accountDetails.accountHolderBalance -= amount;
//         statements.push(`withdraw ${amount}, ${new Date().toLocaleString()}`);
//         return `withdraw ${amount}`;
//       }
//     },
//     getAccountBalance() {
//       return `your account balance is ${this.accountHolderBalance}`;
//     },
//     getAccountStatement() {
//       return (`your account Statement is /n` + statements.join("/n"));
//     },
//   };

//   // Update details on the main page
//   userAccountNo.innerHTML = accountDetails.accountNumber;
//   userName.innerHTML = accountDetails.accountHolderName;
//   userAge.innerHTML = accountDetails.accountHolderAge;
//   userBankName.innerHTML = accountDetails.bankName;
//   userBankIfsc.innerHTML = accountDetails.bankIfsc;
//   userBalance.innerHTML = accountDetails.accountHolderBalance;
//   userAddress.innerHTML = accountDetails.accountHolderAddress;
//   userAccountType.innerHTML = accountDetails.accountType;

//   alert("Account Details Saved Successfully!");
//   closePopup();
// }
// DOM elements for displaying account details

let userName = document.getElementById("accountHolderNamedtl");
let userAge = document.getElementById("accountHolderAgedtl");
let userAccountNo = document.getElementById("accountNumdtl");
let userBankName = document.getElementById("bankNamedtl");
let userBankIfsc = document.getElementById("bankifscdtl");
let userBalance = document.getElementById("accountHolderBalancedtl");
let userAddress = document.getElementById("accountHolderAddressdtl");
let userAccountType = document.getElementById("AccountTypedtl");



// Account object to store account details
let accountDetails = {
  accountNumber: 12345678,
  accountHolderName: "",
  accountHolderAge: 0,
  bankName: "",
  bankIfsc: "BARB0MALDUN",
  accountHolderBalance: 0,
  maxAccountLimit: 50000000,
  accountHolderAddress: "",
  accountType: "",

  // Deposit function
  deposit(amount) {
    if (amount <= 0) {
      alert("Invalid amount!");
    } else if (amount >= this.maxAccountLimit) {
      alert("Maximum account limit reached!");
    } else {
      this.accountHolderBalance += amount;
      alert(`Deposited ₹${amount}. New balance: ₹${this.accountHolderBalance}`);
      updateBalance(); // Update balance in the UI
    }
  },

  // Withdraw function
  withdraw(amount) {
    if (amount <= 0) {
      alert("Invalid amount!");
    } else if (amount > this.accountHolderBalance) {
      alert("Insufficient balance!");
    } else {
      this.accountHolderBalance -= amount;
      alert(`Withdrew ₹${amount}. New balance: ₹${this.accountHolderBalance}`);
      updateBalance(); // Update balance in the UI
    }
  },

  // Function to get account balance
  getAccountBalance() {
    alert(`Your current account balance is ₹ ${this.accountHolderBalance}`);
  },

  // Function to get account statement (for simplicity, it will show deposit/withdraw actions)
  getAccountStatement() {
    alert("Your account statement:\n" + statements.join("\n"));
  },
};

// Store account statement actions
let statements = [];

// Update balance on the UI
function updateBalance() {
  userBalance.innerHTML = accountDetails.accountHolderBalance;
}

// Open and close popup
function openPopup() {
  document.getElementById("popupOverlay").style.display = "flex";
}

function closePopup() {
  document.getElementById("popupOverlay").style.display = "none";
}

// Handle form submission to save account details
function handleSubmit(event) {
  event.preventDefault();

  accountDetails.accountHolderName =
    document.getElementById("accountHolderName").value;
  accountDetails.accountHolderAge =
    document.getElementById("accountHolderAge").value;
  accountDetails.bankName = document.getElementById("bankName").value;
  accountDetails.accountHolderAddress = document.getElementById(
    "accountHolderAddress"
  ).value;
  accountDetails.accountType =
    accountDetails.accountHolderAge >= 18 ? "Saving Account" : "Minor Account";

  // Update account details on the main page
  userAccountNo.innerHTML = accountDetails.accountNumber;
  userName.innerHTML = accountDetails.accountHolderName;
  userAge.innerHTML = accountDetails.accountHolderAge;
  userBankName.innerHTML = accountDetails.bankName;
  userBankIfsc.innerHTML = accountDetails.bankIfsc;
  userBalance.innerHTML = accountDetails.accountHolderBalance;
  userAddress.innerHTML = accountDetails.accountHolderAddress;
  userAccountType.innerHTML = accountDetails.accountType;

  alert("Account Details Saved Successfully!");
  closePopup();
}

// Functions to handle deposit and withdrawal (called by buttons)
function deposit() {
  let amount = prompt("Enter deposit amount: ");
  amount = parseFloat(amount);
  if (!isNaN(amount)) {
    accountDetails.deposit(amount); // Calls deposit function
    statements.push(`Deposit ₹${amount}, ${new Date().toLocaleString()}`);
  } else {
    alert("Invalid amount entered");
  }
}

function withdraw() {
  let amount = prompt("Enter withdrawal amount: ");
  amount = parseFloat(amount);
  if (!isNaN(amount)) {
    accountDetails.withdraw(amount); // Calls withdraw function
    statements.push(`Withdraw ₹${amount}, ${new Date().toLocaleString()}`);
  } else {
    alert("Invalid amount entered");
  }
}

function getAccountBalance() {
  accountDetails.getAccountBalance();
}

function getAccountStatement() {
  accountDetails.getAccountStatement();
}
