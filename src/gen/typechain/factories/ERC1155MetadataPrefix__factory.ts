/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC1155MetadataPrefix } from "../ERC1155MetadataPrefix";

export class ERC1155MetadataPrefix__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _prefix: string,
    _includeAddress: boolean,
    _admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155MetadataPrefix> {
    return super.deploy(
      _prefix,
      _includeAddress,
      _admin,
      overrides || {}
    ) as Promise<ERC1155MetadataPrefix>;
  }
  getDeployTransaction(
    _prefix: string,
    _includeAddress: boolean,
    _admin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _prefix,
      _includeAddress,
      _admin,
      overrides || {}
    );
  }
  attach(address: string): ERC1155MetadataPrefix {
    return super.attach(address) as ERC1155MetadataPrefix;
  }
  connect(signer: Signer): ERC1155MetadataPrefix__factory {
    return super.connect(signer) as ERC1155MetadataPrefix__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155MetadataPrefix {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155MetadataPrefix;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_prefix",
        type: "string",
      },
      {
        internalType: "bool",
        name: "_includeAddress",
        type: "bool",
      },
      {
        internalType: "address",
        name: "_admin",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "_uriPrefix",
        type: "string",
      },
    ],
    name: "URIPrefixChanged",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "_addressToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "_bytesToString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_uriPrefix",
        type: "string",
      },
    ],
    name: "setUriPrefix",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256",
      },
    ],
    name: "uri",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "uriPrefix",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b5060405162000e3338038062000e33833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b5060408181526020830151920151600080546001600160a01b0319166001600160a01b03831690811782559395509093508392917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3507f532d3d5cdc662ef49a0347b14c41825ddd3fff96e47013e8602735db8ca7b904836040518080602001828103825283818151815260200191508051906020019080838360005b83811015620001a157818101518382015260200162000187565b50505050905090810190601f168015620001cf5780820380516001836020036101000a031916815260200191505b509250505060405180910390a18251620001f190600190602086019062000202565b5050151560f81b60805250620002ae565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200023a576000855562000285565b82601f106200025557805160ff191683800117855562000285565b8280016001018555821562000285579182015b828111156200028557825182559160200191906001019062000268565b506200029392915062000297565b5090565b5b8082111562000293576000815560010162000298565b60805160f81c610b67620002cc600039806102b45250610b676000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806388e9a48a1161005b57806388e9a48a1461018e578063893d20e8146101b4578063ca8bf2f7146101d8578063f2fde38b1461027e5761007d565b80630e89341c1461008257806362b99ad4146101145780637ec4a6591461011c575b600080fd5b61009f6004803603602081101561009857600080fd5b50356102a4565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100d95781810151838201526020016100c1565b50505050905090810190601f1680156101065780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61009f61048b565b61018c6004803603602081101561013257600080fd5b81019060208101813564010000000081111561014d57600080fd5b82018360208201111561015f57600080fd5b8035906020019184600183028401116401000000008311171561018157600080fd5b509092509050610518565b005b61009f600480360360208110156101a457600080fd5b50356001600160a01b03166105bc565b6101bc6105f8565b604080516001600160a01b039092168252519081900360200190f35b61009f600480360360208110156101ee57600080fd5b81019060208101813564010000000081111561020957600080fd5b82018360208201111561021b57600080fd5b8035906020019184600183028401116401000000008311171561023d57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610607945050505050565b61018c6004803603602081101561029457600080fd5b50356001600160a01b031661080e565b6060806102b0836108c4565b90507f0000000000000000000000000000000000000000000000000000000000000000156103c157806102e2336105bc565b6040516020018083805190602001908083835b602083106103145780518252601f1990920191602091820191016102f5565b6001836020036101000a038019825116818451168082178552505050505050905001807f400000000000000000000000000000000000000000000000000000000000000081525060010182805190602001908083835b602083106103895780518252601f19909201916020918201910161036a565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405290505b60018160405160200180838054600181600116156101000203166002900480156104225780601f10610400576101008083540402835291820191610422565b820191906000526020600020905b81548152906001019060200180831161040e575b5050825160208401908083835b6020831061044e5780518252601f19909201916020918201910161042f565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052915050919050565b60018054604080516020600284861615610100026000190190941693909304601f810184900484028201840190925281815292918301828280156105105780601f106104e557610100808354040283529160200191610510565b820191906000526020600020905b8154815290600101906020018083116104f357829003601f168201915b505050505081565b6000546001600160a01b0316331461054b5760405162461bcd60e51b815260040161054290610ad4565b60405180910390fd5b7f532d3d5cdc662ef49a0347b14c41825ddd3fff96e47013e8602735db8ca7b904828260405180806020018281038252848482818152602001925080828437600083820152604051601f909101601f19169092018290039550909350505050a16105b7600183836109d6565b505050565b60606105f28260405160200180826001600160a01b031660601b8152601401915050604051602081830303815290604052610607565b92915050565b6000546001600160a01b031690565b6060806040518060400160405280601081526020017f303132333435363738396162636465660000000000000000000000000000000081525090506060835160020260020167ffffffffffffffff8111801561066257600080fd5b506040519080825280601f01601f19166020018201604052801561068d576020820181803683370190505b5090507f3000000000000000000000000000000000000000000000000000000000000000816000815181106106be57fe5b60200101906001600160f81b031916908160001a9053507f78000000000000000000000000000000000000000000000000000000000000008160018151811061070357fe5b60200101906001600160f81b031916908160001a90535060005b84518110156108065782600486838151811061073557fe5b016020015182517fff0000000000000000000000000000000000000000000000000000000000000090911690911c60f81c90811061076f57fe5b602001015160f81c60f81b82826002026002018151811061078c57fe5b60200101906001600160f81b031916908160001a905350828582815181106107b057fe5b602091010151815160f89190911c600f169081106107ca57fe5b602001015160f81c60f81b8282600202600301815181106107e757fe5b60200101906001600160f81b031916908160001a90535060010161071d565b509392505050565b6000546001600160a01b031633146108385760405162461bcd60e51b815260040161054290610ad4565b6001600160a01b03811661085e5760405162461bcd60e51b815260040161054290610a77565b600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0383811691821780845560405192939116917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a350565b60408051604e808252608082019092526060918291906020820181803683370190505090508260005b8115610933578251600a808404936001840193919006916030830160f81b918691811061091657fe5b60200101906001600160f81b031916908160001a905350506108ed565b60608167ffffffffffffffff8111801561094c57600080fd5b506040519080825280601f01601f191660200182016040528015610977576020820181803683370190505b50905060005b828110156109cc57848160018503038151811061099657fe5b602001015160f81c60f81b8282815181106109ad57fe5b60200101906001600160f81b031916908160001a90535060010161097d565b5095945050505050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282610a0c5760008555610a52565b82601f10610a255782800160ff19823516178555610a52565b82800160010185558215610a52579182015b82811115610a52578235825591602001919060010190610a37565b50610a5e929150610a62565b5090565b5b80821115610a5e5760008155600101610a63565b6020808252602a908201527f4f776e61626c65237472616e736665724f776e6572736869703a20494e56414c60408201527f49445f4144445245535300000000000000000000000000000000000000000000606082015260800190565b60208082526026908201527f4f776e61626c65236f6e6c794f776e65723a2053454e4445525f49535f4e4f5460408201527f5f4f574e4552000000000000000000000000000000000000000000000000000060608201526080019056fea26469706673582212205be65b451d2501ad415259f90b2817aadc838165a7ccd1d775b9d3e9e522435864736f6c63430007040033";
