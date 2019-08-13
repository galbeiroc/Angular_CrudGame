import { Request, Response } from 'express';

class IndexController {
    public index (req: Request, res: Response) {
        res.send('Controller Index');
    }
}

export const indexController = new IndexController();