import './index.css'
import jsLogo from './assets/jslogo.png'

const text = document.createElement('h1')
text.textContent ='I love JavaScript'
document.body.append(text)

const pic = document.createElement('img')
pic.src = 'assets/jslogo.png'
document.body.append(pic)

const array = [1,2,3].map(i => i+10)
console.log(array)
