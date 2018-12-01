import { Func } from '../common/index';
export default interface IContravariantFunctor<A> {
  contramap<B>(xf: Func<A, B>): IContravariantFunctor<A>;
}
