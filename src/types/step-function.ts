import { RecordToUnion } from "./record-to-union";
import { StepInput } from "./step-input";

export type StepFunction<
  Step extends string,
  Context,
  FinalState,
  StepState extends {
    [K in Step]: unknown;
  },
> = (props: StepInput<StepState[Step], Context>) => Promise<
  | RecordToUnion<StepState>
  | {
      next: null;
      state: FinalState;
    }
>;
