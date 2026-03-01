import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F7F5',
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    fontSize: 20,
    fontWeight: '700',
    color: '#065F46',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
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
    alignItems: 'center',
  },

  cropType: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
  },

  badge: {
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },

  badgeText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#15803D',
  },

  cardBody: {
    marginTop: 10,
  },

  meta: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 6,
  },

  date: {
    fontSize: 13,
    color: '#6B7280',
  },

  viewMore: {
    marginTop: 12,
    fontSize: 13,
    fontWeight: '600',
    color: '#16A34A',
  },

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
    fontSize: 14,
    color: '#6B7280',
  },
});

export default styles;