import AsyncStorage from '@react-native-async-storage/async-storage';
import { STORAGE_KEY } from '../utils/constants';

export const asyncStorageService = {
  /**
   * Salva os dados no AsyncStorage
   * @param data - Objeto ou array de palavras a serem salvas
   */
  async saveData(data) {
    try {
      const jsonValue = JSON.stringify(data);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
    } catch (error) {
      throw new Error('Erro ao salvar os dados:', error);
    }
  },

  /**
   * Busca os dados armazenados no AsyncStorage
   * @returns Retorna os dados armazenados ou null se não existirem
   * @example { data: ['word01', 'word02', 'word03'], expires: '11-02-2025 19:00'}
   */
  async getData() {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
      throw new Error('Erro ao recuperar os dados:', error);
    }
  },

  /**
   * Remove os dados armazenados no AsyncStorage
   */
  async removeData() {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      throw new Error('Erro ao remover os dados:', error);
    }
  },

  /**
   * Adiciona um novo item ao array existente dentro do AsyncStorage
   * @param newItem - Novo item a ser adicionado ao array
   */
  async addItem(newItem) {
    try {
      const existingData = await AsyncStorageService.getData();
      const updatedData = existingData ? [...existingData, newItem] : [newItem];
      await AsyncStorageService.saveData(updatedData);
    } catch (error) {
      throw new Error('Erro ao adicionar item:', error);
    }
  }
};
