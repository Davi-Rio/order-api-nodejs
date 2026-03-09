import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {

    @ApiProperty({
        example: 'admin',
        description: 'Usuário para autenticação',
    })
    username: string;

    @ApiProperty({
        example: '123456',
        description: 'Senha do usuário',
    })
    password: string;

}