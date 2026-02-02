/**
 * This file is the entry point for the React app, it sets up the root
 * element and renders the App component to the DOM.
 *
 * It is included in `src/index.html`.
 */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { ThemeProvider } from "next-themes";
import "./index.css"
import * as TanstackQuery from "./integrations/tanstack-query/root-provider";
import HistoryPage from "./app/history";
import SettingsLayout from "./app/settings/settingsLayout";
import APIKeysPanel from "./app/settings/api-keys";
import StoragePanel from "./app/settings/storage";
import AppearancePanel from "./app/settings/appearance";
import LanguageRegionPanel from "./app/settings/language";
import ConnectedAccountsPanel from "./app/settings/connected-accounts";

const elem = document.getElementById("root")!;
const { queryClient } = TanstackQuery.getContext()
const app = (
    <StrictMode>
        <Toaster position="top-center" />
        <TanstackQuery.Provider queryClient={queryClient}>
            <BrowserRouter>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                >
                    <Routes>
                        <Route path="/" index element={<App />} />
                        <Route path="/history" element={<HistoryPage />} />
                        <Route path="/settings" element={<SettingsLayout />}>
                            <Route index element={<APIKeysPanel />} />
                            <Route path="api-keys" element={<APIKeysPanel />} />
                            <Route path="storage" element={<StoragePanel />} />
                            <Route path="appearance" element={<AppearancePanel />} />
                            <Route path="language" element={<LanguageRegionPanel />} />
                            <Route path="connected-accounts" element={<ConnectedAccountsPanel />} />
                        </Route>
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </TanstackQuery.Provider>
    </StrictMode>
);

if (import.meta.hot) {
    // With hot module reloading, `import.meta.hot.data` is persisted.
    const root = (import.meta.hot.data.root ??= createRoot(elem));
    root.render(app);
} else {
    // The hot module reloading API is not available in production.
    createRoot(elem).render(app);
}
