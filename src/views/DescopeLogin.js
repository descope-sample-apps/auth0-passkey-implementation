import { Descope } from "@descope/react-sdk";

export const DescopeLogin = () => {
  return (
    <Descope
      flowId="sign-up-or-in"
      onSuccess={(e) => console.log(e.detail.user)}
      onError={(e) => console.log("Could not log in!")}
      theme="light"
    />
  );
};

export default DescopeLogin;
