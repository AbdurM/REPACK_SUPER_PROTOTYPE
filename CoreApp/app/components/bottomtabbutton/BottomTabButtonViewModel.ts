// Generated from Fingent Boilerplate

import {
  BottomTabButtonViewModel,
  BottomTabButtonProps,
} from './BottomTabButtonModel';
import {Strings} from '../../utilities/TenantIndex';
import {UI} from '../../utilities/Helpers';
import {IconKey} from '../../utilities/Images';
import {NavStates} from '../../utilities/Constants';

export default function useBottomTabButtonViewModel(props: BottomTabButtonProps): BottomTabButtonViewModel {
  const { route } = props;

  const getIconDetails = () => {
    let iconName: IconKey | undefined;
    let width: number;  // Default values
    let height: number;

    switch (route.name) {
      case "Dashboard":
        iconName = "TV_LINE";
        width = UI.responsiveWidth(5);
        height = UI.responsiveWidth(5);
        break;
      case "Investments":
        iconName = "GROW_LEAFS";
        width = UI.responsiveWidth(5);
        height = UI.responsiveWidth(5);
        break;
      case "Contribution":
        iconName = "FLOW_CONNECTION";
        width = UI.responsiveWidth(5);
        height = UI.responsiveWidth(5);
        break;
      case NavStates.stackNames.historyTabStack:
        iconName = "HISTORY";
        width = UI.responsiveWidth(5);
        height = UI.responsiveWidth(5);
        break;
      case "More":
        iconName = "MORE";
        width = UI.responsiveWidth(5);
        height = UI.responsiveWidth(5);
        break;
      default:
        return null;
    }
    return {iconName, width, height};
  };

  const tabName = () => {
    let name;
    switch (route.name) {
      case "Dashboard":
        name = Strings.common.dasboard;
        break;
      case "Investments":
        name = Strings.common.investments;
        break;
      case "Contribution":
        name = Strings.common.contributions;
        break;
      case "History":
        name = Strings.common.activity;
        break;
      case "More":
        name = Strings.common.more;
        break;
      default:
        name = '';
        break;
    }
    return name;
  };

  return {tabName, getIconDetails};
}
