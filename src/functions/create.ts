import { StepFunction } from "../types/step-function";

export const create = <
  StepEnum extends string,
  Context,
  StepState extends {
    [K in StepEnum]: unknown;
  },
  FinalState,
>(schema: {
  [Current in StepEnum]: StepFunction<Current, Context, FinalState, StepState>;
}): {
  [Current in StepEnum]: StepFunction<Current, Context, FinalState, StepState>;
} => schema;
