#Projects related to DOM

##Project link
[Click Here](https://stackblitz.com/edit/dom-project-chaiaurcode-cerbpops?file=index.html)


## Project 1
```Javascript
console.log("Vasu");
const buttons=document.querySelectorAll('.button');
const body=document.querySelector('body');


buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id==='grey'){
      body.style.backgroundColor=e.target.id;
    }
    else if(e.target.id==='white'){
      body.style.backgroundColor=e.target.id;
    }
    else if(e.target.id==='blue'){
      body.style.backgroundColor=e.target.id;
    }
    else{
      body.style.backgroundColor=e.target.id;
    }
  })
}); 
```

##Project2
```Javascript
const form=document.querySelector('form');
//this use case will give you empty
//const height=parseInt(document.querySelector('#height').value)
form.addEventListener('submit',function(e){
  e.preventDefault();
  const height=parseInt(document.querySelector('#height').value);
  const weight=parseInt(document.querySelector('#weight').value);
  const results=document.querySelector('#results');
  const verdict=document.querySelector('#bmi-result');

  if(height==='' || height<0 || isNaN(height)){
    results.innerHTML=`Please give a valid height ${height}`;
  }
  else if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML=`Please give a valid weight ${weight}`;
  }
  else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);

    results.innerHTML=`<span>${bmi}</span>`;
    if(bmi<18.6){
      verdict.innerHTML=`You are Under Weight`;
    }
    else if(bmi>=18.6 && bmi<=24.9){
      verdict.innerHTML=`Your Bmi is in normal range`;
    }
    else{
      verdict.innerHTML=`You are Overweight`;
    }
  }
});

```
