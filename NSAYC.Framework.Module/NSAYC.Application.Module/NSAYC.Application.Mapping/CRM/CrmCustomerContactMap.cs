using NSAYC.Application.CRM;
using System.Data.Entity.ModelConfiguration;

namespace  NSAYC.Application.Mapping
{
    /// <summary>
    /// �� �� NSAYCFrameWork V1.1.0 �������������
    /// Copyright (c) 2013-2017 �����а����������������޹�˾
    /// �� ������������Ա
    /// �� �ڣ�2017-07-11 09:58
    /// �� �����ͻ���ϵ��
    /// </summary>
    public class CrmCustomerContactMap : EntityTypeConfiguration<CrmCustomerContactEntity>
    {
        public CrmCustomerContactMap()
        {
            #region ������
            //��
            this.ToTable("LR_CRM_CUSTOMERCONTACT");
            //����
            this.HasKey(t => t.F_CustomerContactId);
            #endregion

            #region ���ù�ϵ
            #endregion
        }
    }
}

