function MyFetchPost(){

    let usuario ={
        name: "Aitana",
        age: 25    
    };


    fetch('https://reqres.in/', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
                }
            })
            .then(resp => resp.json())
            .then(console.log)
            .catch(error => {
                console.log('Error en la peticion API POST');
                console.log(error);
            });

    return(
        <>
            <div>

                <h1>
                        Programa para FETCH APIs POST
                </h1>

            </div>
        
        
        </>


    );

};


export default MyFetchPost;