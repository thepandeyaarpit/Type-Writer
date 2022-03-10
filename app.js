let textArray = ["Web Developer", "Frontend Developer", "Coder"];
let count=0;
let index = 0;
let currentText='';
let letter='';



(function loop()
{
    if(count===textArray.length)
    {
        count=0;
    }
    currentText=textArray[count];
    letter = currentText.slice(0,++index);
   document.querySelector('.typed_text').textContent=letter;

    if(letter.length===currentText.length)
    {
        count++;
        index=0;
    }
   setTimeout(loop,300)
})();
