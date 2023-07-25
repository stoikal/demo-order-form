const convert = (conversions, units) => {
  return units.reduce((res, { name, quantity }) => {
    const conversionRate = conversions.find(({ name: unit }) => name === unit)?.unit_quantity;
    return res + quantity * conversionRate;
  }, 0);
};
