import { Injectable } from '@nestjs/common';

interface Person {
  name: string;
  age: number;
}

@Injectable()
export class AppService {
  getHello(): Person {
    return {
      name: 'dao2',
      age: 13,
    };
  }
}
