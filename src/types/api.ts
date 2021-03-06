export interface ServerValidationFailedResponse {
  violations: Record<string, string>;
}

export interface ValidationErrorsResponse {
  validationErrors: Record<string, string>;
}
