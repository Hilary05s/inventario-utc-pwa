import Dexie, { type Table } from 'dexie';

export interface OperacionPendiente {
  id?: number;
  tabla: string;
  accion: 'INSERT' | 'UPDATE';
  payload: Record<string, unknown>;
  creadoEn: string;
}

export class InventarioOfflineDB extends Dexie {
  colaSincronizacion!: Table<OperacionPendiente>;

  constructor() {
    super('InventarioUTCOffline');
    this.version(1).stores({
      colaSincronizacion: '++id, tabla, creadoEn',
    });
  }
}

export const offlineDb = new InventarioOfflineDB();