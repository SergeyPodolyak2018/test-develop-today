import { Request, Response } from 'express';
import recipesService from '../services/recipesService';
import MESSAGE from '../helper/messages';

const getAll = async (req: Request, res: Response) => {
  try {
    const params = req.query;
    const recipes = await recipesService.getAll(params);
    const massage = MESSAGE.RECIPES(recipes);
    res.status(massage.status).json(massage.data);
  } catch (err) {
    console.error(err);
    const massage = MESSAGE.ERROR(err);
    res.status(massage.status).json(massage.data);
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const id = res.locals.id;
    const client = await recipesService.getById(id);
    const massage = MESSAGE.RECIPES(client);
    res.status(massage.status).json(massage.data);
  } catch (err) {
    console.error(err);
    const massage = MESSAGE.ERROR(err);
    res.status(massage.status).json(massage.data);
  }
};

export default { getAll, getById };
