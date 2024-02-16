

  function  ellipse(){

     const elllength = document.getElementById('ellipselbase');

     const elltext = elllength.value;

     const ellbase = parseFloat(elltext);

     console.log(ellbase);


     //width


     const ellwidth = document.getElementById('ellipseheight');

     const ellWtext = ellwidth.value;

     const ellWbase = parseFloat(ellWtext);

     console.log(ellWbase);


     //calculate 


     const area = 0.5 * ellbase * ellWbase;

     console.log(area);

     //area


     const ellarea = document.getElementById('ellipsearea')

     ellarea.innerText = area;


  }