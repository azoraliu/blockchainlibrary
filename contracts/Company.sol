pragma solidity ^0.4.17;

contract Alliance {
    struct Company {
        string name;
        string industry;
        string corporation;
        string registeredfund;
        string addr;
        string website;
        string contact;
        string email;
        string phone;
        address[] voters;
    }

    address public owner;
    string public description;
    address[] public entities;
    Company[] public companies;


    constructor(string _description, string _entities, string _companies) public {
        owner = msg.sender;
        description = _description;
    }

    function join() public payable {
        investors.push(msg.sender);
    }

    function apply(string _name, string _industry, string _corporation, string _registeredfund, string _addr, string _website, string _contact, string _email, string _phone) public {
        Company memory newCompany = Company({
            name: _name,
            industry: _industry,
            corporation: _corporation,
            registeredfund: _registeredfund,
            addr: _addr,
            website: _website,
            contact: _contact,
            email: _email,
            phone: _phone,
            voters: new address[](0)
        });

        companies.push(newCompany);
    }

    function approveCompany(unit index) public {
        Company storage company = companies[index];

        //must be 
    }
}