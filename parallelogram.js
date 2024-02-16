

  function para(){


    const paralength = document.getElementById('parabase');

    const paratext = paralength.value;

    const parabase = parseFloat(paratext);

    console.log(parabase);

    //width 

    const parawidth = document.getElementById('paraheight')

    const paraWtext = parawidth.value

    const paraWbase = parseFloat(paraWtext);

    console.log(paraWbase);

    //calculate

    const area = 0.5 * parabase * paraWbase;

    console.log(area);


    //area

    const paraarea = document.getElementById('paraarea');

    paraarea.innerText = area;





  }