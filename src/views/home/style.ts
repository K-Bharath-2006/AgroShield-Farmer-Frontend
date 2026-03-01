import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  /* ===== CONTAINER ===== */
  container: {
    flexGrow: 1,
    backgroundColor: '#F1F8F4', // cleaner soft green
    paddingHorizontal: 20,
    paddingTop: 25,
    paddingBottom: 50,
  },

  /* ===== HEADER ===== */
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 22,
  },

  welcomeText: {
    fontSize: 14,
    color: '#64748B',
  },

  userName: {
    fontSize: 22,
    fontWeight: '700',
    color: '#065F46',
    marginTop: 4,
  },

  menuButton: {
    padding: 8,
  },

  menuIcon: {
    fontSize: 24,
    color: '#065F46',
  },

  /* ===== HERO CARD ===== */
  heroCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 22,
    marginBottom: 28,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },

  heroTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#065F46',
    marginBottom: 6,
  },

  heroSubtitle: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 20,
  },

  /* ===== SECTION TITLE ===== */
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#065F46',
    marginBottom: 14,
  },

  /* ===== GRID ===== */
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  gridCard: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    paddingVertical: 22,
    paddingHorizontal: 15,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },

  gridIcon: {
    fontSize: 28,
    marginBottom: 10,
  },

  gridText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#1F2937',
    textAlign: 'center',
  },
  gridCardFull: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingVertical: 26,
    paddingHorizontal: 15,
    marginBottom: 18,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 4,
  },
  /* ===== WEATHER CARD ===== */
  weatherCard: {
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
  },

  /* --- Weather Header (Title + Refresh) --- */
  weatherHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },

  weatherTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
  },

  refreshButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#E6F4EA',
    justifyContent: 'center',
    alignItems: 'center',
  },

  weatherRow: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 8,
  },

  /* ===== ALERT BADGE ===== */
  alertBadge: {
    marginTop: 16,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },

  alertText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '600',
  },

  alertGreen: {
    backgroundColor: '#16A34A', // Safe
  },

  alertYellow: {
    backgroundColor: '#F59E0B', // Moderate
  },

  alertRed: {
    backgroundColor: '#DC2626', // High Risk
  },

  /* ===== MENU MODAL ===== */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.25)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },

  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginTop: 70,
    marginRight: 15,
    width: 210,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },

  menuItem: {
    paddingVertical: 14,
    paddingHorizontal: 18,
  },

  menuText: {
    fontSize: 15,
    color: '#111827',
  },
});

export default styles;
