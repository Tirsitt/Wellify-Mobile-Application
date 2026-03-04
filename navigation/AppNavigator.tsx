// @ts-ignore - requires: npm install
import {
    createDrawerNavigator,
    DrawerContentComponentProps,
} from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

// screens
import AboutScreen from '@/screens/AboutScreen';
import BlogScreen from '@/screens/BlogScreen';
import ConsentScreen from '@/screens/ConsentScreen';
import ConsultationScreen from '@/screens/ConsultationScreen';
import ContactScreen from '@/screens/ContactScreen';
import CourseDetailScreen from '@/screens/CourseDetailScreen';
import CoursesScreen from '@/screens/CoursesScreen';
import ForumScreen from '@/screens/ForumScreen';
import HomeworkScreen from '@/screens/HomeworkScreen';
import InformationScreen from '@/screens/InformationScreen';
import LoginScreen from '@/screens/LoginScreen';
import NewMessageScreen from '@/screens/NewMessageScreen';
import NotificationsScreen from '@/screens/NotificationsScreen';
import QuickInfoScreen from '@/screens/QuickInfoScreen';
import RoadmapScreen from '@/screens/RoadmapScreen';
import SurveyScreen from '@/screens/SurveyScreen';

// components
import CustomDrawerContent from '@/components/CustomDrawerContent';

// stack types

type CoursesStackParamList = {
  Courses: undefined;
  CourseDetail: { courseId: string };
};

const CoursesStack = createNativeStackNavigator<CoursesStackParamList>();

const CoursesStackNavigator: React.FC = () => (
  <CoursesStack.Navigator
    screenOptions={{ headerStyle: { backgroundColor: '#fff' }, headerTitleStyle: { fontWeight: '600' } }}
  >
    <CoursesStack.Screen name="Courses" component={CoursesScreen} options={{ title: 'Courses' }} />
    <CoursesStack.Screen
      name="CourseDetail"
      component={CourseDetailScreen}
      options={{ title: 'Video Lesson' }}
    />
  </CoursesStack.Navigator>
);

// forum stack

type ForumStackParamList = {
  Forum: undefined;
  NewMessage: undefined;
};

const ForumStack = createNativeStackNavigator<ForumStackParamList>();

const ForumStackNavigator: React.FC = () => (
  <ForumStack.Navigator
    screenOptions={{ headerStyle: { backgroundColor: '#fff' }, headerTitleStyle: { fontWeight: '600' } }}
  >
    <ForumStack.Screen name="Forum" component={ForumScreen} options={{ title: 'Forum' }} />
    <ForumStack.Screen name="NewMessage" component={NewMessageScreen} options={{ title: 'New Topic' }} />
  </ForumStack.Navigator>
);

const Drawer = createDrawerNavigator();

// Drawer Navigator
const DrawerNavigator: React.FC = () => (
  <Drawer.Navigator
    // explicitly type props to avoid implicit any errors
    drawerContent={(props: DrawerContentComponentProps) => (
      <CustomDrawerContent {...props} />
    )}
    screenOptions={{ headerStyle: { backgroundColor: '#fff' } }}
  >
    <Drawer.Screen name="Notifications" component={NotificationsScreen} options={{ title: 'Notifications' }} />
    <Drawer.Screen name="Learning" component={InformationScreen} options={{ title: 'Learning' }} />
    <Drawer.Screen name="Homework" component={HomeworkScreen} options={{ title: 'Homework' }} />
    <Drawer.Screen name="Consultation" component={ConsultationScreen} options={{ title: 'Consultation' }} />
    <Drawer.Screen name="Roadmap" component={RoadmapScreen} options={{ title: 'My Roadmap' }} />
    <Drawer.Screen name="CoursesNav" component={CoursesStackNavigator} options={{ title: 'Courses' }} />
    <Drawer.Screen name="Blog" component={BlogScreen} options={{ title: 'Blog' }} />
    <Drawer.Screen name="Survey" component={SurveyScreen} options={{ title: 'Survey' }} />
    <Drawer.Screen name="ForumNav" component={ForumStackNavigator} options={{ title: 'Forum' }} />
    <Drawer.Screen name="Contact" component={ContactScreen} options={{ title: 'Contact Us' }} />
    <Drawer.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
    <Drawer.Screen name="Consent" component={ConsentScreen} options={{ title: 'Terms & Consent' }} />
    <Drawer.Screen name="QuickInfo" component={QuickInfoScreen} options={{ title: 'Quick Info' }} />
  </Drawer.Navigator>
);

// Root Stack Navigator (Login entry point)
type RootStackParamList = {
  Login: undefined;
  DrawerNavigator: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => (
  <RootStack.Navigator
    screenOptions={{ headerShown: false }}
    initialRouteName="Login"
  >
    <RootStack.Screen name="Login" component={LoginScreen} />
    <RootStack.Screen name="DrawerNavigator" component={DrawerNavigator} />
  </RootStack.Navigator>
);

export default AppNavigator;
