import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './login.dto';

import { ApiTags, ApiOperation, ApiBody, ApiResponse } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    
    constructor(private readonly authService: AuthService) { }
    // Endpoint responsável por autenticar o usuário e gerar o token JWT
    @Post('login')
    @ApiOperation({ summary: 'Autenticar usuário e gerar token JWT' })
    @ApiBody({ type: LoginDto })
    @ApiResponse({
        status: 201,
        description: 'Token JWT gerado com sucesso',
        schema: {
            example: {
                access_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
            },
        },
    })
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto.username, loginDto.password);
    }

}