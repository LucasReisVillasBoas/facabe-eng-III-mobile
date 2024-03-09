import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as S from './styles';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    axios.get('http://localhost:3000/feed')
      .then(response => {
        console.log(response)
        setData(response.data);
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }, []);

  return (
    <S.Container>
      <S.PostSection>
        teste
        {
          data && data.map((ref: any) =>
            <S.Post>
              <h3>{ref.title}</h3>
              <p>{ref.content}</p>
            </S.Post>)
        }
      </S.PostSection>
    </S.Container>
  );
}