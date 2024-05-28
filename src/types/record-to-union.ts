export type RecordToUnion<T> = {
  [P in keyof T]: {
    next: P;
    continue: boolean;
    state: T[P];
  };
}[keyof T];
