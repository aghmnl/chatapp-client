import React from "react";
import { AuthNavigation } from "./stacks";
import { AppNavigation } from "../navigations";

export function HandlerNavigation() {
  const user = "agus";

  return user ? <AppNavigation /> : <AuthNavigation />;
}
