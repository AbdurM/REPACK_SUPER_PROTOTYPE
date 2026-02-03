import { StyleSheet, Text, View, FlatList, useColorScheme } from 'react-native';
import React from 'react';

const SAMPLE_TRANSACTIONS = [
  {
    id: '1',
    type: 'Employer Contribution',
    amount: 1250.0,
    date: '2 Feb 2025',
    description: 'Monthly SG contribution',
  },
  {
    id: '2',
    type: 'Personal Contribution',
    amount: 500.0,
    date: '1 Feb 2025',
    description: 'Voluntary contribution',
  },
  {
    id: '3',
    type: 'Insurance Premium',
    amount: -45.5,
    date: '1 Feb 2025',
    description: 'Life & TPD cover',
  },
  {
    id: '4',
    type: 'Administration Fee',
    amount: -12.0,
    date: '31 Jan 2025',
    description: 'Monthly admin fee',
  },
  {
    id: '5',
    type: 'Employer Contribution',
    amount: 1250.0,
    date: '2 Jan 2025',
    description: 'Monthly SG contribution',
  },
  {
    id: '6',
    type: 'Rollover',
    amount: 15000.0,
    date: '28 Dec 2024',
    description: 'From previous fund',
  },
];

const formatAmount = amount => {
  const formatted = Math.abs(amount).toLocaleString('en-AU', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return amount >= 0 ? `+$${formatted}` : `-$${formatted}`;
};

const TransactionItem = ({ item, isDark }) => {
  const isCredit = item.amount >= 0;
  const amountColor = isCredit ? '#22c55e' : '#ef4444';

  return (
    <View
      style={[styles.transactionCard, isDark && styles.transactionCardDark]}
    >
      <View style={styles.transactionLeft}>
        <Text
          style={[styles.typeText, isDark && styles.textDark]}
          numberOfLines={1}
        >
          {item.type}
        </Text>
        <Text style={[styles.dateText, isDark && styles.subtextDark]}>
          {item.date}
        </Text>
        {item.description && (
          <Text
            style={[styles.descriptionText, isDark && styles.subtextDark]}
            numberOfLines={1}
          >
            {item.description}
          </Text>
        )}
      </View>
      <Text style={[styles.amountText, { color: amountColor }]}>
        {formatAmount(item.amount)}
      </Text>
    </View>
  );
};

const TransactionsList = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      <View style={styles.header}>
        <Text style={[styles.title, isDark && styles.textDark]}>
          Abdur Transactions
        </Text>
        <Text style={[styles.subtitle, isDark && styles.subtextDark]}>
          Your superannuation activity Nathan
        </Text>
      </View>

      <FlatList
        data={SAMPLE_TRANSACTIONS}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TransactionItem item={item} isDark={isDark} />
        )}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => (
          <View style={[styles.separator, isDark && styles.separatorDark]} />
        )}
      />
    </View>
  );
};

export default TransactionsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  containerDark: {
    backgroundColor: '#0f172a',
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    letterSpacing: -0.5,
  },
  textDark: {
    color: '#f8fafc',
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
  subtextDark: {
    color: '#94a3b8',
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  transactionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  transactionCardDark: {
    backgroundColor: '#1e293b',
  },
  transactionLeft: {
    flex: 1,
    marginRight: 12,
  },
  typeText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#0f172a',
  },
  dateText: {
    fontSize: 13,
    color: '#64748b',
    marginTop: 2,
  },
  descriptionText: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  amountText: {
    fontSize: 16,
    fontWeight: '700',
  },
  separator: {
    height: 8,
    backgroundColor: 'transparent',
  },
  separatorDark: {
    backgroundColor: 'transparent',
  },
});
