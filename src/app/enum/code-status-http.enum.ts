export enum CodeStatusHttp {

  OK = 200, // success
  NoContent = 204, // si encontró datos
  Badrequest = 400, // validaciones, campos requeridos
  Unauthorized = 401, // usuario no logueado
  Forbidden = 403, // el usuario no tiene permisos
  Error = 500, // error interno
  NotFound = 404,//No se encuentra servicio
  UnknownError = 0, //Http failure response api
}
