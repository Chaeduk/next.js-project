import { Store } from "redux";

declare module "../node_modules/next/dist/shared/lib/utils" {
  export interface NextPageContext {
    store: Store<any>;
  }
}
