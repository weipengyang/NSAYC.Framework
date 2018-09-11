using System.Collections.Generic;

namespace NSAYC.Application.Base.AuthorizeModule
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.04.17
    /// 描 述：用户关联对象
    /// </summary>
    public interface UserRelationIBLL
    {
        #region 获取数据
        /// <summary>
        /// 获取对象主键列表信息
        /// </summary>
        /// <param name="userId">用户主键</param>
        /// <param name="category">分类:1-角色2-岗位</param>
        /// <returns></returns>
        List<UserRelationEntity> GetObjectIdList(string userId, int category);
        /// <summary>
        /// 获取对象主键列表信息
        /// </summary>
        /// <param name="userId">用户主键</param>
        /// <param name="category">分类:1-角色2-岗位</param>
        /// <returns></returns>
        string GetObjectIds(string userId, int category);
        /// <summary>
        /// 获取用户主键列表信息
        /// </summary>
        /// <param name="objectId">用户主键</param>
        /// <returns></returns>
        IEnumerable<UserRelationEntity> GetUserIdList(string objectId);
        #endregion

        #region 提交数据
        /// <summary>
        /// 保存用户对应对象数据
        /// </summary>
        /// <param name="objectId">对应对象主键</param>
        /// <param name="category">分类:1-角色2-岗位</param>
        /// <param name="userIds">对用户主键列表</param>
        void SaveEntityList(string objectId, int category, string userIds);
        #endregion
    }
}
