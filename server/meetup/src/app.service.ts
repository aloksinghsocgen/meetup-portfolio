import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  root(): object {
    return {name:'Hello World!'};
  }
}
