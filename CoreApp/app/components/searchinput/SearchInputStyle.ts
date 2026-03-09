import { StyleSheet } from 'react-native';
import { UI } from 'utilities/Helpers';
import { Fontsize } from 'utilities/Style';

export const SearchInputStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal:UI.responsiveWidth(3),
    paddingVertical:UI.responsiveWidth(2),
    borderRadius: UI.responsiveWidth(5),
    // borderWidth: 1,
    // borderColor:'red'
  },
  iconStyle: {
    marginRight: UI.responsiveWidth(2),
    // tintColor: Theme.Colors.neutral1,
    // borderWidth: 1,
    // borderColor:'blue'
  },
  textInputStyle: {
    fontSize: Fontsize.seventeen,
    fontWeight: '400',
  },
});