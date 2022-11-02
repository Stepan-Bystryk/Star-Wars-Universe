import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";

export const withErrorApi = (View: any) => {
  return (props: any) => {
    const [errorApi, setErrorApi] = useState(false);

    return (
      <>
        {errorApi ? (
          <ErrorMessage />
        ) : (
          <View setErrorApi={setErrorApi} {...props} />
        )}
      </>
    );
  };
};
