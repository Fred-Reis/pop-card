import AsyncStorage from "@react-native-async-storage/async-storage";
import CryptoJS from "react-native-crypto-js";

const encryptionKey = CryptoJS.lib.WordArray.random(256 / 8).toString();
const app_key = "@pop_bank/";

/**
 * Loads an encrypted value from AsyncStorage and decrypts it using AES encryption.
 *
 * @param {string} key - The key used to retrieve the encrypted value from AsyncStorage.
 * @return {Promise<unknown | null>} - A Promise that resolves to the decrypted value if it exists, or null if it does not.
 */
export async function loadEncryptedValue(key: string): Promise<unknown | null> {
  const encryptedKey = `${app_key}encrypted_${key}`;
  try {
    const almostThere = await AsyncStorage.getItem(encryptedKey);
    const decrypt = (encryptedValue: any) =>
      CryptoJS.AES.decrypt(encryptedValue, encryptionKey).toString(
        CryptoJS.enc.Utf8
      );

    if (almostThere) {
      return JSON.parse(decrypt(almostThere));
    }
  } catch {
    return null;
  }
}

/**
 * Saves an encrypted value to AsyncStorage using AES encryption.
 *
 * @param {string} key - The key used to store the encrypted value in AsyncStorage.
 * @param {unknown} value - The value to be encrypted and stored.
 * @return {Promise<boolean>} - A Promise that resolves to true if the value is successfully saved, false otherwise.
 */
export async function saveEncryptedValue(
  key: string,
  value: unknown
): Promise<boolean> {
  const encryptedKey = `${app_key}encrypted_${key}`;
  const valueToString = JSON.stringify(value);
  const encryptedValue = () =>
    CryptoJS.AES.encrypt(valueToString, encryptionKey).toString();

  try {
    await AsyncStorage.setItem(encryptedKey, encryptedValue());
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads a string from storage.
 *
 * @param key The key to fetch.
 */
export async function loadString(key: string): Promise<string | null> {
  try {
    return await AsyncStorage.getItem(`${app_key}${key}`);
  } catch {
    // not sure why this would fail... even reading the RN docs I'm unclear
    return null;
  }
}

/**
 * Saves a string to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function saveString(key: string, value: string): Promise<boolean> {
  try {
    await AsyncStorage.setItem(`${app_key}${key}`, value);
    return true;
  } catch {
    return false;
  }
}

/**
 * Loads something from storage and runs it thru JSON.parse.
 *
 * @param key The key to fetch.
 */
export async function load(key: string): Promise<unknown | null> {
  try {
    const almostThere = await AsyncStorage.getItem(`${app_key}${key}`);
    return JSON.parse(almostThere ?? "");
  } catch {
    return null;
  }
}

/**
 * Saves an object to storage.
 *
 * @param key The key to fetch.
 * @param value The value to store.
 */
export async function save(key: string, value: unknown): Promise<boolean> {
  try {
    await AsyncStorage.setItem(`${app_key}${key}`, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

/**
 * Removes something from storage.
 *
 * @param key The key to kill.
 */
export async function remove(key: string): Promise<void> {
  try {
    await AsyncStorage.removeItem(`${app_key}${key}`);
  } catch {}
}

/**
 * Burn it all to the ground.
 */
export async function clear(): Promise<void> {
  try {
    await AsyncStorage.clear();
  } catch {}
}
