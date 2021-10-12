import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';

import { fakePosts } from "../data";
import { useEffect, useState } from 'react';
import { Posts } from '../components/Posts';

const Home = () => {

  const [ posts, setPosts ] = useState([]);

  useEffect(() => {

    setTimeout(() => setPosts(fakePosts), 2000);
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Posts</IonTitle>
          </IonToolbar>
        </IonHeader>

        <Posts posts={ posts } useSkeleton={ true } />

      </IonContent>
    </IonPage>
  );
};

export default Home;
