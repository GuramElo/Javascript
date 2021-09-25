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

   

    function onReady(){
		console.log('Coffee is ready');
    };

	this.run = function() {
		setTimeout(()=>{onReady()}, getTimeToBoil());
	};
}
var coffeeMachine = new CoffeeMachine(20000, 500);
coffeeMachine.setWaterAmount(3);
coffeeMachine.setOnReady(function(){console.log("0000");});//before
coffeeMachine.run();
coffeeMachine.setOnReady(function(){console.log("1111");});//after by this time, it's still running

