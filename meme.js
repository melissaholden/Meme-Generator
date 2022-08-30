let form = document.querySelector ('.form');
let result = document.querySelector ('.result');

form.addEventListener ('submit',function(e){
    e.preventDefault();
    let meme = document.createElement('div');
    let val = document.querySelector ('#image').value;
    let src = '+val+'+'.png';
    let image = document.createElement('img');
    image ['src'] = val;

    let topText = document.createElement('div');
    let bottomText = document.createElement('div');

    topText.classList.add('topText');
    topText.innerText = document.querySelector ('#toptext').value; 

    bottomText.classList.add('bottomText');
    bottomText.innerText = document.querySelector ('#bottomtext').value; 

    let removeButtons = document.createElement('button');
    removeButtons.innerText = 'THIS SUCKS - DELETE!';
    result.addEventListener('click' ,function(e){
        console.log(e.target);
        e.target.parentElement.remove();
});
       
    meme.classList.add('meme');
    meme.append(topText);
    meme.append(bottomText);
    meme.append(image);
    meme.append(removeButtons);

result.append(meme);
    form.reset();
 
});

