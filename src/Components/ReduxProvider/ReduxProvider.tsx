"use client";
import client from "@/Server/apolloClient";
import { store } from "@/Store/store";
import { ApolloProvider } from "@apollo/client";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";
export default function ReduxProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <ApolloProvider client={client}>{children}</ApolloProvider>
    </Provider>
  );
}
