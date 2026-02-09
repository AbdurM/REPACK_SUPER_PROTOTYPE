const transactionPresets = [
  { type: 'Employer Contribution', amount: 1250.0 },
  { type: 'Personal Contribution', amount: 500.0 },
  { type: 'Insurance Premium', amount: -45.5 },
  { type: 'Administration Fee', amount: -12.0 },
  { type: 'Rollover', amount: 15000.0 },
  { type: 'Investment Return', amount: 320.75 },
];

let nextIndex = 0;

export const getNextPreset = () => {
  const preset = transactionPresets[nextIndex];
  nextIndex = (nextIndex + 1) % transactionPresets.length;
  return preset;
};
