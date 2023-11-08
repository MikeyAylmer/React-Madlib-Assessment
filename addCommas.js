function addCommas(number) {

    // Convert the number to a string
    const numberStr = number.toString();

    // Use a regular expression to add commas
    // while preserving any decimal portion
    const parts = numberStr.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

    // Join the parts back together
    return parts.join('.');
}

// Example usage:
//  const numberWithCommas = addCommas(1234567.89);
//  console.log(numberWithCommas);

module.exports = addCommas;