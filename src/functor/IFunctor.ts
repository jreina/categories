import { Func } from '../common';
export default interface IFunctor<A> {
  fmap<B>(xform: Func<A, B>): IFunctor<B>;
}
