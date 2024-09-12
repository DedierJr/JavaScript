const input = document.querySelector('#addItem')
const items = document.querySelector('#items')

input.addEventListener('keypress', function(e){
	if(e.key === 'Enter'){
		if(!this.value) return
		const value = this.value
		const item = document.createElement('li')
		item.textContent = value
		items.appendChild(item)
		this.value = ''
	}
})