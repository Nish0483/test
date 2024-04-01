// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract sample {
    uint256 public myVariable;

    event ValueChanged(uint256 newValue);

    /**
     * @dev Function to set the value of the state variable.
     * @param _newValue The new value to be set.
     */
    function setValue(uint256 _newValue) public {
        myVariable = _newValue;
        emit ValueChanged(_newValue);
    }

    /**
     * @dev Function to get the current value of the state variable.
     */
    function getValue() public view returns (uint256) {
        return myVariable;
    }
}
