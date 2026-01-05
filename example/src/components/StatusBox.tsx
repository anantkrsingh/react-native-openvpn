import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';
import { ConnectionState } from 'react-native-openvpn';
import { RadialGradient } from 'react-native-gradients';

interface StatusBoxProps {
  connectionState: ConnectionState;
}

const colorList = [
  { offset: '0%', color: '#303030', opacity: '1' },   
  { offset: '100%', color: '#000000', opacity: '1' }  
];

const connectedColorList = [
  { offset: '0%', color: '#4AE68E', opacity: '1' },    // green center
  { offset: '100%', color: '#061810', opacity: '1' }   // dark edges
];

const connectingColorList = [
  { offset: '0%', color: '#E6A64E', opacity: '1' },    // amber center
  { offset: '100%', color: '#181206', opacity: '1' }   // dark edges
];

const getStatusText = (state: ConnectionState) => {
  switch (state) {
    case ConnectionState.CONNECTED:
      return 'CONNECTED';
    case ConnectionState.CONNECTING:
      return 'CONNECTING';
    case ConnectionState.DISCONNECTING:
      return 'DISCONNECTING';
    default:
      return 'DISCONNECTED';
  }
};

const WAVE_COUNT = 4;

export const StatusBox: React.FC<StatusBoxProps> = ({ connectionState }) => {
  const isConnected = connectionState === ConnectionState.CONNECTED;
  const isConnecting = connectionState === ConnectionState.CONNECTING;
  const isDisconnecting = connectionState === ConnectionState.DISCONNECTING;
  const isActive = isConnecting || isDisconnecting;

  // Wave animations
  const waveAnimations = useRef(
    Array.from({ length: WAVE_COUNT }, () => new Animated.Value(0))
  ).current;

  // Pulse animation for the main container
  const pulseAnim = useRef(new Animated.Value(1)).current;

  // Start wave animations when connecting
  useEffect(() => {
    if (isActive) {
      // Start pulse animation
      const pulseAnimation = Animated.loop(
        Animated.sequence([
          Animated.timing(pulseAnim, {
            toValue: 0.92,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(pulseAnim, {
            toValue: 1,
            duration: 800,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      );
      pulseAnimation.start();

      // Start wave animations with staggered delays
      const waveAnimationList = waveAnimations.map((anim, index) => {
        return Animated.loop(
          Animated.sequence([
            Animated.timing(anim, {
              toValue: 1,
              duration: 2000,
              easing: Easing.out(Easing.ease),
              useNativeDriver: true,
              delay: index * 500, // Stagger each wave
            }),
            Animated.timing(anim, {
              toValue: 0,
              duration: 0,
              useNativeDriver: true,
            }),
          ])
        );
      });

      waveAnimationList.forEach((anim) => anim.start());

      return () => {
        pulseAnimation.stop();
        waveAnimationList.forEach((anim) => anim.stop());
        pulseAnim.setValue(1);
        waveAnimations.forEach((anim) => anim.setValue(0));
      };
    }

    // Reset animations when not active
    pulseAnim.setValue(1);
    waveAnimations.forEach((anim) => anim.setValue(0));
    return undefined;
  }, [isActive, pulseAnim, waveAnimations]);

  const getColors = () => {
    if (isConnected) return connectedColorList;
    if (isActive) return connectingColorList;
    return colorList;
  };

  const getGlowColor = () => {
    if (isConnected) return '#4AE68E';
    if (isActive) return '#E6A64E';
    return '#6B4EE6';
  };

  return (
    <View style={styles.outerContainer}>
      {/* Wave circles - only show when connecting */}
      {isActive && waveAnimations.map((anim, index) => {
        const scale = anim.interpolate({
          inputRange: [0, 1],
          outputRange: [0.5, 1.8],
        });
        const opacity = anim.interpolate({
          inputRange: [0, 0.3, 1],
          outputRange: [0.6, 0.4, 0],
        });

        return (
          <Animated.View
            key={index}
            style={[
              styles.waveCircle,
              {
                borderColor: getGlowColor(),
                transform: [{ scale }],
                opacity,
              },
            ]}
          />
        );
      })}

      {/* Main gradient container with pulse */}
      <Animated.View
        style={[
          styles.wrapper,
          {
            transform: [{ scale: pulseAnim }],
          },
        ]}
      >
        {/* Outer glow ring */}
        <View
          style={[
            styles.glowRing,
            { shadowColor: getGlowColor() },
          ]}
        />

        {/* Gradient Background */}
        <View style={styles.gradientContainer}>
          <RadialGradient
            colorList={getColors()}
            x="50%"
            y="50%"
            rx="55%"
            ry="55%"
          />
        </View>

        {/* Inner decorative ring */}
        {/* <View style={[styles.innerRing, { borderColor: getGlowColor() + '40' }]} /> */}

        {/* Center Content */}
        <View style={styles.center}>
          <View
            style={[
              styles.statusCircle,
              
            ]}
          >
            <Text style={styles.statusText}>
              {getStatusText(connectionState)}
            </Text>
          </View>
        </View>
      </Animated.View>
    </View>
  );
};

const SIZE = 280;
const INNER_SIZE = 120;

const styles = StyleSheet.create({
  outerContainer: {
    width: SIZE + 100,
    height: SIZE + 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position:"relative"
  },

  waveCircle: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    borderWidth: 2,
    backgroundColor: 'transparent',
  },

  wrapper: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    overflow: 'visible',
    justifyContent: 'center',
    alignItems: 'center',
  },

  glowRing: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 30,
    elevation: 25,
    backgroundColor: 'transparent',
  },

  gradientContainer: {
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    overflow: 'hidden',
    position: 'absolute',
  },

  innerRing: {
    position: 'absolute',
    width: SIZE - 40,
    height: SIZE - 40,
    borderRadius: (SIZE - 40) / 2,
    borderWidth: 1,
  },

  center: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },

  statusCircle: {
    width: INNER_SIZE,
    height: INNER_SIZE,
    borderRadius: INNER_SIZE / 2,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.0)',
    overflow: 'hidden',
  },

  innerGlow: {
    position: 'absolute',
    width: INNER_SIZE,
    height: INNER_SIZE,
    borderRadius: INNER_SIZE / 2,
  },

  statusText: {
    color: '#FFFFFF',
    fontSize: 12,
    letterSpacing: 2.5,
    fontWeight: '700',
    textShadowColor: 'rgba(0,0,0,0.5)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 3,
  },

  connected: {
    shadowColor: '#4AE68E',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20,
    borderColor: 'rgba(74, 230, 142, 0.3)',
  },

  active: {
    shadowColor: '#E6A64E',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 20,
    borderColor: 'rgba(230, 166, 78, 0.3)',
  },
});
