import { menu } from 'ionicons/icons';
import {
  IonHeader,
  IonIcon,
  IonToolbar,
  IonGrid,
  IonRow,
  IonMenuToggle,
  IonButton,
  IonCol
} from "@ionic/react";
import './header.scss';

function Header() {
  return (
    <IonHeader>
      <IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol className='ion-content-align-center'>
              <IonMenuToggle>
                <IonButton>
                  <IonIcon icon={menu}/>
                </IonButton>
              </IonMenuToggle>
            </IonCol>
            <IonCol>
            <img src="assets/logo/MainLogo1.png" alt="Logo Asoc." />
            </IonCol> 
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>      
      </IonToolbar>


    </IonHeader>
  );
}

export default Header;
