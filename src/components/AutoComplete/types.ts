export type Results = {
  id: number;
  title: string;
};

export interface AutoCompleteProps {
  results: Results[] | [];
}
