import { ReactNode } from 'react';

export type Children = ReactNode | ReactNode[];
export enum STATUS {
  loading,
  error,
  success,
  idle,
  preview,
}
export interface ICarCategory {
  title: string;
  src: string;
}
