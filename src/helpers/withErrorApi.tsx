import { useState } from "react";

export const withErrorApi = (View: any) => {
  return (props: any) => {
    const [errorApi, setErrorApi] = useState(false);

    return (
      <>
        {errorApi ? (
          <h2>Error</h2>
        ) : (
          <View setErrorApi={setErrorApi} {...props} />
        )}
      </>
    );
  };
};
