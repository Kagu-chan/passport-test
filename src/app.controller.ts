import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';
import { RolesGuard } from './roles/roles.guard';

@Controller()
export class AppController {
  @UseGuards(LocalAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
