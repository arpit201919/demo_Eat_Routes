import { Platform } from 'react-native';

export default {
    /**
     * primary font
     */
    regular: Platform.select({
        ios: 'Poppins-Regular',
        android: 'Poppins-Regular',
    }),

    /**
     * bold font
     */
    semiBold: Platform.select({
        ios: 'Poppins-SemiBold',
        android: 'Poppins-SemiBold',
    }),

    /**
     * medium font
     */
    medium: Platform.select({ ios: 'Poppins-Medium', android: 'Poppins-Medium' }),

    /**
     * light font
     */
    light: Platform.select({ ios: 'Poppins-Light', android: 'Poppins-Light' }),
};
