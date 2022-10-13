let headingEls = document.querySelectorAll('.years');


headingEls.forEach(element => {
    element.textContent ='0';
    upDateNUmber();
    function upDateNUmber(){
        let newTextContent = + element.textContent;
        let dataAttribute= element.getAttribute('data-num');
        let averageIncrease = Math.ceil(dataAttribute/15);
        // console.log(typeof(averageIncrease));
        newTextContent = newTextContent+ averageIncrease
            

           
        if(newTextContent < dataAttribute){
            element.textContent = newTextContent;
           setTimeout(() => {
           upDateNUmber()
           }, 70);
        }else{
            element.textContent = dataAttribute;
        }
        
    }
});
// upNum();

// function upNum(){
// // let x =+yearsH2.textContent;
// // x =x+1;
// yearsH2.textContent =+yearsH2.textContent+1;
// setTimeout(() => {
//     if(yearsH2.textContent<15){
//         upNum()
//     }
//     // upNum()
// }, 100);
// }





  

    


