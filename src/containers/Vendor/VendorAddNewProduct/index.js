import React, { useEffect, useState } from "react";
import { View, Text, StatusBar, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import { Button } from "react-native-elements";
import { showMessage } from "react-native-flash-message";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import CustomHeader from "../../../components/CustomHeader";
import FloatingTextInput from "../../../components/FloatingTextInput";
import { addNewProductApi, getSupplierProductListService } from "../../../services/common";
import { callVendorAddNewProduct } from "../../../store/eatRoutesSlice";
import { scaledSize } from "../../../utils";
import { getData } from "../../../utils/asyncStorage";
import colors from "../../../utils/theme/colors";
import { styles } from "./styles";

const VendorAddNewProduct = ({ navigation }) => {

    const categories = [
        {
            id: 1,
            category_name: 'category 1',
            availableSize: ['S', 'M', 'L'],
            isSelected: false,
        },
        {
            id: 2,
            category_name: 'category 2',
            availableSize: ['38', '39', '40', '41', '42', '43'],
            isSelected: false,
        },
        {
            id: 3,
            category_name: 'category 3',
            availableSize: ['38', '39', '40', '41', '42', '43'],
            isSelected: false,
        },
        {
            id: 4,
            category_name: 'category 4',
            availableSize: ['38', '39', '40', '41', '42', '43'],
            isSelected: false,
        },
        {
            id: 5,
            category_name: 'category 5',
            availableSize: ['38', '39', '40', '41', '42', '43'],
            isSelected: false,
        },
    ];

    const availableSizes = [
        { id: 1, title: '38', isSelected: false },
        { id: 2, title: '39', isSelected: false },
        { id: 3, title: '40', isSelected: false },
        { id: 4, title: '41', isSelected: false },
        { id: 5, title: '42', isSelected: false },
        { id: 6, title: '43', isSelected: false },
    ];

    const dispatch = useDispatch()
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
    const [flavour, setFlavour] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState(categories);
    const [sizes, setSizes] = useState(availableSizes);

    const onCategorySelect = (id) => {
        const tempArray = [...category]
        for (let data of tempArray) {
            if (data.id == id) {
                data.isSelected = (data.isSelected === false) ? true : false
            }
        }
        setCategory(tempArray)
    }

    const onSizeSelect = (id) => {
        const tempArray = [...sizes]
        for (let data of tempArray) {
            if (data.id == id) {
                data.isSelected = (data.isSelected === false) ? true : false
            }
        }
        setSizes(tempArray)
    }

    const onAddNewProduct = async () => {
        const data = {
            name: name,
            sku: flavour,
            description: description,
            categories: quantity
        }

        dispatch(callVendorAddNewProduct(data))
    }

    return (
        <View style={styles.container}>
            <SafeAreaView
                edges={["top", "left", "right"]}
                style={{ flex: 1 }}>
                <StatusBar
                    backgroundColor={colors.primary}
                    barStyle="dark-content"
                />
                <CustomHeader
                    titleText="Add new Products"
                />
                <View style={styles.viewStyle}>
                    {loading ? <ActivityIndicator
                        size={"large"}
                        color={colors.primary}
                    /> : null}
                    <FloatingTextInput
                        label="Name"
                        value={name}
                        onChangeText={(text) => setName(text)}
                    />
                    <FloatingTextInput
                        label="Available Quantity"
                        value={quantity}
                        onChangeText={(text) => setQuantity(text)}
                    />
                    <FloatingTextInput
                        label="Flavour"
                        value={flavour}
                        onChangeText={(text) => setFlavour(text)}
                    />
                    <FloatingTextInput
                        label="Description"
                        value={description}
                        onChangeText={(text) => setDescription(text)}
                    />
                    <View>
                        <FlatList
                            data={category}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={[styles.quantityCont, { backgroundColor: item.isSelected ? colors.primary : colors.black_faded, }]}
                                        onPress={() => onCategorySelect(item.id)}
                                    >
                                        <Text style={{ fontSize: 16 }} >{item.category_name}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                    <View style={{ marginVertical: scaledSize(20) }}>
                        <FlatList
                            data={sizes}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item, index) => item + index}
                            renderItem={({ item, index }) => {
                                return (
                                    <TouchableOpacity
                                        style={[styles.sizeCont, { backgroundColor: item.isSelected ? colors.primary : colors.black_faded, }]}
                                        onPress={() => onSizeSelect(item.id)}
                                    >
                                        <Text style={{ fontSize: 16 }} >{item.title}</Text>
                                    </TouchableOpacity>
                                )
                            }}
                        />
                    </View>
                    <Button
                        title={"Add new product"}
                        onPress={() => onAddNewProduct()}
                    />
                </View>
            </SafeAreaView>
        </View>

    )
}

export default VendorAddNewProduct;