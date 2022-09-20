import { IonButton } from "@ionic/react";
import { ReactNode } from "react";
import './card-button.scss'

interface CardButtonProps {
  children: ReactNode;
}

function CardButton({ children, ...props }: CardButtonProps) {
  return <IonButton className="card-button" size="large">{children}</IonButton>;
}

export default CardButton;
