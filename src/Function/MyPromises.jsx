function MyPromises(){

    console.log("Hola Mundo");

    function fcnSumarUno( numero ){
        var promesa = new Promise(function(resolve, reject){
            if( numero >= 7){
                reject("El número ya es muy alto");
                return;
            }
            setTimeout(function(){
               resolve( numero + 1 );
                }, 800);
        });
        return promesa;
    };


    // fcnSumarUno(5).then(function(nuevoNumero){
    //     console.log('Resultado: '+nuevoNumero)
    // });
    

    // fcnSumarUno(5).then( nuevoNumero =>{
    //     console.log('Resultado: ', nuevoNumero);
    //     return fcnSumarUno(nuevoNumero);
    // }).then(nuevoNumero =>{
    //     console.log('Resultado: ', nuevoNumero);
    //     return fcnSumarUno(nuevoNumero);
    // }).then(nuevoNumero =>{
    //     console.log('Resultado: ', nuevoNumero);
    // });

    fcnSumarUno(6)
    .then(fcnSumarUno)
    .then(fcnSumarUno)
    .then(nuevoNumero =>{
        console.log("Resultado", nuevoNumero);
    }).catch(err =>{
        console.error("Error en la promesa : ", err);
    });
    
    return(
        <>
            <div>
                <h1>My Function - Programas de funciones</h1>
            </div>
        </>
    );

};

export default MyPromises;