import { ReactNode } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

function App({ children }: { children: ReactNode }) {
  return <SkeletonTheme>{children}</SkeletonTheme>;
}

export default App;
