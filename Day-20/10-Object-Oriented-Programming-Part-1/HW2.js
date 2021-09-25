function CoffeeMachine(power, capacity) {
	var waterAmount = 0;
	var WATER_HEAT_CAPACITY = 4200;
	
    function getTimeToBoil() {
		return waterAmount * WATER_HEAT_CAPACITY * 80 / power;
    };
	
    this.setWaterAmount = function(amount) {
		if (amount < 0) {
			throw new Error("Value has to be positive");
		}
		if (amount > capacity) {
			throw new Error("You can't put more water, than " + capacity);
		}
		waterAmount = amount;
	};
	
   this.setOnReady= (cbb) =>{onReady=cbb; };


var tester=true;
   this.isRunning=()=>{
console.log(tester);


   };   

    function onReady(){
		console.log('Coffee is ready');
    };

	this.run = function() {
		setTimeout(()=>{tester=false;onReady()}, getTimeToBoil());
	};
    

}


var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(3);
coffeeMachine.setOnReady(function(){console.log("0000");});//before
coffeeMachine.run();
coffeeMachine.isRunning();//it's still running so true true
coffeeMachine.setOnReady(function(){console.log("1111");});//after
coffeeMachine.isRunning();//it's still running so true true
setTimeout(()=>{coffeeMachine.isRunning()},1000);/*this will return false 
after 1 second if process is over by then 
in this example 1 second is enough, it's false
*/
