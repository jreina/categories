type Func<A, B> = (x: A) => B;
export default interface IBifunctor<A, C> {
  bifmap<B, D>(f1: Func<A, B>, f2: Func<C, D>): IBifunctor<B, D>;
}
