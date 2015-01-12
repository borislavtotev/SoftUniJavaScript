Date.prototype.timeNow = function () {
     return (this.getHours() +":"+ ((this.getMinutes() < 10)?"0":"") + this.getMinutes());
}

var newDate = new Date();
console.log(newDate.timeNow());