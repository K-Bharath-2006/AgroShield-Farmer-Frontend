import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0FDF4', // Very soft green background
    justifyContent: 'center',
    paddingHorizontal: 28,
  },

  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#064E3B',
    textAlign: 'center',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 15,
    color: '#4B5563',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 22,
  },

  loginButton: {
    backgroundColor: '#10B981', // Professional green
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',

    shadowColor: '#10B981',
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
