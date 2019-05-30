import { FlexPlugin } from 'flex-plugin';
import React from 'react';
import CustomNotification from './notifications/CustomNotification';

const PLUGIN_NAME = 'NotificationPlugin';

export default class NotificationPlugin extends FlexPlugin {
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
    // define array with inspirational quotes
    let inspirationalQuotes = [
      "'Make each day your masterpiece.' – John Wooden",
      "'The difference between ordinary and extraordinary is that little extra.' – Jimmy Johnson",
      "'We are what we repeatedly do. Excellence, then, is not an act, but a habit.' – Aristotle"
    ];

    // select one randomly
    let randomQuote =
      inspirationalQuotes[
        Math.floor(Math.random() * inspirationalQuotes.length)
      ];

    // register a custom notification
    flex.Notifications.registerNotification({
      id: 'InspirationalQuote',
      content: (
        <CustomNotification
          header='Inspirational quote'
          message={randomQuote}
        />
      ),
      type: flex.NotificationType.information
    });

    // dispatch the notification
    flex.Notifications.showNotification('InspirationalQuote', null);
  }
}
