import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },

  backArrow: {
    fontSize: 14,
    color: '#065F46',
    marginBottom: 10,
  },

  header: {
    fontSize: 24,
    fontWeight: '700',
    color: '#065F46',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 14,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    alignItems: 'center',
  },

  label: {
    fontSize: 14,
    color: '#6B7280',
  },

  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111827',
  },

  /* STATUS BADGE */
  statusBadge: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
  },

  activeBadge: {
    backgroundColor: '#DCFCE7',
  },

  inactiveBadge: {
    backgroundColor: '#FEE2E2',
  },

  statusText: {
    fontSize: 12,
    fontWeight: '600',
  },

  activeText: {
    color: '#166534',
  },

  inactiveText: {
    color: '#991B1B',
  },

  seasonBadge: {
    backgroundColor: '#DBEAFE',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },

  seasonText: {
    color: '#1D4ED8',
    fontWeight: '600',
    fontSize: 12,
  },

  claimButton: {
    backgroundColor: '#16A34A',
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 6,
  },

  claimText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  viewClaimButton: {
    backgroundColor: '#2563EB',
    paddingVertical: 16,
    borderRadius: 18,
    alignItems: 'center',
    marginBottom: 15,
    elevation: 6,
  },

  viewClaimText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
  },
});

export default styles;