// Code your solution in this file!

// Returns the first two drivers from an array of drivers
const returnFirstTwoDrivers = function(driver) {
    return driver.slice(0, 2);
  };
  
  // Returns the last two drivers from an array of drivers
  const returnLastTwoDrivers = function(driver) {
    return driver.slice(-2);
  };
  
  // Array containing the first two and last two drivers functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function that returns a function which multiplies a fare by a given integer
  const createFareMultiplier = function(integer) {
    return function(fare) {
      return fare * integer;
    };
  };
  
  // Doubles the fare
  const fareDoubler = createFareMultiplier(2);
  
  // Triples the fare
  const fareTripler = createFareMultiplier(3);
  
  // Selects different sets of drivers based on the provided selection function
  const selectDifferentDrivers = function(drivers, selectionFunction) {
    return selectionFunction(driver);
  };
  
  // Example usage:
  const driver = ["Antonia", "Nuru", "Amari", "Mo"];
  
  // Select the first two drivers
  const firstTwoDrivers = selectDifferentDrivers( drivers, returnFirstTwoDrivers);
  console.log(firstTwoDrivers); // Output: ["Antonia", "Nuru"]
  
  // Select the last two drivers
  const lastTwoDrivers = selectDifferentDrivers(drivers, returnLastTwoDrivers);
  console.log(lastTwoDrivers); // Output: ["Amari", "Mo"]
  