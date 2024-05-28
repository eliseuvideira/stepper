export type StepResult<
  StepEnum extends string,
  FinalState,
  StepState extends {
    [K in StepEnum]: unknown;
  },
> = {
  next: StepEnum;
  state: StepState[StepEnum] | FinalState;
};
