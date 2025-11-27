import { type IRouter, Router } from 'express';
import { getHealth } from '../controllers/index.js';

const router: IRouter = Router();

/**
 * @route   GET /health
 * @desc    Check if the service is running
 * @access  Public
 */
router.get('/', getHealth);

export default router;
