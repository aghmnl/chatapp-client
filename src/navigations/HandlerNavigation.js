import React from "react";
import { AuthNavigation } from "./stacks";
import { AppNavigation } from "../navigations";

export function HandlerNavigation() {
  const user = null;

  return user ? <AppNavigation /> : <AuthNavigation />;
}
