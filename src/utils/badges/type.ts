// Type definitions for badge data
export type RawSnapshotPoint = {
  User: string;
  holderPoints: number;
  delegatePoints: number;
  holderAmount: number;
  delegateAmount: number;
  // recipientsPoints: 0 | 1 | '0' | '1';
  badgeholderPoints: 0 | 1 | '0' | '1';
  holderType:
    | 'Bronze'
    | 'Diamond'
    | 'Platinum'
    | 'Gold'
    | 'Silver'
    | 'Whale'
    | null
    | 'null';
  delegateType:
    | 'Bronze'
    | 'Diamond'
    | 'Platinum'
    | 'Gold'
    | 'Silver'
    | 'Whale'
    | null
    | 'null';
};
