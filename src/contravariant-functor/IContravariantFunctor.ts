import { Func } from '../common';
export default interface IContravariantFunctor<A> {
  contramap<B>(xf: Func<A, B>): IContravariantFunctor<A>;
}
