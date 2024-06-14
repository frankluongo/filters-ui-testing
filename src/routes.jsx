import { App } from "./App";
import { RootLayout } from "./routes/RootLayout";
import { DelayedFilter } from "./routes/DelayedFilter";
import { DisabledFilter } from "./routes/DisabledFilter";

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
        path: "/disabled-filters",
        element: <DisabledFilter />,
      },
    ],
  },
];
