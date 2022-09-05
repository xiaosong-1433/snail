import { defineConfig } from 'umi';
import {routes} from './config/route';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  fastRefresh: {},
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: '后台管理系统',
    locale: true,
    logo: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3864029271,2976069472&fm=26&gp=0.jpg',
    layout: 'side',
  },
  dva: {
    immer: true,
    hmr: true,
  },
});
