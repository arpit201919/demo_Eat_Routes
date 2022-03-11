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

export const EmailRegExp = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/,
);

export const PhoneRegExp = new RegExp(
    /^\+([0-9]{1,3}|[0-9]{1,2}\-[0-9]{1,4})[0-9]{10,11}$/m,
);