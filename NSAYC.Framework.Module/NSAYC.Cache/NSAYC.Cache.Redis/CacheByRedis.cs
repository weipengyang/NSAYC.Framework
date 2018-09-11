﻿using NSAYC.Cache.Base;
using System;
using System.Collections.Generic;

namespace NSAYC.Cache.Redis
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.03.06
    /// 描 述：定义缓存接口
    /// </summary>
    public class CacheByRedis : ICache
    {
        #region Key-Value
        /// <summary>
        /// 读取缓存
        /// </summary>
        /// <param name="cacheKey">键</param>
        /// <returns></returns>
        public T Read<T>(string cacheKey, long dbId = 0) where T : class
        {
            return RedisCache.Get<T>(cacheKey, dbId);
        }
        /// <summary>
        /// 写入缓存
        /// </summary>
        /// <param name="value">对象数据</param>
        /// <param name="cacheKey">键</param>
        public void Write<T>(string cacheKey, T value, long dbId = 0) where T : class
        {
            RedisCache.Set(cacheKey, value, dbId);
        }
        /// <summary>
        /// 写入缓存
        /// </summary>
        /// <param name="value">对象数据</param>
        /// <param name="cacheKey">键</param>
        /// <param name="expireTime">到期时间</param>
        public void Write<T>(string cacheKey, T value, DateTime expireTime, long dbId = 0) where T : class
        {
            RedisCache.Set(cacheKey, value, expireTime, dbId);
        }
        /// <summary>
        /// 写入缓存
        /// </summary>
        /// <param name="value">对象数据</param>
        /// <param name="cacheKey">键</param>
        /// <param name="TimeSpan">缓存时间</param>
        public void Write<T>(string cacheKey, T value, TimeSpan timeSpan, long dbId = 0) where T : class
        {
            RedisCache.Set(cacheKey, value, timeSpan, dbId);
        }
        /// <summary>
        /// 移除指定数据缓存
        /// </summary>
        /// <param name="cacheKey">键</param>
        public void Remove(string cacheKey, long dbId = 0)
        {
            RedisCache.Remove(cacheKey, dbId);
        }
        /// <summary>
        /// 移除全部缓存
        /// </summary>
        public void RemoveAll(long dbId = 0)
        {
            RedisCache.RemoveAll(dbId);
        }
        #endregion
    }
}
