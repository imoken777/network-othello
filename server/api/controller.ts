import { defineController } from './$relay';

export default defineController(() => ({
  get: () => ({ status: 200, body: '' }),
  post: () => ({satus: 201, body: ''}),
}));
