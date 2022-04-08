This test have 2 implementations:
1) Using only hooks. (As app is simple now, this solution is the optimal one in my mind)
2) + Using MobX Store

Running app you'll see both versions on their respective tab.

## Install Dependencies
- `cd "./unit_converter" && yarn install`
- (for iOS) `cd "./unit_converter/ios" && pod install`

## Run unit tests
- `yarn run test`
- To update snapshots (if components is changed): `yarn run test -- -u`

## Run instructions for Android:
- Have an Android emulator running (quickest way to get started), or a device connected.
- cd `"./unit_converter" && npx react-native run-android`

## Run instructions for iOS:
- cd `"./unit_converter" && npx react-native run-ios`
- or -
- make sure pods are installed by running `"cd ios && pod install"`
- Open `./unit_converter/ios/TestApp.xcworkspace` in Xcode or run `"xed -b ios"`
- Hit the Run button


## Demo

![](demo/demo1.gif)
