import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import SampleView from './components/SampleView';
import CustomSideBarButton from './components/CustomSideBarButton';
import { View } from '@twilio/flex-ui';

const PLUGIN_NAME = 'ButtonPlugin';

export default class ButtonPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
     // Add your Button Component to the SideNav
     flex.SideNav.Content.add(
      <CustomSideBarButton key="custom-sidenav-button" />
    );

    // Add your view to the ViewCollection
    flex.ViewCollection.Content.add(
      <View name="custom-view" key="custom-view">
        <SampleView key="my view" />
      </View>
    );

  }
}
