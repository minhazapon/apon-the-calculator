

   function triangle(){

    //   length

    const trilength = document.getElementById('triangelbase');

    const tritext = trilength.value;

    const tribase = parseFloat(tritext);
    
    console.log(tribase);


    //width


    const triwidth = document.getElementById('triangelheight');

    const triWtext = triwidth.value;

    const triWbase = parseFloat(triWtext);

    console.log(triWbase);


    //calculate 


    const area = 0.5 * tribase * tritext;

    console.log(area);

    //area

    const triarea = document.getElementById('triangelarea')

    triarea.innerText = area;



   }