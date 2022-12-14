export const tokensInfoLength = 7;
export const contractAddress = "0xA3c359D4689d876160103204df2409cF878bE03e"
export const contractABI = [{
    "inputs": [{
        "internalType": "string",
        "name": "_name",
        "type": "string"
    }, {"internalType": "address", "name": "_mmpro", "type": "address"}, {
        "internalType": "address",
        "name": "_busd",
        "type": "address"
    }, {"internalType": "address", "name": "_swapRouter", "type": "address"}, {
        "internalType": "address",
        "name": "__owner",
        "type": "address"
    }], "stateMutability": "nonpayable", "type": "constructor"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "account", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }, {"indexed": false, "internalType": "bool", "name": "approved", "type": "bool"}],
    "name": "ApprovalForAll",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "uint256", "name": "tokenId", "type": "uint256"}, {
        "indexed": true,
        "internalType": "address",
        "name": "minter",
        "type": "address"
    }, {"indexed": false, "internalType": "uint256", "name": "mmproReceived", "type": "uint256"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "busdAllocated",
        "type": "uint256"
    }],
    "name": "MintAndAllocate",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "OwnershipTransferred",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "operator", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
    }, {"indexed": false, "internalType": "uint256[]", "name": "values", "type": "uint256[]"}],
    "name": "TransferBatch",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": true, "internalType": "address", "name": "operator", "type": "address"}, {
        "indexed": true,
        "internalType": "address",
        "name": "from",
        "type": "address"
    }, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}, {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
    }, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}],
    "name": "TransferSingle",
    "type": "event"
}, {
    "anonymous": false,
    "inputs": [{"indexed": false, "internalType": "string", "name": "value", "type": "string"}, {
        "indexed": true,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
    }],
    "name": "URI",
    "type": "event"
}, {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}, {
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
    }],
    "name": "balanceOf",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address[]", "name": "accounts", "type": "address[]"}, {
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
    }],
    "name": "balanceOfBatch",
    "outputs": [{"internalType": "uint256[]", "name": "", "type": "uint256[]"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "busd",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "allocationLimit", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "maxAllocation",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "price", "type": "uint256"}],
    "name": "createToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "disallowMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "account", "type": "address"}, {
        "internalType": "address",
        "name": "operator",
        "type": "address"
    }],
    "name": "isApprovedForAll",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "amountOutMin",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "deadline", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "allocationAmount",
        "type": "uint256"
    }, {"internalType": "bytes[]", "name": "data", "type": "bytes[]"}],
    "name": "mintAndAllocate",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "mmpro",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "name",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "owner",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "pauseMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [],
    "name": "renounceOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}],
    "name": "resumeMint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"internalType": "uint256[]", "name": "ids", "type": "uint256[]"}, {
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
    }, {"internalType": "bytes", "name": "data", "type": "bytes"}],
    "name": "safeBatchTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {
        "internalType": "address",
        "name": "to",
        "type": "address"
    }, {"internalType": "uint256", "name": "id", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {"internalType": "bytes", "name": "data", "type": "bytes"}],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}, {
        "internalType": "uint128",
        "name": "limit",
        "type": "uint128"
    }], "name": "setAllocationLimit", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "tokenId", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "newPrice",
        "type": "uint256"
    }], "name": "setAllocationPrice", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "operator", "type": "address"}, {
        "internalType": "bool",
        "name": "approved",
        "type": "bool"
    }], "name": "setApprovalForAll", "outputs": [], "stateMutability": "nonpayable", "type": "function"
}, {
    "inputs": [{"internalType": "bytes4", "name": "interfaceId", "type": "bytes4"}],
    "name": "supportsInterface",
    "outputs": [{"internalType": "bool", "name": "", "type": "bool"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [],
    "name": "swapRouter",
    "outputs": [{"internalType": "address", "name": "", "type": "address"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "tokensInfo",
    "outputs": [{"internalType": "uint256", "name": "allocationAmount", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "allocationLimit",
        "type": "uint256"
    }, {"internalType": "uint256", "name": "maxAllocation", "type": "uint256"}, {
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
    }, {"internalType": "bool", "name": "allowMint", "type": "bool"}, {
        "internalType": "bool",
        "name": "pauseMint",
        "type": "bool"
    }],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}],
    "name": "transferOwnership",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "name": "uri",
    "outputs": [{"internalType": "string", "name": "", "type": "string"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}, {
        "internalType": "address",
        "name": "",
        "type": "address"
    }],
    "name": "userAllocation",
    "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}],
    "stateMutability": "view",
    "type": "function"
}, {
    "inputs": [{"internalType": "address", "name": "token", "type": "address"}, {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
    }, {"internalType": "address", "name": "withdrawTo", "type": "address"}],
    "name": "withdrawExtraTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
}]
