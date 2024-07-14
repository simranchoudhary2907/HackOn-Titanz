// SPDX-License-Identifier: UNLICENSED

pragma solidity 0.8.6;

contract demo {
    uint num;
    function set(uint _num) public {
        num = _num+1;
    }
    function get() public view returns (uint) {
        return num;
    }
}
