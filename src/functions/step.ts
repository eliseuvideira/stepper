import { StepSchema } from "../types/step-schema";

export const Step =
  <
    StepEnum extends string,
    Context,
    StepState extends {
      [K in StepEnum]: unknown;
    },
    FinalState,
  >() =>
  <T extends StepEnum>(
    _name: T,
    fn: StepSchema<T, Context, FinalState, StepState>[T],
  ): StepSchema<T, Context, FinalState, StepState>[T] =>
    fn;
