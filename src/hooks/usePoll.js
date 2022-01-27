import { useState } from 'react';

const usePoll = () => {

    const [allPoll, setAllPoll] = useState([]);

    const createNewPoll = (poll) => {
        poll.id = allPoll.length + 1;
        setAllPoll([...allPoll, poll]);
    }

    return [
        allPoll,
        createNewPoll
    ];
};

export default usePoll;