import { IonItem, IonLabel, IonList, IonSkeletonText, IonThumbnail } from "@ionic/react";

export const SkeletonPosts = () => {

	const postAmount = 10;

	return (
		<IonList>
      { [...Array(postAmount)].map((post, index) => {

        return (

          <IonItem key={ index }>
            <IonThumbnail slot="start">
              <IonSkeletonText animated />
            </IonThumbnail>
            <IonLabel>
              <h3>
                <IonSkeletonText animated style={{ width: '50%' }} />
              </h3>
              <p>
                <IonSkeletonText animated style={{ width: '100%' }} />
              </p>
              <p>
                <IonSkeletonText animated style={{ width: '30%' }} />
              </p>
            </IonLabel>
          </IonItem>
        )
      })}
		</IonList>
	);
}