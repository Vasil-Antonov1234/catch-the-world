import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import colors from '../../theme/colors.js';

export default function RatingSlider({ value, onChange }) {
  return (
    <View style={styles.container}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>Rating</Text>
        <Text style={styles.value}>★ {value.toFixed(1)}</Text>
      </View>

      <Slider
        value={value}
        onValueChange={onChange}
        minimumValue={1}
        maximumValue={5}
        step={0.5}
        minimumTrackTintColor={colors.accent}
        maximumTrackTintColor={colors.textSecondary}
        thumbTintColor={colors.accent}
        style={styles.slider}
      />

      <View style={styles.scale}>
        <Text style={styles.scaleText}>1</Text>
        <Text style={styles.scaleText}>5</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    color: colors.textSecondary,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.golden,
  },
  scale: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 4,
  },
  scaleText: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  slider: {
    width: "71%",
    alignSelf: "center",
    height: 48,
    transform: [{ scaleX: 1.4}, { scaleY: 1.4 }],
    marginVertical: 8
  }
});