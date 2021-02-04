export const STEP_INCREMENT = "STEP_INCREMENT";
export const STEP_DECCREMENT = "STEP_DECCREMENT";
export const STEP_RESET = "STEP_RESET";

export const handleNext = () => ({
   type: STEP_INCREMENT,
});

export const handleBack = () => ({
   type: STEP_DECCREMENT,
});

export const handleReset = () => ({
   type: STEP_RESET,
});