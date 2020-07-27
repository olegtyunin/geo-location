import { IInfoWindowProps } from 'google-maps-react';

export interface IAppProps  extends Partial<IInfoWindowProps> {}

export interface ICoords {
  latitude: number,
  longitude: number,
}