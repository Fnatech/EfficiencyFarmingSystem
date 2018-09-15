

const hook = () => {
    return (hookDetails) => {
        let beforeData = hookDetails.data;
        console.log('before data:', beforeData);
        console.log('something', Object.keys(beforeData)[0])
        beforeData = { value: Object.keys(beforeData)[0]}
        console.log('result',beforeData);
        Object.assign(hookDetails, { data: beforeData });
        return hookDetails;
    }
}

export default hook;