import Caver from 'caver-js';

const NullAddress = '0x0000000000000000000000000000000000000000';

function caver() {
    return new Caver(window.klaytn);
}

function isInstalled() {
    return window.klaytn !== undefined;
}

function getNetwork() {
    return window.klaytn.networkVersion;
}

function getAccount() {
    return new Promise((resolve, reject) => {
        window.klaytn
            .enable()
            .then((accounts) => {
                resolve(accounts[0]);
            })
            .catch((err) => {
                console.error('kaikas getAccount():', err);
                reject(err);
            });
    });
}

function getBalance(account) {
    return new Promise((resolve, reject) => {
        caver()
            .klay.getBalance(account)
            .then((result) => {
                resolve(result);
            })
            .catch((err) => {
                console.error('kaikas getBalance():', err);
                reject(err);
            });
    });
}

function onAccountChanged(handler) {
    window.klaytn.on('accountsChanged', handler);
    return () => {
        window.klaytn.off('accountsChanged', handler);
    };
}

function onNetworkChanged(handler) {
    window.klaytn.on('networkChanged', handler);
    return () => {
        window.klaytn.off('networkChanged', handler);
    };
}

async function deployContract(data) {
    const from = await getAccount();
    console.log(from);
    caver()
        .klay.sendTransaction({
            type: 'SMART_CONTRACT_DEPLOY',
            from,
            data,
            value: caver().utils.toPeb('0', 'KLAY'),
            gas: 300000000,
        })
        .once('transactionHash', (transactionHash) => {
            console.log('txHash', transactionHash);
        })
        .once('receipt', (receipt) => {
            console.log('receipt', receipt);
        })
        .once('error', (err) => {
            console.log('error', err);
        });
}

function contract(address, abi) {
    return caver().contract.create(abi, address);
}

function sendTransaction(params) {
    caver()
        .klay.sendTransaction(params)
        .on('transactionHash', (transactionHash) => {
            console.log('txHash', transactionHash);
        });
}

const kaikas = {
    isInstalled,
    getNetwork,
    getAccount,
    getBalance,
    onAccountChanged,
    onNetworkChanged,
    deployContract,
    contract,
    sendTransaction,
};

export default kaikas;
