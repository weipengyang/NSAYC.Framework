using NSAYC.Application.CRM;
using System.Data.Entity.ModelConfiguration;

namespace  NSAYC.Application.Mapping
{
    /// <summary>
    /// �� �� NSAYCFrameWork V1.1.0 �������������
    /// Copyright (c) 2013-2017 �����а����������������޹�˾
    /// �� ������������Ա
    /// �� �ڣ�2017-07-11 09:43
    /// �� �����ͻ�����
    /// </summary>
    public class CrmCustomerMap : EntityTypeConfiguration<CrmCustomerEntity>
    {
        public CrmCustomerMap()
        {
            #region ������
            //��
            this.ToTable("LR_CRM_CUSTOMER");
            //����
            this.HasKey(t => t.F_CustomerId);
            #endregion

            #region ���ù�ϵ
            #endregion
        }
    }
}

