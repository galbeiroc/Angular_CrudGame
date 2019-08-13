import { Request, Response } from 'express';

import pool from '../database';

class GamesController {
    public async list(req: Request, res: Response){
        //pool.query('DESCRIBE games');
        //res.json({text: 'List games'});
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }

    public async getOne(req: Request, res: Response):Promise<any> {
        //res.json({text:'This is game ' + req.params.id});
        const { id } = req.params;
        const game =  await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        if (game.length > 0) {
            return res.json(game[0]);
        }
        //console.log(game);
        //res.json({text: 'Game found'})
        res.status(404).json({text:'The game doesnt Exist'});
        
    }

    public async create (req: Request, res: Response): Promise<void> {
        //console.log(req.body);
        await pool.query('INSERT INTO games set ?', [req.body]);
        res.json({message: 'Game Saved'});        
    }

    public async update (req: Request, res: Response) {
        //res.json({text: 'Updating a game '+ req.params.id});
        const { id } = req.params;
        await pool.query('UPDATE games set ? Where id=?', [req.body, id]);
        res.json({message:'Game was updated'});
    }

    public async delete (req: Request, res: Response) {
        //res.json({text: 'Deleting a game '+ req.params.id});
        const {id} = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({message: 'The game was deleted'});
    }

}

export const gameController = new GamesController();