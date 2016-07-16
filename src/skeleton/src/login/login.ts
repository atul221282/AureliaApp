import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

@autoinject()
export class Login {

    name: string;
    password: string;
    httpClient: HttpClient;

    constructor(private _httpClient: HttpClient) {
        this.httpClient = _httpClient;
        this.name = "atul221282@gmail.com";
        this.password = "123456";
    }


}