
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export enum Language {
    EN_US = "EN_US",
    JA_JP = "JA_JP",
    ZH_CN = "ZH_CN"
}

export enum Currency {
    AED = "AED",
    CNY = "CNY",
    GBP = "GBP",
    HKD = "HKD",
    IDR = "IDR",
    INR = "INR",
    JPY = "JPY",
    KHR = "KHR",
    KWD = "KWD",
    MMK = "MMK",
    MYR = "MYR",
    PHP = "PHP",
    SAR = "SAR",
    SGD = "SGD",
    THB = "THB",
    TWD = "TWD",
    USD = "USD",
    VND = "VND"
}

export enum Timezone {
    ASIA_TOKYO = "ASIA_TOKYO",
    ASIA_SINGAPORE = "ASIA_SINGAPORE",
    ASIA_BANGKOK = "ASIA_BANGKOK",
    ASIA_YANGON = "ASIA_YANGON",
    ASIA_DHAKA = "ASIA_DHAKA",
    ASIA_KOLKATA = "ASIA_KOLKATA"
}

export enum Country {
    JP = "JP"
}

export enum Provider {
    AMAZON = "AMAZON"
}

export interface StatusOk {
    ok: boolean;
}

export interface FieldValidity {
    ok: boolean;
    fields?: string[];
}

export interface IdName {
    id: string;
    name: string;
}

export interface Id {
    id: string;
}

export interface Path {
    url: string;
}

export interface Time {
    hour: number;
    minute: number;
}

export interface Address {
    country: Country;
    regionId: string;
    city: string;
    postalCode: string;
    addressFirst: string;
    addressSecond: string;
}

export interface FullAddress {
    firstName: string;
    lastName: string;
    companyName: string;
    country: Country;
    regionId: string;
    city: string;
    postalCode: string;
    addressFirst: string;
    addressSecond: string;
    email: string;
    phone: string;
}

export interface Name {
    firstName: string;
    lastName: string;
}

export interface User {
    id: string;
    email: string;
    provider?: Provider;
}

export interface IMutation {
    deleteUser(id: string): StatusOk | Promise<StatusOk>;
}

export interface IQuery {
    getUser(id: string): User | Promise<User>;
}
