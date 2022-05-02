class CalcController {
    constructor() {
        this._locale = "pt-BR";
        this._displayCalcEl = document.querySelector("#display");
        this._timeEl = document.querySelector("#hora");
        this._dateEl = document.querySelector("#data");
        this._currentdate;
        this.initialize();
        this.initializeButtonsEvents();
    }

    initialize() {

        this.setDisplayDateTime();

        setInterval(() => {

            this.setDisplayDateTime();

        }, 1000);
    }

    addEventListenerAll(element, events, func){
        events.split(' ').forEach(event => {
            element.addEventListener(event, func, false);
        });
    }

    initializeButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn,'click drag', e=>{
                console.log(btn.className.baseVal.replace("btn-", ""));
            });

            this.addEventListenerAll(btn ,'mouseover mouseup mousedown', e=>{
                btn.style.cursor = "pointer";
            });
        });
    }

    setDisplayDateTime() {
        this.displayDate = this.currentdate.toLocaleDateString(this._locale, {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });

        this.displayTime = this.currentdate.toLocaleTimeString(this._locale);
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    set displayTime(time) {
        this._timeEl.innerHTML = time;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    set displayDate(date) {
        this._dateEl.innerHTML = date;
    }

    get currentdate() {
        return new Date();
    }

    set currentdate(date) {
        this._currentdate = date;
    }
}