import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import CustomThemeOverrides from './components/CustomThemeOverrides'

const PLUGIN_NAME = 'ThemePlugin';

export default class ThemePlugin extends FlexPlugin {
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

    flex.MainHeader.defaultProps.logoUrl = "http://owlcrm.herokuapp.com/acme-logo-light.svg";

    manager.strings.TaskHeaderLine = "{{task.attributes.account_data.first_name}} {{task.attributes.account_data.last_name}}";
    manager.strings.TaskLineCallReserved = "SLA: {{task.attributes.account_data.service_level}}";
  
    flex.CRMContainer.defaultProps.uriCallback = (task) => {
      return task ? "https://owlcrm.herokuapp.com/profile?id=" + task.attributes.account_number : "https://owlcrm.herokuapp.com";
    }  

    manager.updateConfig({
      colorTheme: {
        baseName: "GreyDark",
        colors: {
          darkTextColor: "#e0e0e0",
        },
        overrides: CustomThemeOverrides
      }
    });
    
  }
}
