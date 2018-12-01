import { Func } from '../common/index';
import IContravariantFunctor from './IContravariantFunctor';

class Orderable<A> implements IContravariantFunctor<A> {
  private _x: Array<A>;

  constructor(x: Array<A>) {
    this._x = x;
  }

  static of<A>(x: Array<A>) {
    return new Orderable(x);
  }

  contramap<B>(fx: Func<A, B>) {
    const a = this._x.sort((a, b) => {
      const xa = fx(a);
      const xb = fx(b);
      if (xa < xb) return -1;
      else if (xa > xb) return 1;
      else return 0;
    });
    return new Orderable(a);
  }
}

export default Orderable;
