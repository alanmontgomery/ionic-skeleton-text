import { IonImg, IonItem, IonLabel, IonList, IonLoading, IonThumbnail } from "@ionic/react";
import { SkeletonPosts } from "./SkeletonPosts";

export const Posts = ({ posts, useSkeleton }) => (
  <>

    { posts.length > 0 ?
      <IonList>
        { posts.map((post, index) => {

          return (

            <IonItem key={ index }>
              <IonThumbnail slot="start">
                <IonImg src={ post.image } />
              </IonThumbnail>
              <IonLabel className="">
                <h3>{ post.title }</h3>
                <p>{ post.blurb }</p>
                <p>{ post.date }</p>
              </IonLabel>
            </IonItem>
          )
        })}
      </IonList>
    : useSkeleton ? <SkeletonPosts /> : <IonLoading isOpen={ true } spinner="bubbles" message="Loading posts..." /> }
  </>
);