import { Func } from '../common';
export default interface IMonad<A> {
  bind<B>(xform: Func<A, IMonad<B>>): IMonad<B>;
}
