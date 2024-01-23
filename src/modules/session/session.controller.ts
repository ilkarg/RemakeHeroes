import { Controller, Get, Session } from '@nestjs/common';

@Controller('session')
export class SessionController {
  constructor() {}

    @Get('write')
    writeInSession(@Session() session: Record<string, any>): any {
        session['example'] = 'test';
        return JSON.stringify({'response': 'Запись в сессии успешно создана'})
    }

    @Get('read')
    readFromSession(@Session() session: Record<string, any>): any {
        return session;
    }
}