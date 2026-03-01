/* eslint-disable prettier/prettier */

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#064E3B', // Deep agricultural green
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },

  logo: {
    fontSize: 34,
    fontWeight: '800',
    color: '#FFFFFF',
    letterSpacing: 1,
    marginBottom: 12,
  },

  tagline: {
    fontSize: 15,
    color: '#D1FAE5', // Soft mint
    textAlign: 'center',
    lineHeight: 22,
  },
});

export default styles;
