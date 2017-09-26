import chai, {expect} from 'chai';
import Employee from "./employee";
import HourlyEmployee from "./hourlyEmployee";

describe("HourlyEmployee:", () => {
    const hourlyEmployee = new HourlyEmployee("Johnson", "Geography", 0.08, 20);
    it("Should be an instance of hourlyEmployee class ", () =>{
      expect(hourlyEmployee).to.be.an.instanceof(HourlyEmployee);
    });
  
    it("Should return pay of employee", () =>{
      expect(hourlyEmployee.pay).to.equal(1.6);
    });

    it('Should return number of days worked by MonthlyEmployee', () => {
        expect(hourlyEmployee.noOfHours).to.equal(20)
    });  
});