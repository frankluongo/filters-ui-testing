import { App } from "./App";
import { RootLayout } from "./routes/RootLayout";
import { DelayedFilter } from "./routes/DelayedFilter";
import { DisabledFilter } from "./routes/DisabledFilter";
import { DelayedResults } from "./routes/DelayedResults";

export const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/delayed-filters",
        element: <DelayedFilter />,
      },
      {
        path: "/delayed-results",
        element: <DelayedResults />,
      },
      {
        path: "/disabled-filters",
        element: <DisabledFilter />,
      },
    ],
  },
];
