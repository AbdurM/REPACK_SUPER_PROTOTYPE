// generated from template

interface AppAlertViewModel {
  appAlertData: Record<string, any>;
  appAlert: () => void;
}

interface AppAlertViewProps {
  keyValue: string;
}

interface AppState {
  appAlertData: Record<string, any>;
}

interface RootState {
  app: AppState;
}

// Default props
const defaultProps: AppAlertViewProps = {
  keyValue: "",
};

export type { AppAlertViewModel, AppAlertViewProps, RootState };
export { defaultProps };