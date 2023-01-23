import { ApolloSandbox } from "@apollo/sandbox/react";
import { Layout } from "../components";
export default function EmbeddedSandbox() {
  return (
    <Layout>
      <ApolloSandbox
        initialEndpoint="http://localhost:4000/"
        includeCookies={false}
        style={{ height: 800 }}
      />
    </Layout>
  );
}
