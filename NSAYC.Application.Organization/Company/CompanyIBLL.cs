using NSAYC.Util;
using System.Collections.Generic;

namespace NSAYC.Application.Organization
{
    /// <summary>
    /// 版 本 NSAYCFrameWork V1.1.0 爱养车开发框架
    /// Copyright (c) 2013-2017 广州市爱养车汽车服务有限公司
    /// 创建人：爱养车-框架开发组
    /// 日 期：2017.04.17
    /// 描 述：公司管理
    /// </summary>
    public interface CompanyIBLL
    {
        #region 获取数据
        /// <summary>
        /// 获取公司列表数据
        /// </summary>
        /// <returns></returns>
        List<CompanyEntity> GetList();
        /// <summary>
        /// 获取公司列表数据
        /// </summary>
        /// <param name="keyWord">查询关键字</param>
        /// <returns></returns>
        List<CompanyEntity> GetList(string keyWord);
        /// <summary>
        /// 获取公司信息实体
        /// </summary>
        /// <param name="keyValue">主键</param>
        /// <returns></returns>
        CompanyEntity GetEntity(string keyValue);
        /// <summary>
        /// 获取树形数据
        /// </summary>
        /// <param name="parentId">父级id</param>
        /// <returns></returns>
        List<TreeModel> GetTree(string parentId);

        /// <summary>
        /// 获取公司本身和子公司的id
        /// </summary>
        /// <param name="parentId">父级ID</param>
        /// <returns></returns>
        List<string> GetSubNodes(string parentId);


        /// <summary>
        /// 获取公司映射数据
        /// </summary>
        /// <returns></returns>
        Dictionary<string, CompanyModel> GetModelMap();
        #endregion

        #region 提交数据
        /// <summary>
        /// 虚拟删除公司信息
        /// </summary>
        /// <param name="keyValue">主键</param>
        void VirtualDelete(string keyValue);
        /// <summary>
        /// 保存公司信息（新增、修改）
        /// </summary>
        /// <param name="keyValue">主键值</param>
        /// <param name="companyEntity">公司实体</param>
        /// <returns></returns>
        void SaveEntity(string keyValue, CompanyEntity companyEntity);
        #endregion
    }
}
