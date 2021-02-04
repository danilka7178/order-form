export const STEPPER_NEXT_STEP = "STEPPER_NEXT_STEP";
export const STEPPER_PREV_STEP = "STEPPER_PREV_STEP";
export const STEPPER_RESET_STEP = "STEPPER_RESET_STEP";

export const handleNext = () => ({
   type: STEPPER_NEXT_STEP,
});

export const handleBack = () => ({
   type: STEPPER_PREV_STEP,
});

export const handleReset = () => ({
   type: STEPPER_PREV_STEP,
});