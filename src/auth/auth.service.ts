import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private jwtService: JwtService) { }
    // Validação simples de credenciais e geração do token JWT
    async login(username: string, password: string) {

        if (username !== 'admin' || password !== '123456') {
            throw new Error('Credenciais inválidas');
        }

        const payload = { username };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}