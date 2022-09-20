import CardButton from '../../components/buttons/card-button/card-button';
import Header from '../../components/header/header';
import { useHistory } from 'react-router-dom';
import {
  IonPage,
  IonContent,
  IonCol,
  IonRow,
  IonGrid,
  IonIcon,
} from "@ionic/react";
import {
  peopleSharp,
  calendarNumber,
  chatbubbles,
  informationCircle,
  cloudDownload,
} from "ionicons/icons";

function MainPage() {
  const history = useHistory();

  return (
    <IonPage id="main">
      <Header />
      <IonContent>
        <IonGrid className="layout ion-text-center">
          <div className="container ion-margin-top">
            <IonRow className="ion-justify-content-center">
              <IonCol sizeSm="4" sizeMd="4" sizeXl="4" sizeLg="4" sizeXs="8">
                <CardButton>
                  Grupos
                  <IonIcon size="large" color="dark" icon={peopleSharp} />
                </CardButton>
              </IonCol>
              <IonCol sizeSm="4" sizeMd="4" sizeXl="4" sizeLg="4" sizeXs="8">
                <CardButton>
                  Calendario
                  <IonIcon size="large" color="dark" icon={calendarNumber} />
                </CardButton>
              </IonCol>
            </IonRow>
            <IonRow className="ion-justify-content-center">
              <IonCol sizeSm="4" sizeMd="4" sizeXl="4" sizeLg="4" sizeXs="8">
                <CardButton>
                  Foros
                  <IonIcon size="large" color="dark" icon={chatbubbles} />
                </CardButton>
              </IonCol>
              <IonCol sizeSm="4" sizeMd="4" sizeXl="4" sizeLg="4" sizeXs="8">
                <CardButton>
                  Manuales
                  <IonIcon size="large" color="dark" icon={informationCircle} />
                </CardButton>
              </IonCol>
            </IonRow>
            <IonRow class="ion-justify-content-center">
              <IonCol sizeSm="4" sizeMd="4" sizeXl="4" sizeLg="4" sizeXs="8">
                <CardButton>
                  Media
                  <IonIcon size="large" color="dark" icon={cloudDownload} />
                </CardButton>
              </IonCol>
            </IonRow>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default MainPage;
