import Bifunctor from './Bifunctor';
import { Func } from '../common/index';

class Either<A, C> extends Bifunctor<A, C> {
  constructor(a: A, c: C) {
    super(a, c);
  }

  bifmap<B, D>(f: Func<A, B>, g: Func<C, D>): Either<B, D> {
    return new Either(f(this.a), g(this.c));
  }
}

export default Either;
