import { Controller, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Application } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('signup')
  signup(): string {
    return 'hello';
  }
  @Get('signin')
  signin() {
    return {
      name: 'kushal',
      age: 20,
    };
  }
}
