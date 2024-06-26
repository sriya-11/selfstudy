let companies=["bloomberg","microsoft","uber","google","ibm","netflix"];
console.log(companies.shift());
companies.splice(0,0,"bloomberg");
console.log(companies);
companies.splice(2,1,"sola");
console.log(companies);
companies.push("amazon");
console.log(companies);