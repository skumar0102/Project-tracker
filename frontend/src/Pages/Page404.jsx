import React from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
function Page404() {
  const navigator = useNavigate();
  const handleSubmit = () => {
    navigator("/");
  };
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary" onClick={() => handleSubmit()}>
          Back Home
        </Button>
      }
    />
  );
}

export default Page404;
