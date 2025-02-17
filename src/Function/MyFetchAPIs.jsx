function MyFetchAPIs(){

    function fcnXMLHttpRequest(){
        console.log("!Execute GEt API by XMLHttpRequest");
        var request = new XMLHttpRequest();
        request.open('GET', 'https://reqres.in/api/users', true);
        request.send(null);

        return new Promise(function(resolve,reject){
            
    request.onreadystatechange = function( state ){
        // console.log(request);
        if (request.readyState === 4) {
            //la respuesta obtiene un string.
            var resp = request.response;
            // ahora transformamos la cadena en formato 
            var respObj = JSON.parse(resp);
            // enviamos el resultado a la consola.
            // console.log( respObj );
            // console.log( respObj.page );
            resolve(respObj.data);
                };
        
            };

        });
    
    };

    function fcnFetchRequest() {
        console.log("¡Execute GET API by Fetch!");
        // Función Fetch  
        fetch('https://reqres.in/api/users') 
        .then(resp => resp.json()).then(respObj =>{
            console.log("Response Fetch:", respObj.data);
        });
    };

    fcnXMLHttpRequest()
        .then (response => {
            console.log('Response XMLHttp: ', response);
        });
    
    // request.onreadystatechange = function(  state   ){
    //     console.log(request);
    // };
    
    fcnFetchRequest();
    return(
        <>
            <div>

                <h1>
                        Programa para FETCH APIs
                </h1>

            </div>
        
        
        </>


    );

};


export default MyFetchAPIs;