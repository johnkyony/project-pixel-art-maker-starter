// Select size input
// When size is submitted by the user, call makeGrid()
const sizePicker = $('#sizePicker').submit(function (evt){
    evt.preventDefault(); 
    // Select color input
    const colorPicker = $('#colorPicker')
    // select the canvas
    const canvas = $('#pixelCanvas')
    // select the gridHeight and gridWeight and grab their values
    const gridHeight = $('#inputHeight').val()
    const gridWidth = $('#inputWeight').val()
    // for debuging purposes 
    // console.log( "gridHeight:"+gridHeight)
    // console.log("gridWidth:"+gridWidth )
    // console.log("colorPicker:"+colorPicker)
    // console.log("canvas"+canvas)

    // calling the function make grid and passing arguements to the functions 
    makeGrid(gridHeight , gridWidth , colorPicker , canvas);
})

function makeGrid(gridHeight , gridWidth , colorPicker , canvas) {

// Your code goes here!
// first we start with the gridHeight loop so we have the height then inside that loop we shall create the width loop 
    for( let j = 0 ; j < gridHeight; j++){
        let tableRows = document.createElement('tr')
        canvas.append(tableRows);
        // now doing the width loop 
        for(let k = 0; k <= gridWidth ; k++){
            let tableColums = document.createElement('td');
            tableRows.append(tableColums)
        }        
    }
    // event listener on the canvas  , this method changes color of the squares to your picked color
    canvas.on('click' , 'td' , function(){
        let pickedColor = colorPicker.val();
        $(this).css('backgroundColor' , pickedColor);
    })

    // event listener on default to double click to return every square back to the default css colour

    const colorReset = $('td').addClass('default');
    $('.default').dblclick(function(){
        $(colorReset).css('backgroundColor' , '#fff')
    })
    
   return

}

