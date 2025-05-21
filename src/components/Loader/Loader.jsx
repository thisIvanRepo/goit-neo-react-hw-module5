import React from "react";
import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={{ margin: "0 auto", width: "fit-content", padding: "20px" }}>
      <SyncLoader
        color="#dac6c6"
        loading
        margin={10}
        size={13}
        speedMultiplier={1.3}
      />
    </div>
  );
};

export default Loader;
