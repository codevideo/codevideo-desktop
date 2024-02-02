import { useEffect, useState } from "react";

export const useCheckIfCommandInstalledOnSystem = (command: string, delay: number) => {
  const [isInstalled, setIsInstalled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const checkIfCommandInstalledOnSystem = async () => {
      setIsLoading(true);
      try {
        // simualte the check by using a setTimeout
        const exists = await new Promise((resolve) => {
          setTimeout(() => {
            resolve(true);
          }, delay);
        })
        setIsInstalled(exists ? true : false);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    checkIfCommandInstalledOnSystem();
  }, []);
  return { isInstalled, isLoading, isError };
};
