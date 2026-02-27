import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Login = ({
  memberLabel = 'Member number/Email address',
  passwordLabel = 'Password',
  setAuthenticationStatus = () => {},
  isRegisterButtonVisible = false,
}) => {
  const [memberValue, setMemberValue] = useState('12345678900000');
  const [passwordValue, setPasswordValue] = useState('');
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);

  const onLoginPress = () => {
    const isAuthenticated =
      memberValue.trim().length > 0 && passwordValue.trim().length > 0;
    setAuthenticationStatus(isAuthenticated);
  };

  return (
    <View style={styles.safeArea}>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 20 : 0}
        style={styles.container}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          <View style={styles.formWrap}>
            <View style={styles.content}>
              <View style={styles.logoWrap}>
                <Text style={styles.logoText}>SS</Text>
                <View style={styles.logoBar}>
                  <Text style={styles.logoAmp}>&amp;</Text>
                </View>
                <Text style={styles.logoText}>C</Text>
              </View>

              <Text style={styles.label}>{memberLabel}</Text>
              <TextInput
                style={styles.input}
                value={memberValue}
                onChangeText={setMemberValue}
                autoCapitalize="none"
                keyboardType="email-address"
                placeholder="12345678900000"
                placeholderTextColor="#5E738E"
              />

              <Text style={[styles.label, styles.passwordLabel]}>
                {passwordLabel}
              </Text>
              <View style={styles.passwordContainer}>
                <TextInput
                  style={styles.passwordInput}
                  value={passwordValue}
                  onChangeText={setPasswordValue}
                  secureTextEntry={isPasswordHidden}
                  placeholder=""
                  placeholderTextColor="#5E738E"
                />
                <Pressable
                  onPress={() => setIsPasswordHidden(prev => !prev)}
                  hitSlop={10}>
                  <Text style={styles.eyeIcon}>
                    {isPasswordHidden ? '◉' : '◎'}
                  </Text>
                </Pressable>
              </View>

              <Pressable style={styles.loginButton} onPress={onLoginPress}>
                <Text style={styles.loginButtonText}>Login</Text>
              </Pressable>

             { 
              isRegisterButtonVisible ? <Pressable style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
              </Pressable> : null
              }
            </View>
          </View>
          <View style={styles.bottomSpacer} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#1E2965',
  },
  container: {
    flex: 1,
    backgroundColor: '#1E2965',
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 26,
    paddingTop: 16,
  },
  formWrap: {
    flex: 1,
    justifyContent: 'center',
  },
  content: {
    width: '100%',
  },
  logoWrap: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 0,
    marginBottom: 100,
  },
  logoText: {
    color: '#FFFFFF',
    fontSize: 48,
    lineHeight: 60,
    fontWeight: '800',
    letterSpacing: -1.2,
  },
  logoBar: {
    width: 40,
    height: 94,
    marginHorizontal: 3,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoAmp: {
    color: '#163C8A',
    fontSize: 48,
    lineHeight: 58,
    fontWeight: '800',
    marginTop: -2,
  },
  label: {
    color: '#F4F7FF',
    fontSize: 17,
    fontWeight: '600',
    marginBottom: 10,
  },
  input: {
    backgroundColor: '#F6F8FC',
    borderRadius: 16,
    paddingHorizontal: 18,
    height: 58,
    fontSize: 16,
    color: '#445E7D',
  },
  passwordLabel: {
    marginTop: 24,
  },
  passwordContainer: {
    backgroundColor: '#F6F8FC',
    borderRadius: 16,
    height: 58,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: '#445E7D',
  },
  eyeIcon: {
    color: '#5C718C',
    fontSize: 24,
    lineHeight: 24,
  },
  loginButton: {
    marginTop: 92,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#1764D0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  registerButton: {
    marginTop: 14,
    height: 52,
    borderRadius: 26,
    borderWidth: 2,
    borderColor: '#8FA5CF',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  registerButtonText: {
    color: '#E9F0FF',
    fontSize: 17,
    fontWeight: '600',
  },
  bottomSpacer: {
    height: 36,
  },
});

export default Login;
