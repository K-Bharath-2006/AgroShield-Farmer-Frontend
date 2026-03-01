import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F0FDF4',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 40,
  },

  header: {
    fontSize: 22,
    fontWeight: '700',
    color: '#065F46',
    marginBottom: 20,
  },

  card: {
    borderRadius: 20,
    padding: 18,
    marginBottom: 20,
    elevation: 4,
  },

  overviewCard: {
    backgroundColor: '#ECFDF5',
  },

  weatherCard: {
    backgroundColor: '#EFF6FF',
  },

  satelliteCard: {
    backgroundColor: '#F5F3FF',
  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 12,
  },

  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
    marginTop: 6,
  },

  money: {
    fontSize: 16,
    fontWeight: '700',
    color: '#15803D',
  },

  risk: {
    fontSize: 16,
    fontWeight: '700',
    color: '#DC2626',
  },

  statusBadge: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },

  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  greenBadge: {
    backgroundColor: '#16A34A',
  },

  yellowBadge: {
    backgroundColor: '#F59E0B',
  },

  redBadge: {
    backgroundColor: '#DC2626',
  },

  timelineHeader: {
    fontSize: 18,
    fontWeight: '700',
    color: '#065F46',
    marginBottom: 10,
  },

  timelineItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 16,
    marginBottom: 12,
    elevation: 3,
  },

  timelineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#16A34A',
    marginRight: 12,
    marginTop: 6,
  },

  timelineStatus: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },

  timelineDate: {
    fontSize: 12,
    color: '#6B7280',
    marginTop: 4,
  },

  timelineNote: {
    fontSize: 13,
    color: '#374151',
    marginTop: 6,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0FDF4',
  },
});

export default styles;