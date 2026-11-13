import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    if (!email || !password) { Alert.alert('Ошибка', 'Заполните все поля'); return; }
    if (!email.includes('@')) { Alert.alert('Ошибка', 'Введите корректный email'); return; }
    if (password.length < 4) { Alert.alert('Ошибка', 'Пароль должен быть не менее 4 символов'); return; }

    if (isLogin) {
      const savedUser = await AsyncStorage.getItem('@user_' + email);
      if (savedUser) {
        const user = JSON.parse(savedUser);
        if (user.password === password) {
          await AsyncStorage.setItem('@current_user', email);
          navigation.replace('Main');
        } else {
          Alert.alert('Ошибка', 'Неверный пароль');
        }
      } else {
        Alert.alert('Ошибка', 'Пользователь не найден. Зарегистрируйтесь.');
      }
    } else {
      const savedUser = await AsyncStorage.getItem('@user_' + email);
      if (savedUser) { Alert.alert('Ошибка', 'Пользователь с таким email уже существует'); return; }
      await AsyncStorage.setItem('@user_' + email, JSON.stringify({ email, password }));
      Alert.alert('Успех!', 'Вы зарегистрированы. Теперь войдите.', [{ text: 'ОК', onPress: () => setIsLogin(true) }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isLogin ? 'Вход в Спорт' : 'Регистрация'}</Text>
      <View style={styles.switchRow}>
        <Button title="Вход" color={isLogin ? '#007AFF' : '#ccc'} onPress={() => setIsLogin(true)} />
        <Button title="Регистрация" color={!isLogin ? '#007AFF' : '#ccc'} onPress={() => setIsLogin(false)} />
      </View>
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} autoCapitalize="none" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Пароль" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title={isLogin ? 'Войти' : 'Зарегистрироваться'} onPress={handleAuth} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  switchRow: { flexDirection: 'row', justifyContent: 'space-around', marginBottom: 20 },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 15, fontSize: 16, borderWidth: 1, borderColor: '#ddd' },
});
