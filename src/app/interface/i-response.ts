import { CodeStatusHttp } from '../enum/code-status-http.enum';


export interface IResponse {
  codeStatus: CodeStatusHttp;
  message: string;
  data: any;
}
