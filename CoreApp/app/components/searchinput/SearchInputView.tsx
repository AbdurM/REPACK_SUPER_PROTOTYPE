// Generated from Fingent Boilerplate | 2025-09-09 | Jerrin Thomas

import React from "react";
import { View } from "react-native";
import { SearchInputProps } from "./SearchInputModel";
import { SearchInputStyles } from "./SearchInputStyle";
import useSearchInputViewModel from "./SearchInputViewModel";
import { TextInput } from "react-native-gesture-handler";
import { Theme } from "utilities/TenantIndex";
import { IconView } from "components/icon/IconView";
import { GlobalStyles } from "utilities/Style";

export function SearchInputView(props: SearchInputProps): React.JSX.Element {
  const { onChangeText, keyValue } = useSearchInputViewModel(props);

  return (
      <View key={keyValue} style={[SearchInputStyles.container, GlobalStyles.cardShadow]}>
        <IconView 
          source={'SEARCH'} 
          style={SearchInputStyles.iconStyle}
        />
        <TextInput
          style={[SearchInputStyles.textInputStyle, props?.textInputStyle]}
          placeholder={props?.placeholder || ''}
          placeholderTextColor={props?.placeholderTextColor || Theme.Colors.neutral1}
          onChangeText={onChangeText}
          value={props?.value}
          editable={props?.editable !== false}
          autoCapitalize="none"
          autoCorrect={false}
          clearButtonMode="while-editing"
        />
      </View>
  );
}