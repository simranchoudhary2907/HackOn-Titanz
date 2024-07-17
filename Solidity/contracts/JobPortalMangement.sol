//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.6;

contract JobPortal {
    struct JobPost {
        uint id;
        address employer;
        string title;
        string description;
        string requirements;
        uint salary;
        uint applicationDeadline;
        bool isActive;
    }

    uint public JobCount;
    mapping(uint => JobPost) public JobPosts;
    mapping(address => uint[]) public employerJobs;

    event JobCreated(uint id, address employer, string title);
    event JobUpdated(uint id, string title);
    event JobRemoved(uint id);

    function createJob(string memory _title, string memory _description, string memory _reqiurements, uint _salary, uint _applicationDeadine) public {
        JobCount++;
        JobPosts[JobCount] = JobPost(JobCount, msg.sender, _title, _description, _reqiurements, _salary, _applicationDeadine, true);
        employerJobs[msg.sender].push(JobCount);

        emit JobCreated(JobCount, msg.sender, _title);
    }

    function updatedJob(uint _id, string memory _title, string memory _description, string memory _reqiurements, uint _salary, uint _applicationDeadine) public {
        JobPost storage job = JobPosts[_id];
        require(job.employer == msg.sender, "Only the Employer can update");
        job.title = _title;
        job.description = _description;
        job.requirements = _reqiurements;
        job.salary = _salary;
        job.applicationDeadline = _applicationDeadine;

        emit JobUpdated(_id, _title);
    }

    function removeJob(uint _id) public {
        JobPost storage job = JobPosts[_id];
        require(job.employer == msg.sender, "Only Employer can Remove Jobs");
        job.isActive = false;

        emit JobRemoved(_id);
    }

    function getAllJobs() public view returns (JobPost[] memory){
        JobPost[] memory jobs = new JobPost[](JobCount);
        uint count = 0;
        for(uint i=1; i<=JobCount; i++){
            if(JobPosts[i].isActive){
                jobs[count] = JobPosts[i];
                count++; 
            }
        }
        return jobs;
    }
}

