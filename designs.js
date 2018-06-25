// Select color input
const colorPicker = $('#colorPicker')
// select the canvas
const canvas = $('#pixelCanvas')

// Select size input
const gridHeight = $('#inputHeight').val()
const gridWidth = $('#inputWidth').val()
// When size is submitted by the user, call makeGrid()
const sizePicker = $('#sizePicker').submit(function (evt){
    evt.preventDefault(); 
    console.log(gridHeight , gridWidth , colorPicker , canvas)
    makeGrid(gridHeight , gridWidth , colorPicker , canvas);
})

function makeGrid(gridHeight , gridWidth , colorPicker , canvas) {

// Your code goes here!
// first we start with the gridHeight loop so we have the height then inside that loop we shall create the width loop 
    for( let j = 0 ; j < gridHeight; j++){
        let tableRows = document.createElement('tr')
        canvas.append(tableRows);
        // now doing the width loop 
        for(let k = 1; k <= gridWidth ; k++){
            let tableColums = document.createElement('td');
            tableRows.append(tableColums)
        }        
    }

    canvas.on('click' , 'td' , function(){
        let pickedColor = colorPicker.val();
        $(this).css('backgroundColor' , pickedColor);
    })

    const colorReset = $('td').addClass('default');
    $('.default').dblclick(function(){
        $(colorReset).css('backgroundColor' , '#fff')
    })
    
   return

}

