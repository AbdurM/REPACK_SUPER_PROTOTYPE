// generated from template

import {AppAlertViewModel, RootState} from './AppAlertModel';
import {useDispatch, useSelector} from 'react-redux';
import {appActions} from 'store/sagaSlice/appSlice';

export default function useAppAlertViewModel(): AppAlertViewModel {
  const dispatch = useDispatch();
  const {appAlertData} = useSelector((state: RootState) => state.app);

  const appAlert = (): void => {
    dispatch(appActions.setAppAlertData(false));
  };

  return {appAlertData, appAlert};
}
