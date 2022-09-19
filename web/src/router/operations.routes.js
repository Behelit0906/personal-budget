import { Layout, List } from '../views/operations';

export default {
  path: '/operations',
  component: Layout,
  children: [{ path: '', component: List }],
};
