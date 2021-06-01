import withSplitting from '../withSplitting';

export { default as Posts } from './Posts';
export { default as Post } from './Post';

export const Home = withSplitting(() => import('./Home'));
export const About = withSplitting(() => import('./About'));
export const SignIn = withSplitting(() => import('./SignIn'));
export const AuthResult = withSplitting(() => import('./AuthResult'));
export const Profile = withSplitting(() => import('./Profile'));
export const SignUp = withSplitting(() => import('./SignUp'));
