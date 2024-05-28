import { StepInput } from "./step-input";
import { StepResult } from "./step-result";

export type StepEffect<
  StepEnum extends string,
  Context,
  Input,
  FinalState,
  StepState extends {
    [K in StepEnum]: unknown;
  },
> = (
  props: StepInput<Input, Context>,
) => Promise<StepResult<StepEnum, FinalState, StepState>>;
