import { View, TouchableOpacity } from 'react-native';
import Animated, { useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { AntDesign } from '@expo/vector-icons';

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ flexDirection: 'row', backgroundColor: '#fff', height: 70 }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.title || route.name;
        const isFocused = state.index === index;

        // Animation : zoom quand actif
        const animatedStyle = useAnimatedStyle(() => ({
          transform: [{ scale: withSpring(isFocused ? 1.2 : 1) }],
        }));

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
          >
            <Animated.View style={animatedStyle}>
              <AntDesign
                name={options.icon || 'home'}
                size={24}
                color={isFocused ? 'tomato' : 'gray'}
              />
            </Animated.View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
