import chai, {expect} from 'chai';
import Employee from "./employee";


describe("Employee:", () => {
    const employee = new Employee("Johnson", "Geography", 0.08);
    it("Should be an instance Employee class ", () =>{
      expect(employee).to.be.an.instanceof(Employee);
    });
  
    it("Should return name of employee", () =>{
      expect(employee.name).to.equal("Johnson");
    });

    it("Should return department of employee", () =>{
        expect(employee.department).to.equal("Geography");
      });
    
    it("Should return department of employee", () =>{
       expect(employee.payRate).to.equal(0.08);
    });   
});

