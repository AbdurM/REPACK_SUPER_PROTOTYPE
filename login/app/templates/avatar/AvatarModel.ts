// Generated from Fingent Boilerplate

import { Theme } from "utilities/TenantIndex";

interface AvatarViewModel {
  firstName: string;
  lastName: string;
}

interface AvatarProps {
  keyValue?: string;
  title?:string;
  color?:string;
}

// Default props
const defaultProps: AvatarProps = {
  keyValue: "",
  title: "",
  color: Theme.Colors.secondary4,
};

export type { AvatarProps, AvatarViewModel };
export { defaultProps };