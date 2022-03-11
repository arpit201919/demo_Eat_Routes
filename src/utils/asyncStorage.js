import AsyncStorage from "@react-native-async-storage/async-storage";

const setData = async (key, value) => {
    await AsyncStorage.setItem(key, value)
};

const getData = async (key) => {
    const value = AsyncStorage.getItem(key)
    return value;
};

const removeData = async (key) => {
    await AsyncStorage.removeItem(key)
};

export {
    setData,
    getData,
    removeData
}