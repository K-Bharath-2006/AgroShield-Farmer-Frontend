/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import styles from './style';

const FlowStep = ({
  number,
  text,
  isLast = false,
}: {
  number: string;
  text: string;
  isLast?: boolean;
}) => {
  return (
    <View style={styles.flowRow}>
      <View style={styles.flowLeft}>
        <View style={styles.numberBox}>
          <Text style={styles.numberText}>{number}</Text>
        </View>
        {!isLast && <View style={styles.line} />}
      </View>

      <View style={styles.flowContent}>
        <Text style={styles.flowTitle}>{text}</Text>
      </View>
    </View>
  );
};

const SchemeDetails = () => {
  const openWebsite = () => {
    Linking.openURL('https://pmfby.gov.in');
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={{paddingBottom: 90}}>

      <Text style={styles.header}>
        PMFBY & AgroShield Digital Insurance
      </Text>

      {/* ================= OVERVIEW ================= */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Scheme Overview</Text>

        <Text style={styles.paragraph}>
          Pradhan Mantri Fasal Bima Yojana (PMFBY) provides financial
          protection to farmers against crop losses due to natural
          calamities, pests, and diseases. The scheme ensures income
          stability and reduces agricultural risk.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.smallHeading}>Premium Structure</Text>
        <Text style={styles.premium}>Kharif Crops – 2%</Text>
        <Text style={styles.premium}>Rabi Crops – 1.5%</Text>
        <Text style={styles.premium}>Commercial / Horticulture – 5%</Text>
      </View>

      {/* ================= OFFICIAL FLOW ================= */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Official PMFBY Claim Flow</Text>

        <FlowStep number="01" text="Crop Enrollment under PMFBY" />
        <FlowStep number="02" text="Premium Payment" />
        <FlowStep number="03" text="Crop Damage Occurs" />
        <FlowStep number="04" text="Farmer Intimation within 72 Hours" />
        <FlowStep number="05" text="Field Survey & Assessment" />
        <FlowStep number="06" text="Compensation Credited to Bank" isLast />
      </View>

      {/* ================= AGROSHIELD FLOW ================= */}
      <View style={[styles.card, styles.agroCard]}>
        <Text style={styles.sectionTitle}>AgroShield Smart Flow</Text>

        <FlowStep number="01" text="Geo-tagged Crop Registration" />
        <FlowStep number="02" text="Baseline Crop Image Capture" />
        <FlowStep number="03" text="Digital Premium Integration" />
        <FlowStep number="04" text="Geo-tagged Claim Submission" />
        <FlowStep number="05" text="AI Damage Analysis" />
        <FlowStep number="06" text="Weather & NDVI Validation" />
        <FlowStep number="07" text="Automated Risk Score Generation" />
        <FlowStep number="08" text="Digital Claim Report for Review" isLast />
      </View>

      {/* ================= BENEFITS ================= */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Why AgroShield?</Text>

        <Text style={styles.benefit}>• AI-powered crop damage detection</Text>
        <Text style={styles.benefit}>• Satellite-based crop health validation</Text>
        <Text style={styles.benefit}>• Weather risk cross-verification</Text>
        <Text style={styles.benefit}>• Transparent claim tracking</Text>
        <Text style={styles.benefit}>• Faster digital claim processing</Text>
      </View>

      {/* ================= BUTTON ================= */}
      <TouchableOpacity
        style={styles.linkButton}
        onPress={openWebsite}>
        <Text style={styles.linkText}>
          Visit Official PMFBY Website
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default SchemeDetails;