import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 22,
    paddingTop: 24,
  },

  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 28,
  },

  card: {
    backgroundColor: '#FFFFFF',
    padding: 24,
    borderRadius: 14,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  agroCard: {
    borderWidth: 1,
    borderColor: '#15803D',
    backgroundColor: '#FAFFFB',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#14532D',
    marginBottom: 18,
  },

  paragraph: {
    fontSize: 14,
    color: '#334155',
    lineHeight: 22,
  },

  smallHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: '#475569',
    marginBottom: 10,
  },

  premium: {
    fontSize: 14,
    color: '#0F172A',
    marginBottom: 6,
  },

  benefit: {
    fontSize: 14,
    color: '#0F172A',
    marginBottom: 10,
  },

  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 18,
  },

  /* ===== FLOW DESIGN ===== */

  flowRow: {
    flexDirection: 'row',
    marginBottom: 28,
  },

  flowLeft: {
    width: 50,
    alignItems: 'center',
  },

  numberBox: {
    width: 36,
    height: 36,
    borderRadius: 8,
    backgroundColor: '#15803D',
    justifyContent: 'center',
    alignItems: 'center',
  },

  numberText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },

  line: {
    width: 1.5,
    flex: 1,
    backgroundColor: '#E2E8F0',
    marginTop: 6,
  },

  flowContent: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'center',
  },

  flowTitle: {
    fontSize: 15,
    color: '#0F172A',
    fontWeight: '500',
    lineHeight: 22,
  },

  /* ===== BUTTON ===== */

  linkButton: {
    backgroundColor: '#15803D',
    paddingVertical: 18,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 60,
  },

  linkText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
