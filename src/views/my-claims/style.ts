import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#065F46',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 18,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },

  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },

  claimNumber: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
  },

  meta: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 6,
  },

  date: {
    fontSize: 12,
    color: '#6B7280',
  },

  viewMore: {
    marginTop: 10,
    fontSize: 13,
    fontWeight: '600',
    color: '#16A34A',
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },

  greenBadge: {backgroundColor: '#16A34A'},
  redBadge: {backgroundColor: '#DC2626'},
  yellowBadge: {backgroundColor: '#F59E0B'},

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  emptyContainer: {
    marginTop: 40,
    alignItems: 'center',
  },

  emptyText: {
    color: '#6B7280',
    fontSize: 14,
  },
});

export default styles;