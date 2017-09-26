import chai, {expect} from 'chai';
import Employee from "./employee";
import MonthlyEmployee from "./monthlyEmployee";

describe("MonthlyEmployee:", () => {
    const monthlyEmployee = new MonthlyEmployee("Johnson", "Geography", 0.08, 2);
    it("Should be an instance of monthlyEmployee class ", () =>{
      expect(monthlyEmployee).to.be.an.instanceof(MonthlyEmployee);
    });

    it("Should return pay of monthlyEmployee", () =>{
        expect(monthlyEmployee.pay).to.equal(0.16);
      });

    it('Should return number of days worked by MonthlyEmployee', () => {
        expect(monthlyEmployee.noOfDays).to.equal(2)
    });
});