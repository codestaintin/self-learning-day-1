import Employee from './employee';

export default class MonthlyEmployee extends Employee{
    constructor(name, department, payRate, noOfDays){
        super(name, department, payRate);
        this._noOfDays = noOfDays;
    }

    set noOfDays(value) {
        this._noOfDays = value;
    }

    get noOfDays() {
        return this._noOfDays;
    }

    get pay(){
        return (this.payRate * this.noOfDays);
    }

}