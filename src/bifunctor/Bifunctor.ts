import IBifunctor from './IBifunctor';
import { Func } from '../common';
// @flow

class Bifunctor<A, C> implements IBifunctor<A, C> {
  a: A;
  c: C;
  constructor(a: A, c: C) {
    this.a = a;
    this.c = c;
  }

  bifmap<B, D>(f: Func<A, B>, g: Func<C, D>): Bifunctor<B, D> {
    return new Bifunctor(f(this.a), g(this.c));
  }
}

export default Bifunctor;
