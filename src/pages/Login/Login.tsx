import { LOGIN_M } from "../../client/mutations";
import { useHistory } from "react-router-dom";
import { useMutation } from "react-query";
import { useState } from "react";
import "./login.scss";
import {
  IonPage,
  IonContent,
  IonCol,
  IonRow,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonText,
  IonGrid,
  IonAlert,
} from "@ionic/react";

function Login() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorAlert, setShowErrorAlert] = useState(false)

  const loginMutation = useMutation(LOGIN_M, {
    onSuccess: (data: any, varibles, context) => {
      //localStorage.setItem("userId", data.result.userId);
      localStorage.setItem("accessToken", data.data.result.token);
      history.push("/mainPage");
    },
    onError: (error, variables, context) => {
      setShowErrorAlert(true);
      console.error(error);
    },
  });

  const login = () => {
    loginMutation.mutate({ username: username, password: password });
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid className="layout ion-text-center">
          <div className="container ion-margin-top">
            <IonRow className="ion-justify-content-center login-box">
              <IonCol sizeLg="8" sizeXl="6">
                <IonRow>
                  <IonCol></IonCol>
                  <IonCol>
                    <img src="assets/logo/MainLogo1.png" alt="Logo Asoc." />
                  </IonCol>
                  <IonCol></IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonText></IonText>
                    <h1>Inicio de Sesión</h1>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Usuario</IonLabel>
                      <IonInput
                        value={username}
                        placeholder="Ingrese su Usuario"
                        onIonChange={(e) => setUsername(e.detail.value!)}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>
                    <IonItem>
                      <IonLabel position="floating">Contraseña</IonLabel>
                      <IonInput
                      type="password"
                        value={password}
                        placeholder="Ingrese su Contraseña"
                        onIonChange={(e) => setPassword(e.detail.value!)}
                      ></IonInput>
                    </IonItem>
                  </IonCol>
                </IonRow>
                <IonRow className="ion-margin-top ion-justify-content-center">
                  <IonCol sizeLg="8" sizeXl="6">
                    <IonButton expand="block" onClick={login}>
                      Iniciar Sesión
                    </IonButton>
                  </IonCol>
                </IonRow>
                <IonRow className="ion-justify-content-center">
                  <IonCol>
                    <a href="#">Olvide mi contraseña</a>
                  </IonCol>
                </IonRow>
              </IonCol>
            </IonRow>
          </div>
          <IonAlert
        isOpen={showErrorAlert}
        onDidDismiss={() => setShowErrorAlert(false)}
        header="Error"
        subHeader="Credenciales incorrectas"
        message="Por favor revise sus credenciales e intente de nuevo"
        buttons={['OK']}
      />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default Login;
