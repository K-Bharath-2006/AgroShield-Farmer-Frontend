/* eslint-disable prettier/prettier */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../router/types';
import {getClaimDetails} from './utils';
import styles from './style';
import Toast from 'react-native-toast-message';

type ClaimDetailsRouteProp = RouteProp<
  RootStackParamList,
  'ClaimDetails'
>;

const ClaimDetails = () => {
  const route = useRoute<ClaimDetailsRouteProp>();
  const {claimId} = route.params;
  const token = global.authToken || '';

  const [claim, setClaim] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await getClaimDetails(token, claimId);
        setClaim(data);
      } catch (error: any) {
        Toast.show({
          type: 'error',
          text1: 'Error',
          text2: error?.message || 'Failed to load details',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#16A34A" />
      </View>
    );
  }

  if (!claim) return null;

  const weather = claim.weatherAnalysis || {};
  const satellite = claim.satelliteAnalysis || {};

  return (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.header}>
      Claim #{claim.claimNumber}
    </Text>

    {/* ===== Overview ===== */}
    <View style={[styles.card, styles.overviewCard]}>
      <Text style={styles.sectionTitle}>Overview</Text>

      <View style={styles.rowBetween}>
        <Text style={styles.label}>Stage</Text>
        <Text style={styles.value}>{claim.stage}</Text>
      </View>

      <View style={styles.rowBetween}>
        <Text style={styles.label}>Status</Text>
        <View
          style={[
            styles.statusBadge,
            claim.status === 'Approved'
              ? styles.greenBadge
              : claim.status === 'Rejected'
              ? styles.redBadge
              : styles.yellowBadge,
          ]}>
          <Text style={styles.statusText}>{claim.status}</Text>
        </View>
      </View>

      <View style={styles.rowBetween}>
        <Text style={styles.label}>Approved Amount</Text>
        <Text style={styles.money}>
          ₹ {claim.approvedAmount ?? 0}
        </Text>
      </View>

      <View style={styles.rowBetween}>
        <Text style={styles.label}>Risk Score</Text>
        <Text style={styles.risk}>
          {claim.riskScore ?? 0}
        </Text>
      </View>
    </View>

    {/* ===== Weather ===== */}
    <View style={[styles.card, styles.weatherCard]}>
      <Text style={styles.sectionTitle}>Weather Analysis</Text>

      <Text style={styles.value}>
        🌧 Rainfall: {weather.rainfall ?? 'N/A'} mm
      </Text>
      <Text style={styles.value}>
        🌡 Max Temp: {weather.temperatureMax ?? 'N/A'} °C
      </Text>
      <Text style={styles.value}>
        🌡 Min Temp: {weather.temperatureMin ?? 'N/A'} °C
      </Text>
    </View>

    {/* ===== Satellite ===== */}
    <View style={[styles.card, styles.satelliteCard]}>
      <Text style={styles.sectionTitle}>Satellite NDVI</Text>

      <Text style={styles.value}>
        Before: {satellite.ndviBefore ?? 'N/A'}
      </Text>
      <Text style={styles.value}>
        After: {satellite.ndviAfter ?? 'N/A'}
      </Text>
      <Text style={styles.value}>
        Drop: {satellite.ndviDrop ?? 'N/A'}
      </Text>
    </View>

    {/* ===== Timeline ===== */}
    <Text style={styles.timelineHeader}>Claim Timeline</Text>

    {claim.timeline?.map((item: any, index: number) => (
      <View key={index} style={styles.timelineItem}>
        <View style={styles.timelineDot} />
        <View style={{flex: 1}}>
          <Text style={styles.timelineStatus}>{item.status}</Text>
          <Text style={styles.timelineDate}>
            {new Date(item.date).toLocaleString()}
          </Text>
          {item.note && (
            <Text style={styles.timelineNote}>{item.note}</Text>
          )}
        </View>
      </View>
    ))}
  </ScrollView>
);
};

export default ClaimDetails;