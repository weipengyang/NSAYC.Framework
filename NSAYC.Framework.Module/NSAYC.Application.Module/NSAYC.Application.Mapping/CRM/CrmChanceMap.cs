using NSAYC.Application.CRM;
using System.Data.Entity.ModelConfiguration;

namespace  NSAYC.Application.Mapping
{
    /// <summary>
    /// �� �� NSAYCFrameWork V1.1.0 �������������
    /// Copyright (c) 2013-2017 �����а����������������޹�˾
    /// �� ������������Ա
    /// �� �ڣ�2017-07-11 11:30
    /// �� �����̻�����
    /// </summary>
    public class CrmChanceMap : EntityTypeConfiguration<CrmChanceEntity>
    {
        public CrmChanceMap()
        {
            #region ������
            //��
            this.ToTable("LR_CRM_CHANCE");
            //����
            this.HasKey(t => t.F_ChanceId);
            #endregion

            #region ���ù�ϵ
            #endregion
        }
    }
}

