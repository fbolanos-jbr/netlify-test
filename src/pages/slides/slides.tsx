import { useHistory } from "react-router-dom";
import { useState } from "react";
import {
  IonPage,
  IonContent,
  IonCol,
  IonRow,
  IonButton,
  IonGrid,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import Header from "../../components/header/header";

function slides() {
  const history = useHistory();

  return (
    <IonPage id="main">
      <Header/>
      <IonContent>
        <IonGrid className="layout ion-text-center">
          <div className="container ion-margin-top">
            <IonRow className="ion-justify-content-center">
              <IonCol className="ion-text-left" sizeLg="8" sizeXl="6">
                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
              </IonCol>
              
              <IonCol className="ion-text-left" sizeLg="8" sizeXl="6">

                <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                    <IonCardTitle>Card Title</IonCardTitle>
                  </IonCardHeader>

                  <IonCardContent>
                    Keep close to Nature's heart... and break clear away, once
                    in awhile, and climb a mountain or spend a week in the
                    woods. Wash your spirit clean.
                  </IonCardContent>
                </IonCard>
              </IonCol>
            </IonRow>
          </div>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
}

export default slides;
