// import CleverTap from 'clevertap-react-native';
// import React, { useEffect } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// type SectionProps = {
//   title: string;
//   children: React.ReactNode;
// };

// function Section({ children, title }: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[styles.sectionTitle, { color: isDarkMode ? Colors.white : Colors.black }]}
//       >
//         {title}
//       </Text>
//       <Text
//         style={[styles.sectionDescription, { color: isDarkMode ? Colors.light : Colors.dark }]}
//       >
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   useEffect(() => {
//     const myStuff = ['bag', 'shoes'];
//     const props = {
//       Name: 'Hello',
//       Identity: '218',
//       Email: 'jack@gmail.com',
//       Phone: '+14155551234',
//       Gender: 'M',
//       DOB: new Date('1992-12-22T06:35:31'),
//       'MSG-email': false,
//       'MSG-push': true,
//       'MSG-sms': false,
//       'MSG-whatsapp': true,
//       Stuff: myStuff
//     };

//     CleverTap.onUserLogin(props);
//   }, []);
//   CleverTap.createNotificationChannel("CtRNS", "Clever Tap React Native Testing", "CT React Native Testing", 5, true) // The notification channel importance can have any value from 1 to 5. A higher value means a more interruptive notification.
//   let localInApp = {
//     inAppType: 'alert',
//     titleText: 'Get Notified',
//     messageText: 'Enable Notification permission',
//     followDeviceOrientation: true,
//     positiveBtnText: 'Allow',
//     negativeBtnText: 'Cancel',
//     fallbackToSettings: true, //Setting this parameter to true will open an in-App to redirect you to Mobile's OS settings page.
//   };

// CleverTap.promptPushPrimer(localInApp);
// CleverTap.promptForPushPermission(true);



// CleverTap.addListener(CleverTap.CleverTapPushPermissionResponseReceived, (e)=>{/*consume the event*/})
// //CleverTap.removeListener(CleverTap.CleverTapPushPermissionResponseReceived);  



//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
//         <Header />
//         <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
//           {/* <Section title="Step One">
//             Edit <Text style={styles.highlight}>App.tsx</Text> to change this
//             screen and then come back to see your edits.
//           </Section> */}
//           {/* <Section title="See Your Changes">
//             <ReloadInstructions />
//           </Section>
//           <Section title="Debug">
//             <DebugInstructions />
//           </Section>
//           <Section title="Learn More">
//             Read the docs to discover what to do next:
//           </Section>
//           <LearnMoreLinks /> */}
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

// export default App;
// tp
// anhdbadjadkbadb.kjabkabdkj.abdkjabdjkbad.kbackhbckhabchkakhcvahcah.cbakbkabj.n jakcbkacb a.cb 

// import CleverTap from 'clevertap-react-native';
// import React, { useEffect } from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   Header,
// } from 'react-native/Libraries/NewAppScreen';

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   useEffect(() => {
//     const myStuff = ['bag', 'shoes'];
//     const props = {
//       Name: 'Hello',
//       Identity: '218',
//       Email: 'jack@gmail.com',
//       Phone: '+14155551234',
//       Gender: 'M',
//       DOB: new Date('1992-12-22T06:35:31'),
//       'MSG-email': false,
//       'MSG-push': true,
//       'MSG-sms': false,
//       'MSG-whatsapp': true,
//       Stuff: myStuff
//     };

//     CleverTap.onUserLogin(props);

//     // // Add event listener for in-app notification button tap
//     // CleverTap.addListener(CleverTap.CleverTapInAppNotificationButtonTapped, (event) => {
//     //   _handleCleverTapEvent(CleverTap.CleverTapInAppNotificationButtonTapped, event);
//     // });

//     // Cleanup listener on component unmount
//     return () => {
//       CleverTap.removeListener(CleverTap.CleverTapInAppNotificationButtonTapped);
//     };
//   }, []);

//   const _handleCleverTapEvent = (eventName: string, event: any) => {
//     console.log('CleverTap Event called - ', eventName, event);
//   };

//   const handleButtonPress = () => {
//     CleverTap.recordEvent("In-app 3 Notification", { "Product name": "CleverTap React Native" });
//   };

//   CleverTap.initializeInbox();


//   return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar
//         barStyle={isDarkMode ? 'light-content' : 'dark-content'}
//         backgroundColor={backgroundStyle.backgroundColor}
//       />
//       <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
//         <Header />
//         <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={handleButtonPress}
//           >
//             <Text style={styles.buttonText}>In-app 3 Notification</Text>
//           </TouchableOpacity>

          

//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   button: {
//     backgroundColor: '#4CAF50',
//     padding: 10,
//     marginBottom: 10,
//     alignItems: 'center',
//     borderRadius: 5,
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     fontWeight: '600',
//   },
// });

// export default App;
import CleverTap from 'clevertap-react-native';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  useEffect(() => {
    const myStuff = ['bag', 'shoes'];
    const props = {
      Name: 'Hello',
      Identity: '218',
      Email: 'jack@gmail.com',
      Phone: '+14155551234',
      Gender: 'M',
      DOB: new Date('1992-12-22T06:35:31'),
      'MSG-email': false,
      'MSG-push': true,
      'MSG-sms': false,
      'MSG-whatsapp': true,
      Stuff: myStuff,
    };

    CleverTap.onUserLogin(props);

  }, []);
  
    // Initialize inbox once
    CleverTap.initializeInbox();

  // Add listener for inbox initialization
  useEffect(() => {
    const inboxListener = (event: any) => {
      _handleCleverTapInbox(CleverTap.CleverTapInboxDidInitialize, event);
    };

    CleverTap.addListener(CleverTap.CleverTapInboxDidInitialize, inboxListener);

    return () => {
      CleverTap.removeListener(CleverTap.CleverTapInboxDidInitialize);
    };
  }, []);

  // // Add listener for when inbox messages are updated
  // useEffect(() => {
  //   const inboxUpdateListener = (event: any) => {
  //     _handleCleverTapInbox(CleverTap.CleverTapInboxMessagesDidUpdate, event);
  //   };

  //   CleverTap.addListener(CleverTap.CleverTapInboxMessagesDidUpdate, inboxUpdateListener);

  //   return () => {
  //     CleverTap.removeListener(CleverTap.CleverTapInboxMessagesDidUpdate);
  //   };
  // }, []);

  const _handleCleverTapInbox = (eventName: string, event: any) => {
    CleverTap.showInbox({
      tabs: ['Offers', 'Promotions'],
      navBarTitle: 'My App Inbox',
      navBarTitleColor: '#FF0000',
      navBarColor: '#FFFFFF',
      inboxBackgroundColor: '#AED6F1',
      backButtonColor: '#00FF00',
      unselectedTabColor: '#0000FF',
      selectedTabColor: '#FF0000',
      selectedTabIndicatorColor: '#000000',
      noMessageText: 'No message(s)',
      noMessageTextColor: '#FF0000',
    });
  };

  const handleButtonPress = () => {
    CleverTap.recordEvent('In-app 3 Notification', { 'Product name': 'CleverTap React Native' });
  };
  
  const handleButtonPress2 = () => {
    CleverTap.recordEvent('inbox', { 'Inbox name': 'CleverTap React Native' });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <Header />
        <View style={{ backgroundColor: isDarkMode ? Colors.black : Colors.white }}>
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText}>In-app 3 Notification</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              CleverTap.initializeInbox();
              handleButtonPress2();
            }}
          >
            <Text style={styles.buttonText}>Inbox</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4CAF50',
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
