import { Func } from '../common/index';
export default interface IFunctor<A> {
  fmap<B>(xform: Func<A, B>): IFunctor<B>;
}
