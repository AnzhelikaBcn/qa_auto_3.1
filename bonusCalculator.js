const calculateBonus = (a, b) => {
  let bonus;
  const validA = (a || 0) >= 0 ? (a || 0) : 0;
  const validB = (b || 0) >= 0 ? (b || 0) : 0;
  const sum = validA + validB;
  sum > 50 ? (bonus = 50) : (bonus = sum);
  return bonus;
};
   
  
  module.exports = calculateBonus;