import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  root(@Res() res: Response) {
    return res.render('index', { message: 'Hello world!!' });
  }

  @Get('modal-direct')
  AssignXDataDirect(@Res() res: Response) {
    return res.render('modal-direct', {
      message: 'Modal Direct Assigment',
      openSate: true,
    });
  }

  @Get('modal-indirect')
  AssignXDataIndirect(@Res() res: Response) {
    return res.render('modal-indirect', {
      message: 'Modal Indirect Assigment',
      openSate: false,
    });
  }

  @Get('modal-helper')
  alpineHelper(@Res() res: Response) {
    return res.render('modal-helper', {});
  }

  @Get('modal-helper-message')
  alpineHelperMessage(@Res() res: Response) {
    return res.render('modal-helper-message', {
      message: 'Modal From Helper',
      openSate: true,
    });
  }

  @Get('layout')
  anotherLayout(@Res() res: Response) {
    return res.render('print', {
      layout: 'layout_other',
      message: 'Hello world!!',
    });
  }

  @Get('array')
  getArray(@Res() res: Response) {
    const contentArray = [
      { message: 'first' },
      { message: 'second' },
      { message: 'third' },
    ];
    return res.render('array', { myArray: contentArray });
  }
}
