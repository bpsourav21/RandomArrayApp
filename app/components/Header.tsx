import React, {Component} from 'react';
import {Header} from 'react-native-elements';
import {styles} from '../shared/globalStyles';
import {GlobalProps} from '../interfaces/RootInterface';

interface LocalProps extends GlobalProps {}

class HeaderComponent extends Component<LocalProps, any> {
  constructor(props: LocalProps) {
    super(props);
  }
  private onPressMenuToggle() {
    this.props.navigation.toggleDrawer();
  }
  render() {
    var title = this.props.route.name;
    return (
      <Header
        placement="left"
        leftComponent={{
          icon: 'bars',
          type: 'font-awesome-5',
          color: '#fff',
          onPress: () => this.onPressMenuToggle(),
        }}
        centerComponent={{text: title, style: {color: '#fff'}}}
        containerStyle={styles.headerContainer}
      />
    );
  }
}

export default HeaderComponent;
