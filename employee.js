export default class Employee{
    constructor(name, department, payRate) {
        this.name = name;
        this.department = department;
        this.payRate = payRate;
    }
    toString(){
        return "Employee name" + this.name +"\n"+
               "Employee Department"+ this.department+"\n"+
               "PayRate" + this.payRate;
    }
}