export class JwtResponse {
    accessToken: string;
    type: string;
    username: string;
    roles: string[];
    success:boolean;
    message:string;
}
