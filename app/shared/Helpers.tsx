import React from 'react';
import {View} from 'react-native';
import {Button, Icon} from 'react-native-elements';
import {Colors} from '../shared/Colors';

type buttonType = 'solid' | 'clear' | 'outline';

interface viewStyle {
  padding?: number;
  height?: number;
}

export const verticalSpacer = (height: number) => <View style={{height}} />;

export const horizontalSpacer = (width: number) => <View style={{width}} />;

export const renderButton = (
  title: string,
  onPress: () => void,
  buttonColor: string = Colors.primary,
  containerPadding: number = 10,
  containerHeight: number = 40,
  type: buttonType = 'solid',
  loading: boolean = false,
  raised: boolean = false,
  disabled: boolean = false,
  iconName: string = '',
  iconSize: number = 15,
  iconColor: string = Colors.white,
  iconRight: boolean = false,
) =>
  button(
    title,
    onPress,
    buttonColor,
    type,
    {
      padding: containerPadding,
      height: containerHeight,
    },
    loading,
    raised,
    disabled,
    iconName,
    iconSize,
    iconColor,
    iconRight,
  );

const button = (
  title: string,
  onPress: () => void,
  buttonColor: string,
  type: buttonType,
  containerStyle: viewStyle,
  loading: boolean,
  raised: boolean,
  disabled: boolean,
  iconName: string,
  iconSize: number,
  iconColor: string,
  iconRight: boolean,
) => {
  const icon =
    iconName === '' ? undefined : (
      <Icon name={iconName} size={iconSize} color={iconColor} />
    );
  return (
    <Button
      icon={icon}
      type={type}
      iconRight={iconRight}
      title={title}
      raised={raised}
      loading={loading}
      onPress={onPress}
      disabled={disabled}
      buttonStyle={{backgroundColor: buttonColor}}
    />
  );
};
