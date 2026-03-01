import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  /* ===== Screen Layout ===== */
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: '#F4F7FA',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    paddingVertical: 32,
    paddingHorizontal: 24,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.05,
    shadowRadius: 20,
    elevation: 10,
  },

  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    color: '#1F2937',
    marginBottom: 30,
  },

  /* ===== Modern Input Fields ===== */
  input: {
    borderWidth: 1.2,
    borderColor: '#E5E7EB',
    borderRadius: 18,
    paddingHorizontal: 18,
    paddingVertical: 16,
    fontSize: 15,
    color: '#111827',
    backgroundColor: '#FFFFFF',
    marginBottom: 18,

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },

  disabledInput: {
    backgroundColor: '#F3F4F6',
    color: '#6B7280',
  },

  /* ===== Selector Field (Tap to Open Bottom Sheet) ===== */
  selector: {
    borderWidth: 1.2,
    borderColor: '#E5E7EB',
    borderRadius: 18,
    paddingVertical: 16,
    paddingHorizontal: 18,
    marginBottom: 18,
    backgroundColor: '#FFFFFF',

    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 2,
  },

  placeholderText: {
    color: '#9CA3AF',
    fontSize: 15,
  },

  selectedText: {
    color: '#111827',
    fontSize: 15,
  },

  /* ===== Bottom Sheet Overlay ===== */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
  },

  /* ===== Bottom Sheet Container ===== */
  bottomSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 25,
    maxHeight: '70%',
  },

  /* Optional drag handle */
  sheetHandle: {
    alignSelf: 'center',
    width: 50,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#D1D5DB',
    marginBottom: 15,
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 15,
    textAlign: 'center',
  },

  modalItem: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },

  modalItemText: {
    fontSize: 16,
    color: '#1F2937',
  },

  sheetClose: {
    marginTop: 15,
    backgroundColor: '#F3F4F6',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },

  sheetCloseText: {
    color: '#111827',
    fontWeight: '600',
    fontSize: 15,
  },

  /* ===== Emerald Register Button ===== */
  registerButton: {
    backgroundColor: '#10B981',
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    marginTop: 14,

    shadowColor: '#10B981',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.25,
    shadowRadius: 15,
    elevation: 10,
  },

  registerButtonText: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '600',
    letterSpacing: 0.6,
  },
});

export default styles;
