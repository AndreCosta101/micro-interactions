import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Menu } from './src/components/Menu';

export default function App() {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Menu />
    </GestureHandlerRootView>
  );
  }