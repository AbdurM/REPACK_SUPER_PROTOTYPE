// Generated from Fingent Boilerplate

import { EmployerMandatoryViewModel, EmployerMandatoryProps } from "./EmployerMandatoryModel";

export default function useEmployerMandatoryViewModel(props: EmployerMandatoryProps): EmployerMandatoryViewModel {
  const { onPress } = props;

  const handlePress = () => {
    if (onPress) {
      onPress();
    }
  };

  return {
    handlePress,
  };
}