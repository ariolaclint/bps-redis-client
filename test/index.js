let chai = require('chai');
let { setCache, getCache, deleteCache } = require("./../src/index");

var expect = chai.expect

describe('BPS Redis Client Test', () => {

    it('should equal to the cache value',  (done)  =>  {
    
        let key = "key00123456"
        let value = "value0011111231345"

        new Promise( async (resolve, reject) => {

            await setCache(key, value)

            let cacheValue = await getCache(key)
            console.log("key-value:" + key + ":" + cacheValue)

            expect(cacheValue).to.equal(value);

            resolve(true)
        }).then(() => {
            done()
        })
    }).timeout(5000)

    it('should equal to null after cache deleted',  (done)  =>  {
    
        let key = "key00123456"
        let value = null

        new Promise( async (resolve, reject) => {

            await deleteCache(key)

            let cacheValue = await getCache(key)
            console.log("key-value:" + key + ":" + cacheValue)

            expect(cacheValue).to.equal(value);

            resolve(true)
        }).then(() => {
            done()
        })
    }).timeout(5000)


});