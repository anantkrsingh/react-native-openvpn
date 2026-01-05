import React, { useRef } from 'react';
import { Text, StyleSheet, Animated, View, Pressable } from 'react-native';
import Svg, {
  Defs,
  Rect,
  Filter,
  FeOffset,
  FeColorMatrix,
  FeMerge,
  FeMergeNode,
} from 'react-native-svg';

interface ShadowButtonProps {
  isConnected: boolean;
  isActive: boolean;
  onPress: () => void;
}

interface ConnectButtonProps {
  isConnected: boolean;
  isActive: boolean;
  onPress: () => void;
}


export const ConnectButton: React.FC<ConnectButtonProps> = ({
  isConnected,
  isActive,
  onPress,
}) => {
  const buttonScale = useRef(new Animated.Value(1)).current;

  const handlePress = () => {
    // Button press animation
    Animated.sequence([
      Animated.timing(buttonScale, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(buttonScale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();

    onPress();
  };

  return (
    <ShadowButton
      isActive={isActive}
      isConnected={isConnected}
      onPress={handlePress}
    />


    // <Animated.View style={[styles.buttonContainer, { transform: [{ scale: buttonScale }] }]}>
    //   <TouchableOpacity
    //     style={[
    //       styles.actionButton,
    //       isConnected && styles.actionButtonConnected,
    //       isActive && styles.actionButtonDisabled,
    //     ]}
    //     onPress={handlePress}
    //     disabled={isActive}
    //     activeOpacity={1}
    //   >
    //     <Text
    //       style={[
    //         styles.actionButtonText,
    //         isConnected && styles.actionButtonTextConnected,
    //       ]}
    //     >
    //       {isConnected ? 'DISCONNECT' : 'CONNECT'}
    //     </Text>
    //   </TouchableOpacity>
    //     <WhiteShadowBox />
    // </Animated.View>
  );
};





export const ShadowButton: React.FC<ShadowButtonProps> = ({ isConnected, isActive, onPress }) => {
  return (
    <View style={styles.container}>
      {/* SVG shadow layer */}
      <Svg
        width={500}
        height={80}
        style={StyleSheet.absoluteFill}
        pointerEvents="none"
      >
        <Defs>
          <Filter id="flatShadow" x="-20%" y="-20%" width="140%" height="140%">
            {/* ONLY vertical offset */}
            <FeOffset dx="0" dy="5" in="SourceAlpha" result="offset" />

            {/* Color: #303030, opacity 1 */}
            <FeColorMatrix
              in="offset"
              type="matrix"
              values="
                0 0 0 0 0.188
                0 0 0 0 0.188
                0 0 0 0 0.188
                0 0 0 1 0
              "
              result="shadow"
            />

            <FeMerge>
              <FeMergeNode in="shadow" />
            </FeMerge>
          </Filter>
        </Defs>

        {/* Shadow caster (sharp edges, no radius) */}
        <Rect
          x="7"
          y="7"
          width="298"
          height="45"
          fill="#000"
          filter="url(#flatShadow)"
        />
      </Svg>

      {/* Actual button */}
      <Pressable style={[styles.button, isActive && styles.buttonActive]} onPress={onPress}>
        <Text style={styles.text}>{isConnected ? 'DISCONNECT' : 'CONNECT'}</Text>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 298,
    height: 50,
    position: 'relative',
  },

  button: {
    width: 298,
    height: 50,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#FFFFFF',
    fontWeight: '600',
    letterSpacing: 1,
    fontSize: 14,
  },
  buttonActive: {
    backgroundColor: '#303030',
  },
});





