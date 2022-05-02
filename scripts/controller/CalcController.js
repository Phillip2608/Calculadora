class CalcController {
    constructor() {
        this._operation = [];
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

    addOperation(value){
        this._operation.push(value);
    }

    clearAll(){
        this._operation = [];
    }

    clearEntry(){
        this._operation.pop();
    }

    setError(){
        this.displayCalc = "Error";
    }

    execBtn(value){
        switch(value){
            case 'ac':
                this.clearAll();
            break;
            case 'ce':
                this.clearEntry();
            break;
            case 'soma':
                this.soma();
            break;
            case 'subtracao':
                this.clearAll();
            break;
            case 'divisao':
                this.clearAll();
            break;
            case 'multiplicacao':
                this.clearAll();
            break;
            case 'porcento':
                this.clearAll();
            break;
            case 'igual':
                this.clearAll();
            break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;
            default:
                this.setError();
            break;
        }
    }

    initializeButtonsEvents(){
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{
            this.addEventListenerAll(btn,'click drag', e=>{
                let textBtn = btn.className.baseVal.replace("btn-", "");
                this.execBtn(textBtn);
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