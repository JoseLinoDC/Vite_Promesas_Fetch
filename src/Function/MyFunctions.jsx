function MyFunctions(){
    console.log('My function - My Function - Programas de funciones')

    function fcnSumarUno(numero,fcnResultadoCallback){
        setTimeout(() => {
            fcnResultadoCallback(numero + 1);
        }, 3000);

    //   return numero + 1;
    };
    // console.log(funcionSumarUno(5));

    fcnSumarUno(5,function(resultadoNuevo){
        // console.log("Resultado: "+resultadoNuevo)
        console.log('Resultado 1: '+ resultadoNuevo)
        fcnSumarUno(resultadoNuevo,function(nuevoValor){
            console.log('Resultado 2: '+nuevoValor)
            }
        );    
    }
    );

    return(
    <>
        <div>
            <h1>My Function - Programas de funciones</h1>
        </div>
    </>
    );
};

export default MyFunctions;