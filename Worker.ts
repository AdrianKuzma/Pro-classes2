export class Worker{
    name:String
    surname:String 
    day:number
    month:number
    year:number
    job:String
    salary:String

    constructor (name:String, surname:String ,day:number,month:number,year:number) {
        this.name = name;
        this.surname = surname;
        this.day = day;
        this.month = month;
        this.year = year;
    }

    setSalary(salary:String) {
        this.salary = salary
    }

    setJob(job:String) {
        this.job = job
    }

}