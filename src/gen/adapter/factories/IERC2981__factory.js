"use strict";
/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
exports.__esModule = true;
exports.IERC2981__factory = void 0;
var ethers_1 = require("ethers");
var IERC2981__factory = /** @class */ (function () {
    function IERC2981__factory() {
    }
    IERC2981__factory.connect = function (address, signerOrProvider) {
        return new ethers_1.Contract(address, _abi, signerOrProvider);
    };
    return IERC2981__factory;
}());
exports.IERC2981__factory = IERC2981__factory;
var _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_tokenId",
                type: "uint256"
            },
            {
                internalType: "uint256",
                name: "_salePrice",
                type: "uint256"
            },
        ],
        name: "royaltyInfo",
        outputs: [
            {
                internalType: "address",
                name: "receiver",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "royaltyAmount",
                type: "uint256"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes4",
                name: "_interfaceId",
                type: "bytes4"
            },
        ],
        name: "supportsInterface",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            },
        ],
        stateMutability: "view",
        type: "function"
    },
];