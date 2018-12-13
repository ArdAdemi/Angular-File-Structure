import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class AddHeadersInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jsonReq: HttpRequest<any> = req.clone({
      setHeaders: {'Content-Type': 'application/json', 'Authorization': localStorage.getItem('access_token')}}
      );
    return next.handle(jsonReq);
    console.log(localStorage.getItem('access_token'));
  }

}
