# Taboola React Native SDK Example App

This is an example project of how how to implement the Taboola React Native plugin. It is a pretty straightforward integration, but there a few gotchas to watch out for.

- 1. It is important that you set a static height for **RNTaboolaView** component. In our other SDK's, the widget integrations use a dynamic height while the feed integrations use a static height. For our RN plugin, both wiget and feed integrations use static height.

- 2. In the current version of the RN plugin, we are only supporting one Taboola asset per page (either a widget or a feed). Our Native and JS SDK's support multiple assets currently and we expect support this for RN in the future.

## Widget

To see an example of a widget integration, check the file **components > Widget.js**. When you sign up for the RN beta and begin the integration process, you will be provided with your own parameters to use as the props for the **RNTaboolaView** component.

## Feed

To see an example of a feed integration, check the file **components > Feed.js**. When you sign up for the RN beta and begin the integration process, you will be provided with your own parameters to use as the props for the **RNTaboolaView** component. It is important to note here that the **scrollIntercept** and **scrollEnabled** props are both set to **true**. This is going to be the major difference between Widget and Feed integrations.

## Test your own parameters

If you would like to test out your widget or feed params that were provided to you by Taboola before beginning your integration, you can:

- 1. clone down this repo
- 2. run `npm install` from your terminal
- 3. To test your params: - for iOS, make sure you have Xcode installed, then run `npm run ios` from your terminal - for android, make sure you have an Android Virtual Device installed **and running**, then run `npm run android-linux` from your terminal
     -4. Once the app is running in your simulator, you can select either _Test your widget params_ or _Test your feed params_ and fill out the form with the parameters provided to you by Taboola.

This can be especially helpful if you need to test the height of your widget (as it is statically assigned to the RNTaboolaView component).
