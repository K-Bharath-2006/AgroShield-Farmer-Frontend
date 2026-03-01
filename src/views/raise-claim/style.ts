/* eslint-disable prettier/prettier */

import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  /* ================= SCREEN ================= */
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: '#F8FAFC',
  },

  /* ================= HEADER ================= */
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 6,
  },

  locationText: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 20,
  },

  /* ================= IMAGE GRID ================= */
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 14,
  },

  imagePreview: {
    width: 100,
    height: 100,
    borderRadius: 14,
    marginRight: 10,
    marginBottom: 10,
  },

  removeImage: {
    position: 'absolute',
    top: 6,
    right: 6,
    backgroundColor: '#DC2626',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },

  removeImageText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },

  /* ================= ADD PHOTO BUTTON ================= */
  addPhotoButton: {
    height: 54,
    borderRadius: 14,
    backgroundColor: '#ECFDF5',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#BBF7D0',
  },

  addPhotoText: {
    color: '#065F46',
    fontWeight: '600',
    fontSize: 14,
  },

  /* ================= INPUT ================= */
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 14,
    color: '#0F172A',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  /* ================= SELECTOR ================= */
  selector: {
    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 14,
    paddingVertical: 16,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
  },

  placeholderText: {
    color: '#94A3B8',
    fontSize: 14,
  },

  selectedText: {
    color: '#0F172A',
    fontWeight: '600',
    fontSize: 14,
  },

  /* ================= SUBMIT BUTTON ================= */
  submitButton: {
    backgroundColor: '#15803D',
    paddingVertical: 18,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#15803D',
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },

  submitText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
    letterSpacing: 0.5,
  },

  /* ================= BOTTOM SHEET ================= */

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(15, 23, 42, 0.35)',
    justifyContent: 'flex-end',
  },

  bottomSheet: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 25,
    maxHeight: '80%',
  },

  modalTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#065F46',
    marginBottom: 16,
  },

  groupSection: {
    marginBottom: 18,
  },

  groupTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },

  /* ================= MODAL ITEMS ================= */

  modalItem: {
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 14,
    marginBottom: 8,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  /* 🔥 Light Green Selected */
  modalItemSelected: {
    backgroundColor: '#ECFDF5', // very light green
    borderColor: '#16A34A',
  },

  modalItemText: {
    fontSize: 14,
    color: '#0F172A',
    fontWeight: '500',
  },

  modalItemTextSelected: {
    color: '#065F46',
    fontWeight: '700',
  },

  sheetClose: {
    marginTop: 14,
    backgroundColor: '#F1F5F9',
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: 'center',
  },

  sheetCloseText: {
    fontWeight: '600',
    color: '#111827',
  },
});
