window.onload = function(){

	var n1 = document.getElementById('n1');
	var n2 = document.getElementById('n2');
	var n3 = document.getElementById('n3');
	var n4 = document.getElementById('n4');
	var n5 = document.getElementById('n5');
	var n6 = document.getElementById('n6');
	var n7 = document.getElementById('n7');
	var n8 = document.getElementById('n8');
	var n9 = document.getElementById('n9');
	
	var equals = document.getElementById('equals');
	var clear = document.getElementById('nC');
	var textBox = document.getElementById('numberBox');
	var show = document.getElementById('show');

	function clickZero(){
		textBox.value += "0";	
	}
	function clickOne(){
		textBox.value += "1";	
	}
	function clickTwo(){
		textBox.value += "2";	
	}
	function clickThree(){
		textBox.value += "3";	
	}
	function clickFour(){
		textBox.value += "4";	
	}
	function clickFive(){
		textBox.value += "5";	
	}
	function clickSix(){
		textBox.value += "6";	
	}
	function clickSeven(){
		textBox.value += "7";	
	}
	function clickEight(){
		textBox.value += "8";	
	}
	function clickNine(){
		textBox.value += "9";	
	}

	function clickPlus(){
		
		var a = parseInt(textBox.value);
		resultBox.value = a;
		show.innerHTML = "+";
		textBox.value = null;
		
	}
	function clickMinus(){
		var a = parseInt(textBox.value);
		resultBox.value = a;
		show.innerHTML = "-";
		textBox.value = null;	
	}
	function clickMultiply(){
		var a = parseInt(textBox.value);
		resultBox.value = a;
		show.innerHTML =  "*";
		textBox.value = null;	
	}
	function clickDivide(){
		var a = parseInt(textBox.value);
		resultBox.value = a;
		show.innerHTML = "/";
		textBox.value = null;	
	}

	n1.addEventListener('click', clickOne); 
	n2.addEventListener('click', clickTwo);
	n3.addEventListener('click', clickThree);
	n4.addEventListener('click', clickFour);
	n5.addEventListener('click', clickFive);
	n6.addEventListener('click', clickSix);
	n7.addEventListener('click', clickSeven);
	n8.addEventListener('click', clickEight);
	n9.addEventListener('click', clickNine);
	n0.addEventListener('click', clickZero);
	add.addEventListener('click', clickPlus);
	subtract.addEventListener('click', clickMinus);
	multiply.addEventListener('click', clickMultiply);
	divide.addEventListener('click', clickDivide);


	function calculate(){
		var second = parseInt(textBox.value);
		var	first = parseInt(resultBox.value);
			
			

		if (show.innerHTML == "+"){
		var calculated = second + first;
		}
		if (show.innerHTML == "-"){
		var calculated = first - second;
		}
		if (show.innerHTML == "/"){
		var calculated = first / second;
		}
		if (show.innerHTML == "*"){
		var calculated = second * first;
		}

		resultBox.value = calculated;
	}

	equals.addEventListener('click', calculate);

//------------------------------------------------------------------------------------------------------------------------
	function clearFunction(){
		resultBox.value = null;
		textBox.value = null;
		show.innerHTML = "&nbsp;"
	}	
	clear.addEventListener('click', clearFunction);
//------------------------------------------------------------------------------------------------------------------------





}