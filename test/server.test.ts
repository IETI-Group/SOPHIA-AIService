import request from 'supertest';
import { describe, expect, it, vi } from 'vitest';
import app from '../src/app.js';

let flag = false;
vi.mock('../src/utils/logger.js', () => {
  return {
    logger: {
      info: vi.fn(() => {
        if (flag) throw new Error('Logger error');
      }),
      error: vi.fn(),
    },
  };
});

describe('SOPHIA AI Service API', () => {
  describe('GET /', () => {
    it('should return welcome message', async () => {
      const response = await request(app).get('/').expect(200);

      expect(response.body).toMatchObject({
        success: true,
        message: 'Welcome to SOPHIA AI Service API',
        endpoints: {
          health: '/health',
        },
      });
      expect(response.body.timestamp).toBeDefined();
    });
  });

  describe('GET /health', () => {
    it('should return health status', async () => {
      const response = await request(app).get('/health').expect(200);

      expect(response.body).toMatchObject({
        success: true,
        message: 'SOPHIA AI Service is running successfully',
        service: 'sophia-ai-service',
      });

      expect(response.body.timestamp).toBeDefined();
      expect(response.body.environment).toBeDefined();
      expect(response.body.uptime).toBeDefined();
      expect(response.body.memory).toBeDefined();
      expect(response.body.memory.used).toBeTypeOf('number');
      expect(response.body.memory.total).toBeTypeOf('number');
    });
  });

  describe('GET /nonexistent', () => {
    it('should return 404 for nonexistent routes', async () => {
      const response = await request(app).get('/nonexistent').expect(404);
      expect(response.body).toMatchObject({
        success: false,
        error: 'Not found - /nonexistent',
      });
    });
  });

  describe('Health check error handling', () => {
    it('should handle errors in health check', async () => {
      flag = true; // Activate error throwing in logger mock
      const response = await request(app).get('/health').expect(500);
      expect(response.body).toMatchObject({
        success: false,
        message: 'Health check failed',
      });
      flag = false;
    });
  });
});
