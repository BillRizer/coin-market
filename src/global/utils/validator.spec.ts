import { isValidEmail } from "./validator";

describe('isValidEmail', () => {
    it('should return true for valid emails', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('test123@example.co.uk')).toBe(true);
      expect(isValidEmail('test+email@example.com')).toBe(true);
    });
  
    it('should return false for invalid emails', () => {
      expect(isValidEmail('example.com')).toBe(false);
      expect(isValidEmail('test@example')).toBe(false);
      expect(isValidEmail('test@.com')).toBe(false);
      expect(isValidEmail('test @example.com')).toBe(false);
    });
  });