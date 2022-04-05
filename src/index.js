'use strict'

const REDIS_CLIENT = process.env.REDIS_CLIENT;
const REDIS_AUTH = process.env.REDIS_AUTH;
const redis = require("redis");

class RedisClient {
     constructor()  {
       
        (async () => {
            this.client = redis.createClient(6380, REDIS_CLIENT,  {auth_pass:REDIS_AUTH, tls: {servername: REDIS_CLIENT}})
            this.client.on('error', (err) => console.log('Redis Client Error', err));
            await this.client.connect();
          })();
    }

    set(key, value) {
        this.client.set(key, value)
    }

    get(key) {
        return this.client.get(key)
    }

    delete(key) {
        return this.client.del(key)
    }
}


const fnSet = function(key, value)   {
    let redisClient = new RedisClient()
    return redisClient.set(key, value)
}

const fnGet = function(key, value)   {
    let redisClient = new RedisClient()
    return redisClient.get(key)
}

const fnDelete = function(key, value)   {
    let redisClient = new RedisClient()
    return redisClient.delete(key)
}

module.exports = {
    setCache: fnSet,
    getCache: fnGet,
    deleteCache: fnDelete
};