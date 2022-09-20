import { useHistory } from "react-router-dom";
import { useState } from "react";
import { peopleCircleOutline, peopleSharp} from 'ionicons/icons';
import {
  IonPage,
  IonContent,
  IonList,
  IonSelect,
  IonSelectOption,
  IonItem,
  IonCol,
  IonRow,
  IonButton,
  IonGrid,
  IonIcon,
  IonLabel
} from "@ionic/react";
import Header from "../../components/header/header";
import "./Groups.scss"
function Groups() {
  const history = useHistory();
  let AssignedGroups=[
    {
      id: "grp1",
      name: "1"
    },
    {
      id: "grp2",
      name: "2"
    },
    {
      id: "grp3",
      name: "3"
    }
  ];

  

  return (
    <IonPage id="Groups">
      <Header/>
      <IonContent>
      <IonItem>
        <IonGrid>

          <IonRow>            
            <IonCol >
              <IonGrid>
                <IonRow>
                 <IonIcon icon={peopleSharp}/> <strong>Grupo</strong>
                </IonRow>
                <IonRow>
                  <IonSelect placeholder="#">
                    <IonSelectOption value={"1"}>1</IonSelectOption>
                    <IonSelectOption value={"2"}>2</IonSelectOption>
                    <IonSelectOption value={"3"}>3</IonSelectOption>
                    <IonSelectOption value={"4"}>4</IonSelectOption>
                    <IonSelectOption value={"5"}>5</IonSelectOption>
                    <IonSelectOption value={"6"}>6</IonSelectOption>
                  </IonSelect>
                </IonRow>
              </IonGrid>

              </IonCol>
              
              
              <IonCol>
                <IonGrid>
                  <IonRow>
                    <IonButton>Agregar Miembro</IonButton>
                  </IonRow>
                  <IonRow>
                    <IonButton>Agregar Persona</IonButton>
                  </IonRow>

                </IonGrid>
              </IonCol>

          </IonRow>
        </IonGrid>
      </IonItem>
      </IonContent>
    </IonPage>
  );
}
export default Groups;