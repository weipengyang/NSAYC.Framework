using NSAYC.Application.CRM;
using System.Data.Entity.ModelConfiguration;

namespace  NSAYC.Application.Mapping
{
    /// <summary>
    /// �� �� NSAYCFrameWork V1.1.0 �������������
    /// Copyright (c) 2013-2017 �����а����������������޹�˾
    /// �� ������������Ա
    /// �� �ڣ�2017-07-10 17:59
    /// �� ������������
    /// </summary>
    public class LR_CRM_OrderEntryMap : EntityTypeConfiguration<CrmOrderProductEntity>
    {
        public LR_CRM_OrderEntryMap()
        {
            #region ������
            //��
            this.ToTable("LR_CRM_ORDERPRODUCT");
            //����
            this.HasKey(t => t.F_OrderEntryId);
            #endregion

            #region ���ù�ϵ
            #endregion
        }
    }
}

