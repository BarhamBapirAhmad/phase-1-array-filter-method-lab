// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];


function findMatching (drivers,driversname){
    const dr = drivers.filter((el) => el.toLowerCase() ==driversname.toLowerCase());

    return dr; 
}
function fuzzyMatch (driver, letter ){
   const result = driver.filter(driverName => driverName.substring(0,2) === letter);
return result;
 }   
 
 driver.length=0;
  driver.push('Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby');
  const driveres = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function matchName (driveres , str){
const ds = driveres.filter((el) => el.name == str);
return ds;
}