const user1DOB = "13/10/2007";
const user2DOB = "06/07/2008";
const isoDate = "2000-04-02T12:00:00.300Z"
const timeStampDate = new Date(25)
const [day, month, year] = user1DOB.split('/').map(el => +el)

// DD/MM/YYYY Not Accepted.
// MM/DD/YYYY or YYYY/MM/DD Accepted.

const user1Date = new Date(user1DOB.split("/").reverse().join());
const user2Date = new Date(user2DOB.split("/").reverse().join());
const user3Date = new Date(isoDate)
const user4Date = new Date(year, month - 1, day)


const user1AgeInMilliSeconds = Date.now() - user1Date.getTime();
const user2AgeInMilliSeconds = Date.now() - user2Date.getTime();

console.log(user4Date);
