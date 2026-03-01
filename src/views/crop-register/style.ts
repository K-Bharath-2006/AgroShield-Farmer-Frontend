import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  /* ---------- SCREEN ---------- */
  container: {
    flex: 1,
    padding: 18,
    backgroundColor: '#F4F7F9',
  },

  /* ---------- HEADER ---------- */
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 6,
  },

  locationText: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 18,
  },

  /* ---------- IMAGE GRID ---------- */
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
  },

  imagePreview: {
    width: 95,
    height: 95,
    borderRadius: 12,
    marginRight: 10,
    marginBottom: 10,
  },

  addPhotoButton: {
    height: 55,
    borderRadius: 12,
    backgroundColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CBD5E1',
  },

  addPhotoText: {
    color: '#334155',
    fontWeight: '600',
    fontSize: 14,
  },

  /* ---------- INPUT FIELDS ---------- */
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 14,
    color: '#111827',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  /* ---------- SELECTOR (Dropdown Trigger) ---------- */
  selector: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
  },

  placeholderText: {
    color: '#64748B',
    fontSize: 14,
  },

  selectedText: {
    color: '#111827',
    fontSize: 14,
    fontWeight: '600',
  },

  /* ---------- MODAL OVERLAY ---------- */
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.35)',
    justifyContent: 'flex-end',
  },

  /* ---------- BOTTOM SHEET ---------- */
  bottomSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    maxHeight: '75%',
  },

  /* ---------- MODAL ITEM ---------- */
  modalItem: {
    paddingVertical: 14,
    paddingHorizontal: 14,
    borderRadius: 12,
    marginBottom: 8,
    backgroundColor: '#F1F5F9',
  },

  modalItemText: {
    fontSize: 15,
    color: '#1E293B',
    fontWeight: '500',
  },

  /* ---------- CLOSE BUTTON ---------- */
  sheetClose: {
    marginTop: 10,
    backgroundColor: '#E2E8F0',
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },

  sheetCloseText: {
    fontWeight: '600',
    color: '#1E293B',
    fontSize: 14,
  },

  /* ---------- SUBMIT ---------- */
  submitButton: {
    backgroundColor: '#15803D',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});