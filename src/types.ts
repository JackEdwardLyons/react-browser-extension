// API data from CarbonAPI
export interface emissionDataType {
  bytes: number;
  cleanerThan: number;
  green: boolean;
  id: number;
  url: string;
  timestamp: number;
  statistics: {
    adjustedBytes: number;
    co2: {
      grid: {
        grams: number;
        litres: number;
      };
      renewable: {
        grams: number;
        litres: number;
      };
    };
    energy: number;
  };
  error?: string;
}
