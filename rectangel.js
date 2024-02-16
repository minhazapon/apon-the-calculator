

 function rectangel(){
       
    const rectangellength = document.getElementById('recbase');

    const rectext = rectangellength.value;

    const recbase = parseFloat(rectext);

    console.log(recbase);

    //width 

    const recwidth = document.getElementById('recheight');

    const recWtext = recwidth.value;

    const recWbase = parseFloat(recWtext);

    console.log(recWbase);

    //calculate

    const area = 0.5 * recbase * recWbase;

    console.log(area);


    //area 

    const recarea = document.getElementById('recarea');

    recarea.innerText = area;
        


}