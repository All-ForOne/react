import withSplitting from '../withSplitting';

export { default as Posts } from './Posts';
export { default as Post } from './Post';

export const Home = withSplitting(() => import('./Home'));
export const Calendar = withSplitting(() => import('./Calendar'));
export const SignIn = withSplitting(() => import('./SignIn'));
export const AuthResult = withSplitting(() => import('./AuthResult'));
export const Profile = withSplitting(() => import('./Profile'));
export const SignUp = withSplitting(() => import('./SignUp'));
export const Contents = withSplitting(() => import('./Contents'));
export const Repertoire = withSplitting(() => import('./Repertoire'));

