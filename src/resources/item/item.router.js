import { Router } from 'express';

const router = Router();

const controller = (req, res) => {
  res.send({ message: 'Controller says Hello' });
};
// api/item
router
  .route('/')
  .get(controller)
  .post(controller);

// api/item/id
router
  .route('/:id')
  .get(controller)
  .put(controller)
  .post(controller)
  .delete(controller);

export default router;
