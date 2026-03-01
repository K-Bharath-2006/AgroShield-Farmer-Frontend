/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';
import {getSingleCrop} from './utils';
import Toast from 'react-native-toast-message';
import styles from './style';

const CropDetails = () => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const {cropId} = route.params;
  const token = global.authToken || '';

  const [crop, setCrop] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrop = async () => {
      try {
        const data = await getSingleCrop(cropId, token);
        setCrop(data);
      } catch (error: any) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error?.message || 'Failed to load crop details',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchCrop();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#16A34A" />
      </View>
    );
  }

  if (!crop) return null;

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Back Arrow */}
      {/* <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backArrow}>← Back</Text>
      </TouchableOpacity> */}

      {/* Crop Title */}
      <Text style={styles.header}>{crop.cropType}</Text>

      {/* ===== Crop Info Card ===== */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Crop Information</Text>

        {/* STATUS INSIDE CARD */}
        <View style={styles.row}>
          <Text style={styles.label}>Status</Text>
          <View
            style={[
              styles.statusBadge,
              crop.status === 'ACTIVE'
                ? styles.activeBadge
                : styles.inactiveBadge,
            ]}>
            <Text
              style={[
                styles.statusText,
                crop.status === 'ACTIVE'
                  ? styles.activeText
                  : styles.inactiveText,
              ]}>
              {crop.status}
            </Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Season</Text>
          <View style={styles.seasonBadge}>
            <Text style={styles.seasonText}>{crop.season}</Text>
          </View>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Land Area</Text>
          <Text style={styles.value}>{crop.landAreaHectare} ha</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Sowing Date</Text>
          <Text style={styles.value}>
            {new Date(crop.sowingDate).toLocaleDateString()}
          </Text>
        </View>
      </View>

      {/* Claim Action */}
      {crop.claimAlreadyRaised ? (
        <TouchableOpacity
          style={styles.viewClaimButton}
          activeOpacity={0.85}
          onPress={() =>
            navigation.navigate('ClaimDetails', {
              claimId: crop.claimId,
            })
          }>
          <Text style={styles.viewClaimText}>
            View Raised Claim
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.claimButton}
          activeOpacity={0.85}
          onPress={() =>
            navigation.navigate('RaiseClaim', {cropId})
          }>
          <Text style={styles.claimText}>Raise Claim</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default CropDetails;