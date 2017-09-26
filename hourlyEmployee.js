import Employee from './employee';

export default class HourlyEmployee extends Employee{
    constructor(name, department, payRate, noOfHours){
        super(name, department, payRate);
        this._noOfHours = noOfHours;
    }

    set noOfHours(value) {
        this._noOfHours = value;
    }

    get noOfHours() {
        return this._noOfHours;
    }
 
    get pay(){
        return (this.payRate * this.noOfHours);
    }
}