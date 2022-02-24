import React, { useState } from 'react';
import { Dimensions, Platform, Alert } from 'react-native';


const { width, height } = Dimensions.get('window');
const baseWidth = 360;
const baseHeight = 700;

const scaleWidth = width / baseWidth;
const scaleHeight = height / baseHeight;
const scale = Math.min(scaleWidth, scaleHeight);

export const scaledSize = (size) => Math.ceil(size * scale);

/**
 * PLATFORM - CONSTANTS TO CHECK THE PLATFORM
 */
export const IS_IOS = Platform.OS === 'ios';
export const IS_ANDROID = Platform.OS === 'android';

/**
 * GET SIZE RELATIVE TO DEVICE DIMENSIONS
 * */
export const deviceRelativeWidth = (percent) => {
    return (width * percent) / 100;
};
export const deviceRelativeHeight = (percent) => {
    return (height * percent) / 100;
};