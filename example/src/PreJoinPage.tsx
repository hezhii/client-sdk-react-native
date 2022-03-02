import * as React from 'react';
import { ReactElement, useEffect, useState } from "react"
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StyleSheet, View, TextInput, Text, Button } from 'react-native';
import type { RootStackParamList } from './App';



export const PreJoinPage = ({ navigation }: NativeStackScreenProps<RootStackParamList, 'PreJoinPage'>) => {

  const [url, setUrl] = useState('ws://localhost:7880')
  const [token, setToken] = useState<string>('')
  return (
    <View style={styles.container}>
      <Text>URL</Text>
      <TextInput
        onChangeText={setUrl}
        value={url}
      />

      <Text>Token</Text>
      <TextInput
        onChangeText={setToken}
        value={token}
      />

      <Button
        title='Connect'
        onPress={() => {
          navigation.push('RoomPage', {url: url, token: token})
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});