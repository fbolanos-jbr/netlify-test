import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Login from "./pages/Login/Login";
import Menu from "./components/menu/menu";
import MainPage from "./pages/MainPage/MainPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { PrivateRoute } from "./hooks";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.scss";
/* Theme layout */
import "./theme/layout.scss";

setupIonicReact();
const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <IonApp>
        <IonReactRouter>
          <Menu/>
          <IonSplitPane contentId="main">
            <IonRouterOutlet id="main">
              <Route exact path="/login">
                <Login />
              </Route>
              <PrivateRoute exact path="/mainPage" component={MainPage}>
              </PrivateRoute>
              <Route exact path="/">
                <Redirect to="/login" />
              </Route>
            </IonRouterOutlet>
          </IonSplitPane>
        </IonReactRouter>
      </IonApp>
    </QueryClientProvider>
  );
};

export default App;
