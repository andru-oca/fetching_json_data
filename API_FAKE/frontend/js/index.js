fetch('../backend/data.json')
.then(res => res.json())
.then(data => {

    let URL_BASE = "backend";


    let header =`     
    <head>
        <link rel="stylesheet" href="frontend/css/index.css">
        <title>index_data</title>
    </head>
`

    let total = '';

 
    for(let item of data.images ){
        console.log(item); 

        let div_img =
            `<div><img src= "${URL_BASE+item.path}" alt = "${ item.nombre }"></div>
            ` + '\n';

        total +=div_img ;
    } ;

   
    document.write(header+total);
    
});
