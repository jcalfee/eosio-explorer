import { from } from 'rxjs';
import { ajax } from 'rxjs/ajax';

export default ( apiPath ) => navigator.userAgent !== "ReactSnap"
?
  ajax({
    url :`/api/mongodb/${apiPath}`,
    timeout: 1000,
    responseType: "json"
  })
: //If we are prerending using react snap, return a promise that resolved with a repsonse with { repsonse: undefined}
  from(new Promise((resolve, reject)=>{
    resolve({response: undefined});
  }))
