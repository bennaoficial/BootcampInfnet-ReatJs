function calculateTotal(totals) {
  const total = totals.reduce((previousValue, currentValue) => {
    return currentValue[0] + previousValue;
  }, 0);
  return total;
}

function calculatePromo(totals) {
  const totalPromo = totals.reduce((previousValue, currentValue) => {
    if (currentValue[1]) {
      return currentValue[0] - currentValue[1] + previousValue;
    }
    return 0 + previousValue;
  }, 0);

  return totalPromo;
}

module.exports = {
  calculateTotal,
  calculatePromo,
};
