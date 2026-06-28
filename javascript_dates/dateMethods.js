const myDate = new Date()

console.log("Local Year: ", myDate.getFullYear());
console.log("UTC Year: ", myDate.getUTCFullYear());
console.log("Local Month: ", myDate.getMonth() + 1); //starts from zero
console.log("UTC Month: ", myDate.getUTCMonth() + 1); //starts from zero
console.log("Local Date: ", myDate.getDate());
console.log("UTC Date: ", myDate.getUTCDate());
console.log("Local Day: ", myDate.getDay()); //starts from monday
console.log("UTC Day: ", myDate.getUTCDay()); //starts from monday
console.log("Local Hour: ", myDate.getHours());
console.log("UTC Hour: ", myDate.getUTCHours());
console.log("Local Minutes: ", myDate.getMinutes());
console.log("UTC Minutes: ", myDate.getUTCMinutes());
console.log("Local Seconds: ", myDate.getSeconds());
console.log("UTC Seconds: ", myDate.getUTCSeconds());
console.log("Local Milli Seconds: ", myDate.getMilliseconds());
console.log("UTC Milli Seconds: ", myDate.getUTCMilliseconds());


console.log(myDate.getTime());
console.log(Date.now());
console.log(myDate.toLocaleString('en-GB', {hour12: true}));
console.log(myDate.toLocaleDateString('en-GB'));
console.log(myDate.toISOString());
console.log(myDate.toJSON())
console.log(myDate.toString());
console.log(myDate.toUTCString()); 
console.log("Time Zone Offset : ", myDate.getTimezoneOffset() / -60);