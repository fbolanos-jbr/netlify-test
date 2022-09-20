import {
  peopleSharp,
  calendarNumber,
  chatbubbles,
  informationCircle,
  cloudDownload,
} from "ionicons/icons";
import {
  IonHeader,
  IonToolbar,
  IonContent,
  IonMenu,
  IonItem,
  IonList,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";

import "./menu.scss";
function Menu() {
  return (
    <IonMenu side="start" menuId="first" contentId="main">
      <IonHeader>
        <IonToolbar color="SlaBtnPrimary">
          <IonGrid>
            <IonRow className="ion-justify-content-center">
              <img
                src="assets/icon/avatar.png"
                alt="Logo Asoc."
                className="Avatarimg"
              />
            </IonRow>
            <IonRow className="ion-justify-content-center">
              <h4 className="AvatarName">
                <strong>MenuPrincipal</strong>
              </h4>
              <br />
            </IonRow>
          </IonGrid>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <a href="./grupos">
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonIcon icon={peopleSharp} />
                  </IonCol>
                  <IonCol>
                    <strong>Grupos</strong>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </a>
          <a href="./grupos">
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonIcon icon={calendarNumber} />
                  </IonCol>
                  <IonCol>
                    <strong>Calendario</strong>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </a>
          <a href="./grupos">
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonIcon icon={chatbubbles} />
                  </IonCol>
                  <IonCol>
                    <strong>Foros</strong>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </a>
          <a href="./grupos">
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonIcon icon={informationCircle} />
                  </IonCol>
                  <IonCol>
                    <strong>Manuales</strong>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </a>
          <a href="./grupos">
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol size="2">
                    <IonIcon icon={cloudDownload} />
                  </IonCol>
                  <IonCol>
                    <strong>Media</strong>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>
          </a>
        </IonList>
      </IonContent>
      <a href="./login">
        <IonButton
          className="mt-lg ion-margin-top ion-margin-bottom"
          expand="block"
        >
          <strong>Cerrar Sesión</strong>
        </IonButton>
      </a>
    </IonMenu>
  );
}

export default Menu;
