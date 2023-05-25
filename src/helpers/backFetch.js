
const urlMain = 'https://huella-del-agua-back.onrender.com/api/v1/'

/* 'http://localhost:3000/api/v1/' */
/* 'https://huella-del-agua-back.onrender.com/api/v1/' */

/**
 * Realiza una consulta al servidor utilizando el método y la URL especificados,
 * y opcionalmente envía un cuerpo de datos en formato JSON.
 * @param {string} url - La URL a la que se enviará la consulta.
 * @param {string} method - El método HTTP a utilizar en la consulta (get, post, put o delete).
 * @param {Object} [body] - El cuerpo de datos a enviar en formato JSON (opcional, solo para post y put).
 * @returns {Promise<Response>} Una promesa que se resuelve en la respuesta del servidor.
 */
export const consulta = async(url,method,body) => {

    let options={}
    if(method=='post' || method=='put'){

       const data={...body};
         options={
            method:method,
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        }
    }
    if(method=='delete'){
        const data={...body};
         options={
            method:method,
            body:JSON.stringify(data),
            headers:{
                'Content-type':'application/json'
            }
        }
    }
    if(method=='get'){
        options={
            method: method,
        }
    }
console.log(`${urlMain}${url}`)
      return await fetch(`${urlMain}${url}`,options);
}