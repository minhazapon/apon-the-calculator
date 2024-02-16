

  function pentagon(){
    

    const penlength = document.getElementById('penbase');

    const pentext = penlength.value;

    const penbase = parseFloat(pentext);

    console.log(penbase);

    //width

    const penwidth = document.getElementById('penheight')

    const penWtext = penwidth.value;

    const penWbase = parseFloat(penWtext);

    console.log(penWbase);

    //calculate

    const area = 0.5 * penbase * penWbase;

    console.log(area);

    //area 

    const penarea = document.getElementById('penarea')

    penarea.innerText = area;





  }