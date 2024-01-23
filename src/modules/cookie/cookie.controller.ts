import { Controller, Get, Req, Request, Response } from '@nestjs/common';

@Controller('cookie')
export class CookieController {
  constructor() {}

    @Get('write')
    writeInCookie(@Response() response): any {
        response.cookie('token', 'asdasdasd');
        return response.send(JSON.stringify({'response': 'Запись в куки успешно произведена'}));
    }

    @Get('read')
    readFromCookie(@Request() request): any {
        return request.cookies;
    }
}