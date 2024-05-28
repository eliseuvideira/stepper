import { StepFunction } from "./step-function";

export type StepSchema<
  StepEnum extends string,
  Context,
  FinalState,
  StepState extends {
    [K in StepEnum]: unknown;
  },
> = {
  [Current in StepEnum]: StepFunction<Current, Context, FinalState, StepState>;
};
