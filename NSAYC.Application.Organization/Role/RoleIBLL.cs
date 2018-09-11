using NSAYC.Util;
using System.Collections.Generic;
namespace NSAYC.Application.Organization
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.03.04
    /// 描 述：角色管理
    /// </summary>
    public interface RoleIBLL
    {
        #region 获取数据
        /// <summary>
        /// 获取角色数据列表
        /// </summary>
        /// <returns></returns>
        List<RoleEntity> GetList();
        /// <summary>
        /// 获取角色数据列表
        /// </summary>
        /// <param name="keyword">关键字</param>
        /// <returns></returns>
        List<RoleEntity> GetList(string keyword);
        /// <summary>
        /// 获取分页数据
        /// </summary>
        /// <param name="pagination">分页参数</param>
        /// <param name="keyword">查询关键词</param>
        /// <returns></returns>
        List<RoleEntity> GetPageList(Pagination pagination, string keyword);
         /// <summary>
        /// 获取角色数据列表
        /// </summary>
        /// <param name="roleIds">主键串</param>
        /// <returns></returns>
        IEnumerable<RoleEntity> GetListByRoleIds(string roleIds);
        #endregion

        #region 提交数据
        /// <summary>
        /// 虚拟删除角色
        /// </summary>
        /// <param name="keyValue">主键</param>
        void VirtualDelete(string keyValue);
        /// <summary>
        /// 保存角色（新增、修改）
        /// </summary>
        /// <param name="keyValue">主键值</param>
        /// <param name="roleEntity">角色实体</param>
        /// <returns></returns>
        void SaveEntity(string keyValue, RoleEntity roleEntity);
        #endregion
    }
}
