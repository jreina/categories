import { Func } from '../common';
import IFunctor from './IFunctor';

export default class Functor<A> implements IFunctor<A> {
  private _a: A;
  constructor(a: A) {
    this._a = a;
  }
  fmap<B>(xform: Func<A, B>): Functor<B> {
    return new Functor(xform(this._a));
  }
}
