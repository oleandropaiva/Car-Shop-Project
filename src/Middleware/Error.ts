import { NextFunction, Request, Response } from 'express';

class ErrorMiddleware {
  public static async errorMid(err: Error, _req: Request, res: Response, next: NextFunction) {
    if (res.headersSent) {
      return next(err);
    }
  }

  public static async notFound(_req: Request, res: Response, _next: NextFunction) {
    res.status(404).send('Sorry cant find that!');
  }
}

export default ErrorMiddleware;