import { useState } from "react";
import { TextInputProps } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  Label,
  InputContainer,
  Field,
  IconContainer,
} from "./styles";

import theme from "../../theme";

interface FieldProps extends TextInputProps {
  label: string;
  placeholder?: string;
  name?: string;
  secureTextEntry?: boolean;
  error?: string;
  children?: React.ReactNode;
}

export default function Input({
  label,
  placeholder,
  name,
  error,
  secureTextEntry = false,
  children,
  ...rest
}: FieldProps) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVal) => !prevVal);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <InputContainer>
        <Field
          placeholder={placeholder}
          value={name}
          placeholderTextColor={theme.COLORS.GREEN}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          {...rest}
        />
        {secureTextEntry && (
          <IconContainer>
            <Ionicons
              name={isPasswordVisible ? "eye" : "eye-off"}
              size={24}
              color={theme.COLORS.GREEN}
              onPress={togglePasswordVisibility}
            />
          </IconContainer>
        )}
      </InputContainer>
    </Container>
  );
}
