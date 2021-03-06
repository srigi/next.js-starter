import { useAtom } from 'jotai';
import { useMutation } from 'react-query';
import { UseMutationResult } from 'react-query/types/react/types';

import { ServerValidationFailedResponse } from '../types/api';
import globalUIAtom from '../atoms/globalUi';

const useApiMutation = <TData, TVariables>(
  method: 'post' | 'put',
  endpoint: string,
  onSuccess?: (responsePayload: TData) => void,
): UseMutationResult<TData, Error, TVariables> => {
  const [, setGlobalUiAtom] = useAtom(globalUIAtom);

  return useMutation<TData, Error, TVariables>(async (payload) => {
    try {
      const response = await fetch(`/api${endpoint}`, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        if (response.status === 404 || response.status >= 500) {
          throw new Error(`[${response.status}] ${response.statusText}`);
        }

        const responsePayload = (await response.json()) as ServerValidationFailedResponse;

        return { validationErrors: responsePayload.violations };
      }

      const responsePayload = await response.json();

      if (typeof onSuccess === 'function') {
        return onSuccess(responsePayload);
      }

      return responsePayload;
    } catch (exc) {
      const match = exc.message?.match(/\[(\d+)]/);
      if (match != null) {
        const statusCode = match[1];
        if (statusCode === '404') {
          setGlobalUiAtom((atom) => ({ ...atom, errorToast: 'Server endpoint not found' }));
        } else {
          setGlobalUiAtom((atom) => ({ ...atom, errorToast: 'Communication with server failed!' }));
        }

        throw new Error(exc.message);
      }

      setGlobalUiAtom((atom) => ({ ...atom, errorToast: 'Failed to communicate with the server!' }));
      throw new Error(`[500] ${exc.message}`);
    }
  });
};

export default useApiMutation;
