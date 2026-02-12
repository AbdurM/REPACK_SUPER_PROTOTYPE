import { StyleSheet, Text, View, FlatList, useColorScheme } from 'react-native';
import React from 'react';

const DEFAULT_TRANSACTIONS = [];

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

const TransactionsList = ({
  content,
  transactions = DEFAULT_TRANSACTIONS,
  isHeaderVisible = true,
}) => {
  const isDark = useColorScheme() === 'dark';

  return (
    <View style={[styles.container, isDark && styles.containerDark]}>
      {isHeaderVisible ? (
        <View style={styles.header}>
          {content.title && <Text style={[styles.title, isDark && styles.textDark]}>{content.title}</Text> }
          {content.subtitle && <Text style={[styles.subtitle, isDark && styles.subtextDark]}>{content.subtitle}</Text> }
        </View>
      ) : null}

      <FlatList
        data={transactions}
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
    marginTop: 20,
    marginHorizontal: 5,
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
