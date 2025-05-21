import { Simple404 } from "@404pagez/react";
import Home from "../HomePage/HomePage";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div style={{ width: "fit-content", margin: "auto" }}>
      <Simple404
        size={20}
        isButton={true}
        onButtonClick={() => navigate("/")}
      />
    </div>
  );
};

export default NotFoundPage;
