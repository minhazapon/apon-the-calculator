

     function rhombus(){

         const rholength = document.getElementById('rhobase');

         const rhotext = rholength.value;

         const rhobase = parseFloat(rhotext);

         console.log(rhobase);


        //  width
         
        const rhowidth = document.getElementById('rhoheight');

        const rhoWtext = rhowidth.value;

        const rhoWbase = parseFloat(rhoWtext);

        console.log(rhoWbase);

        //calculate

        const area = 0.5 *  rhobase * rhoWbase;

        console.log(area);


        //area 

        const rhombusarea = document.getElementById('rhoarea');

        rhombusarea.innerText = area;







     }