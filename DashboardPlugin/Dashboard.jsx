import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

/* Fallback Dashboard Plugin*/

const Profile = ({ dashboardPluginSettings, graphImage }) => (
  <SafeAreaView style={styles.safeArea}>
    <View style={styles.topSafeAreaBackground} />
    <StatusBar barStyle="light-content" />
    <ScrollView showsVerticalScrollIndicator={false}>
      {/* BLUE BACKGROUND BLOCK */}
      <View style={styles.blueBackground}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>Super</Text>
          <Text style={styles.accountNumber}>
            Account #: 01234567
          </Text>

          <Image
            source={graphImage}
            style={styles.graph}
            resizeMode="contain"
          />

          <View style={styles.rangeContainer}>
            {['1W', '1M', '3M', '6M', '1Y', '5Y', '10Y'].map((item) => (
              <TouchableOpacity key={item} style={styles.rangeItem}>
                <Text
                  style={[
                    styles.rangeText,
                    item === '1Y' && styles.activeRangeText,
                  ]}
                >
                  {item}
                </Text>
                {item === '1Y' && <View style={styles.activeIndicator} />}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      {/* WHITE CONTENT AREA */}
      <View style={styles.whiteArea}>
        {/* FLOATING CARD */}
        <View style={styles.card}>
          <Text style={styles.cardSubtitle}>
            Estimated total balance as of 14/01/2026
          </Text>

          <Text style={styles.balance}>$205,509.80</Text>

          {dashboardPluginSettings.balanceFYInfo.visible && (
            <View>
              <View style={styles.divider} />
              <Text style={styles.financialYear}>
                2025–26 Financial Year to Date
              </Text>
              <View style={styles.row}>
                <Text style={styles.label}>Contributions</Text>
                <Text style={styles.value}>$28,502.35</Text>
              </View>
              <View style={styles.row}>
                <Text style={styles.label}>Estimated returns</Text>
                <Text style={styles.value}>$29,490.34</Text>
              </View>
            </View>
          )}
        </View>

        {dashboardPluginSettings.accountActions.visible && (
          <TouchableOpacity style={styles.completionButton}>
            <Text style={styles.completionText}>
              Account completion (7 remaining)
            </Text>
          </TouchableOpacity>
        )}

        <View style={{ height: 40 }} />
      </View>

      {/* <-- ADD CONTRIBUTIONS CARD HERE --> */}
      {dashboardPluginSettings.contributionsCard.visible && (
        <View style={styles.contributionsSection}>
          <View style={styles.contributionsHeader}>
            <Text style={styles.contributionsTitle}>CONTRIBUTIONS</Text>
            <TouchableOpacity>
              <Text style={styles.contributionsManage}>Manage &gt;</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contributionsCard}>
            <Text style={styles.contributionsFY}>Contributions FY25/26</Text>
            <Text style={styles.contributionsAmount}>$28,502.35</Text>
            <TouchableOpacity style={styles.topUpButton}>
              <Text style={styles.topUpButtonText}>Top up your super</Text>
            </TouchableOpacity>
            <View style={styles.contributionsDivider} />
            <TouchableOpacity style={styles.latestContributionRow}>
              <Text style={styles.latestContributionText}>Latest employer contribution</Text>
              <Text style={styles.latestContributionValue}>$1,250.00 &gt;</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {/* <-- END CONTRIBUTIONS CARD --> */}
    </ScrollView>
  </SafeAreaView>
);

export default Profile;

const whiteBackgroundColour = '#f2f7ff'

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: whiteBackgroundColour,
  },
  topSafeAreaBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 300,  // Approximate height of the status bar / top safe area - 
    backgroundColor: '#003882',
    zIndex: -1,
  },
  blueBackground: {
    backgroundColor: '#003882',
    paddingBottom: 120, // 👈 THIS creates the halfway color change
  },
  headerContent: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 34,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 10,
  },
  accountNumber: {
    color: '#C9CCD1',
    fontSize: 16,
    marginTop: 5,
  },
  graph: {
    width: '100%',
    height: 180,
    marginTop: 25,
  },
  rangeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#1F4C8F',
    borderRadius: 30,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
  rangeItem: {
    alignItems: 'center',
    flex: 1,
  },
  rangeText: {
    color: '#AFC6E9',
    fontSize: 16,
  },
  activeRangeText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  activeIndicator: {
    marginTop: 6,
    width: 24,
    height: 4,
    backgroundColor: '#4ED0FF',
    borderRadius: 2,
  },
  whiteArea: {
    backgroundColor: whiteBackgroundColour,
    paddingTop: 0,
  },
  card: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginTop: -90, // 👈 THIS creates the halfway color change
    borderRadius: 20,
    padding: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  cardSubtitle: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6B7A90',
  },
  balance: {
    textAlign: 'center',
    fontSize: 36,
    fontWeight: '700',
    color: '#2C3E50',
    marginVertical: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#D6DCE5',
    marginVertical: 15,
  },
  financialYear: {
    fontSize: 16,
    color: '#6B7A90',
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#4A5A70',
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2C3E50',
  },
  completionButton: {
    backgroundColor: '#123F7D',
    marginHorizontal: 20,
    marginTop: 25,
    paddingVertical: 18,
    borderRadius: 20,
    alignItems: 'center',
  },
  completionText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },

  contributionsSection: {
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 20,
    gap: 10,
  },
  contributionsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  contributionsTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#4B5B7B', // dark blue-gray
  },
  contributionsManage: {
    color: '#0066FF', // bright blue
    fontWeight: '600',
    fontSize: 16,
  },
  contributionsCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#D6DCE5',
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
  },
  contributionsFY: {
    fontSize: 16,
    color: '#607089',
    textAlign: 'center',
  },
  contributionsAmount: {
    fontSize: 32,
    fontWeight: '700',
    color: '#4B5B7B',
    textAlign: 'center',
  },
  topUpButton: {
    backgroundColor: '#0066FF',
    borderRadius: 30,
    paddingVertical: 14,
    marginHorizontal: 30,
    alignItems: 'center',
  },
  topUpButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  contributionsDivider: {
    height: 1,
    backgroundColor: '#E6EBF5',
    marginVertical: 10,
  },
  latestContributionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  latestContributionText: {
    color: '#607089',
    fontSize: 16,
  },
  latestContributionValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#607089',
  },
});