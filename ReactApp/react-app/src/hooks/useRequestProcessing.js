import { useEffect, useState } from 'react';

const defaultProcessingSettings = {
  dependencies: [],
  initResultValue: undefined
}

const useRequestProcessing = (
  requestFunc,
  { dependencies = [], initResultValue = undefined } = defaultProcessingSettings) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(initResultValue);
  const [isSuccess, setIsSuccess] = useState();

  useEffect(() => {
    async function processRequest() {
      setIsLoading(true);
      try {

        const response = await requestFunc();

        setIsSuccess(true);
        setResult(response);
      } catch (error) {
        debugger;
        setError(error.message)
        setIsSuccess(false);
      }
      setIsLoading(false);
    }

    processRequest();

    return () => {

    }
  }, [requestFunc, ...dependencies]);

  return { isLoading, error, isSuccess, result, setResult }
}

export default useRequestProcessing;