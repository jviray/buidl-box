pragma solidity ^0.4.24;

contract DaoUser {

    enum Rank { User, Verifier }

    struct User {
        string name;
        uint reputation;
        Rank rank;
    }

    User[] public users;
    uint public userCount = 0;

    mapping (address => uint) public findUserID;
    mapping (address => bool) public isRegistered;

    function createUser(string _name) public {
        uint id = users.push(User(_name, 0, Rank.User)) - 1;

        isRegistered[msg.sender] = true;
        findUserID[msg.sender] = id;
        userCount++;
    }

    function electVerifier() public {
        users[findUserID[msg.sender]].rank = Rank.Verifier;
    }

    function isRegistered(address _user) public view returns (bool) {
        return isRegistered[_user];
    }

    function getUserCount() public view returns(uint) {
        return users.length;
    }
}
