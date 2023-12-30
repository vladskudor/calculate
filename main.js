let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erasebtn');
let clearbtn = document.querySelector('#clear');
let evalute = document.querySelector('evalute');
let realTimeScreenValue = [];
clearbtn.addEventListener('click' , () => {
	realTimeScreenValue = [''];
	answerScreen.textContent = 0;
	currentInput.className = 'currentInput';
	answerScreen.className = 'answerScreen';
	answerScreen.style.color = 'rgba(150, 150, 150, 0.87)';
});
buttons.forEach((btn) => {
	btn.addEventListener('click' , () => {
		if(!btn.id.match('erase')) {
			realTimeScreenValue.push(btn.value);
			currentInput.textContent = realTimeScreenValue.join('');
			if(btn.classList.contains('num_btn')) {
				answerScreen.textContent = eval(realTimeScreenValue.join(''));
			}
		}

		if(btn.id.match('erase')) {
			realTimeScreenValue.pop();
			currentInput.textContent = realTimeScreenValue.join('');
			answerScreen.textContent = eval(realTimeScreenValue.join(''));
		}

		if(btn.id.match('evalute')){
			currentInput.className = 'answerScreen';
			answerScreen.className = 'currentInput';
			answerScreen.style.color = 'white';
		}

		if(typeof eval(realTimeScreenValue.join('')) == 'undefined'){
			answerScreen.textContent = 0;
		}
	})
})
