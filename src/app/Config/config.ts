import { AppConfig } from '../../environments/environment';



export class UserCred {
    static clientid: string = AppConfig.client_id;
    static clientsecret: string = AppConfig.client_secret;
    static refreshtoken: string = AppConfig.refresh_token;
    static sheetid: string = AppConfig.sheet_id;
}


