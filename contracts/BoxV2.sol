// Implementation (Logic)
// SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

contract BoxV2 {
    uint256 private value;

    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // Stores a new value in the contract
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    // Reads the last stored value
    function retrieve() public view returns (uint256) {
        return value;
    }

    function version() public pure returns (uint256) {
        return 2;
    }

    function increment() public {
        value = value + 1;
        emit ValueChanged(value);
    }
}
