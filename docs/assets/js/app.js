function start () {
    const innerContainer = document.querySelector('.inner-container');
    const numbers = document.querySelectorAll('li');
    const selection = document.createElement('section');
    const submitted = document.querySelector('.submitted');
    const button = document.querySelector('button');
    const tyPara = document.createElement('div');
    const fragment = document.createDocumentFragment();
    
    tyPara.classList.add('ty-para')
    tyPara.innerHTML= 
    "<h1>Thank you!</h1><p>We appreciate you taking the time to give a rating. If you ever need more support,don\’t hesitate to get in touch!</p>";
    
    selection.classList.add('selection')
    
    numbers.forEach(number => {
        number.addEventListener('click', ()=> {
            numbers.forEach( number => {
                number.classList.remove('selected');
            });
            number.classList.add('selected');
            const attr = number.getAttribute('data-num');
            selection.innerHTML = `You selected ${attr} out of 5`; 
        });
    });
    fragment.appendChild(selection);
    fragment.appendChild(tyPara);
    submitted.appendChild(fragment);

    button.addEventListener('click', ()=> {
        submitted.classList.remove('inactive');
        innerContainer.classList.add('inactive');
    });

    
}    
document.addEventListener('DOMContentLoaded',start);
    