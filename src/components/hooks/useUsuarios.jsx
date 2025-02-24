import { useEffect, useRef, useState } from 'react';
// import reqRespApi from '../reqResApi.jsx';
import reqRespApi from '../../api/reqRes.jsx';

// Hook personalizado para manejar la lógica de paginación de usuarios
export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const ficRefPage = useRef(1);
  useEffect(() => {
      //FIC: llamar función de carga de usuarios.
      ficFnCargaUsuarios();
  }, []);
  const ficFnCargaUsuarios = async () => {
      const ficResponse = await
      //FIC: llamado de la API
      reqRespApi.get('/users', {
          params: {
              page: ficRefPage.current
          }
      })
      .then(resp => {
          //console.log(resp);
          //console.log(resp.data);
          //console.log(resp.data.data);
          //console.log(resp.data.data[0].first_name);
          //console.log(resp.data.data);
          if (resp.data.data.length > 0) {
              setUsuarios(resp.data.data);
          }
          else {
              alert('No hay mas registros');
          }
      })
      .catch(err => console.log(err))
  }  

  const ficFnPaginaSiguiente = () => {
    ficRefPage.current++;
    ficFnCargaUsuarios(); 
  };

  const ficFnPaginaAnterior = () => {
    if (ficRefPage.current > 1) {
      ficRefPage.current--;
      ficFnCargaUsuarios(); 
    }
  };

  return {
    usuarios,
    ficFnPaginaSiguiente,
    ficFnPaginaAnterior,
    ficRefPage 
  };
};