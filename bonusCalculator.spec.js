const calculateBonus = require(`./bonusCalculator`);
  
  describe('calculateBonus', () => {
    it('should calculate bonus correctly', () => {
      expect(calculateBonus(10, 20)).toBe(30);
      expect(calculateBonus(30, 140)).toBe(50);
      expect(calculateBonus(150, 50)).toBe(50);
      expect(calculateBonus(70, 80)).toBe(50);
    });
  });

  describe('calculateBonus with null', () => {
    it('should calculate bonus correctly', () => {
      expect(calculateBonus(null, null)).toBe(0);
      expect(calculateBonus(0, 0)).toBe(0);
      expect(calculateBonus(150, null)).toBe(50);
      expect(calculateBonus(0, 80)).toBe(50);
    });
  });
  
  describe('calculateBonus with 0', () => {
    it('should calculate bonus correctly', () => {
      expect(calculateBonus(0, 20)).toBe(20);
      expect(calculateBonus(0, 0)).toBe(0);
      expect(calculateBonus(150, 0)).toBe(50);
      expect(calculateBonus(0, 80)).toBe(50);
    });
  });

  describe('calculateBonus with negative values', () => {
    it('should calculate bonus correctly', () => {
      expect(calculateBonus(-10, -20)).toBe(0);
      expect(calculateBonus(30, -20)).toBe(30);
      expect(calculateBonus(-50, -20)).toBe(0);
      expect(calculateBonus(-170, -180)).toBe(0);
    });
  });