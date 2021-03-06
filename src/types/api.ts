export interface ServerValidationFailedResponse {
  violations: Record<string, string>;
}

export interface ServerValidationErrorResponse {
  serverValidationErrors: Record<string, string>;
}
