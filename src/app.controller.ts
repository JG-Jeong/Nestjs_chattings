import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()

  //여기서 index.hbs를 views에서 찾아서 render하라는 뜻임.
  // main.ts에서   app.setBaseViewsDir(join(__dirname, '..', 'views'));를 통해서 views폴도를 가라는 뜻이고.
  @Render('index')
  root() {
    //message를 hbs로 가서 변수를 받아서 랜더링함. hbs는 html과 달라서 변수를 받아 올 수 있음.
    return {
      data: {
        title: 'Chattings',
        copyright: 'Jeong Gil',
      },
    };
  }
}
