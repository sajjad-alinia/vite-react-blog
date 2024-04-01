import { ReactNode, Suspense } from "react";
import { SkeletonTheme } from "react-loading-skeleton";

function App({ children }: { children: ReactNode }) {
  return (
    <SkeletonTheme>
      <Suspense fallback="...is loading">{children}</Suspense>
    </SkeletonTheme>
  );
}

export default App;
