import React, { useState, useContext } from 'react'
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput, ErrorContainer,
  Title,
} from "../components/accountStyles"
import { Spacer } from "../../../components/Spacer"
import { AuthContext } from "../../../services/auth/authContext"
import { Text } from '../../../components/Text'

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { onLogin, error } = useContext(AuthContext)

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Login</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="email"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={ e => setEmail(e) }
        />

        <Spacer size='large'>
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            secure
            onChangeText={ p => setPassword(p) }
          />
        </Spacer>

        { error && (
          <Spacer size='large'>
            <ErrorContainer>
              <Text variant='error'>{error}</Text>
            </ErrorContainer>
          </Spacer>
        ) }

        <Spacer size='large'>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password) }
          >
            Login
          </AuthButton>
        </Spacer>
      </AccountContainer>
      <Spacer size='large'>
        <AuthButton
          mode="contained"
          onPress={() => navigation.goBack() }
        >
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  )
}
